package com.monochrome.monochrome.service;

import com.monochrome.monochrome.common.Constants;
import com.monochrome.monochrome.common.exception.CustomException;
import com.monochrome.monochrome.dto.AuthenticationRequest;
import com.monochrome.monochrome.dto.AuthenticationResponse;
import com.monochrome.monochrome.dto.RegisterRequest;
import com.monochrome.monochrome.entity.Role;
import com.monochrome.monochrome.entity.User;
import com.monochrome.monochrome.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) throws Exception {
    User prevUser = userRepository.findByEmail(request.getEmail()).orElseGet(() -> null);
    if (prevUser != null) {
      throw new CustomException(Constants.ExceptionType.AUTHENTICATION, HttpStatus.BAD_REQUEST, "User already Exists");
    }
    // 회원가입을 위해 유저를 db에 등록
    User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword())) // 비밀번호 인코딩
            .role(Role.USER)
            .phone(request.getPhone())
            .build();
    userRepository.save(user);

    String jwtToken = jwtService.generateToken(user);
    return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    // 인증 시도. 인증에 실패하면 AuthenticationError 반환됨
    authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    request.getEmail(),
                    request.getPassword()
            )
    );

    // 인증 성공 시
    User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
    String jwtToken = jwtService.generateToken(user);
    return AuthenticationResponse.builder()
            .email(user.getEmail())
            .name(user.getName())
            .token(jwtToken)
            .build();
  }
}
