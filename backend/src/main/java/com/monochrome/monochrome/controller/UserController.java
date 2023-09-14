package com.monochrome.monochrome.controller;

import com.monochrome.monochrome.dto.AuthenticationRequest;
import com.monochrome.monochrome.dto.AuthenticationResponse;
import com.monochrome.monochrome.dto.RegisterRequest;
import com.monochrome.monochrome.service.AuthenticationService;
import com.monochrome.monochrome.service.CartService;
import com.monochrome.monochrome.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

  private final AuthenticationService authenticationService;
  private final UserService userService;
//  private final CartService cartService;

  // 아이디 중복 체크
  @RequestMapping(value = "/auth/emailCheck", method = RequestMethod.POST)
  public ResponseEntity<Boolean> emailCheck(@RequestParam String email) {
    // email이 존재한다면 true 반환 없다면 false 반환
    return ResponseEntity.ok(userService.checkEmailDuplicate(email));
  }

  // 회원가입
  @RequestMapping(value = "/auth/register", method = RequestMethod.POST)
  public String register(
    @RequestBody RegisterRequest request
  ) throws Exception {
    if(ResponseEntity.ok(authenticationService.register(request)).hasBody()){
      return request.getName();
    } else {
      return "Fail";
    }
  }

  // 로그인
  @RequestMapping(value = "/auth/authenticate", method = RequestMethod.POST)
  public ResponseEntity<AuthenticationResponse> authenticate(
    @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(authenticationService.authenticate(request));
  }

}
