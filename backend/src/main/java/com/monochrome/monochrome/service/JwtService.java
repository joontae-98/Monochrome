package com.monochrome.monochrome.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

  @Value("${security.secret.key}")
  private String SECRET_KEY;

  @Value("${security.jwt.expired_after_ms}")
  private int JWT_EXPIRED_AFTER_MS;

  // username(이메일) 추출 코드
  public String extractUsername(String token) {
    return extractClaim(token, Claims::getSubject);
  }

  // 토큰에서 특정한 정보 추출 코드
  public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }

  public String generateToken(UserDetails userDetails) {
    return generateToken(new HashMap<>(), userDetails);
  }

  // 토큰 생성 코드
  public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
    return Jwts
            .builder()
            .setClaims(extraClaims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRED_AFTER_MS))
            .signWith(getSignInKey(), SignatureAlgorithm.HS256)
            .compact();
  }

  public boolean isTokenValid(String token, UserDetails userDetails) {
    final String username = extractUsername(token);
    final boolean isUserNameMatched = username.equals(userDetails.getUsername());
    return isUserNameMatched && !isTokenExpired(token);
  }

  private boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

  // 만료일 추출 코드
  private Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }

  // 모든 데이터 추출 코드
  private Claims extractAllClaims(String token) {
    return Jwts
            .parserBuilder()
            .setSigningKey(getSignInKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
  }

  private Key getSignInKey() {
    byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keyBytes);
  }
}
