package com.monochrome.monochrome.filter;

import com.monochrome.monochrome.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JwtService jwtService;
  private final UserDetailsService userDetailsService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    final String JWT_PREFIX = "Bearer ";
    final String JWT_HEADER_KEY = "Authorization";
    final String authHeader = request.getHeader(JWT_HEADER_KEY);
    final String jwt;
    final String userEmail;

    // jwt token 형식이 아니면 요청을 차단함
    if (authHeader == null || !authHeader.startsWith(JWT_PREFIX)) {
      filterChain.doFilter(request, response);
      return;
    }
    jwt = authHeader.substring(JWT_PREFIX.length());
    userEmail = jwtService.extractUsername(jwt); //토큰에서 유저 이메일 추출
    // jwt 토큰에 유저 이메일이 없고, 아직 인증되지 않은 유저라면
    if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
      // db에서 유저 정보 호출
      UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
      // token이 유효하다면
      if (jwtService.isTokenValid(jwt, userDetails)) {
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                userDetails,
                null,
                userDetails.getAuthorities()
        );
        authToken.setDetails(
                new WebAuthenticationDetailsSource().buildDetails(request)
        );

        SecurityContextHolder.getContext().setAuthentication(authToken);
      }
    }
    filterChain.doFilter(request, response);
  }
}
