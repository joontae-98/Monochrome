package com.monochrome.monochrome.controller;

import com.monochrome.monochrome.dto.*;
import com.monochrome.monochrome.service.AuthenticationService;
import com.monochrome.monochrome.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class TestController {
  private final AuthenticationService authenticationService;
  private final CartService cartService;

  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public ResponseEntity<String> index() throws Exception {
    return ResponseEntity.ok("hello");
  }

  @RequestMapping(value = "/auth/register", method = RequestMethod.POST)
  public ResponseEntity<AuthenticationResponse> register(
          @RequestBody RegisterRequest request
  ) throws Exception {
    return ResponseEntity.ok(authenticationService.register(request));
  }

  // 로그인
  @RequestMapping(value = "/auth/authenticate", method = RequestMethod.POST)
  public ResponseEntity<AuthenticationResponse> authenticate(
          @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(authenticationService.authenticate(request));
  }


  // cart 값 insert 테스트를 위한 함수
  // 테스트 함수로써 토큰없이 구현 동작하도록 /auth/cartTest 로 uri 구현
  // 입력 값과 출력 값은 trello에 이미지로 저장했음.
  @RequestMapping(value = "/auth/cartTest", method = RequestMethod.POST)
  public ResponseEntity<CartResponse> cartInsert(
          @RequestBody CartRequest request
          ) throws Exception {
    return ResponseEntity.ok(cartService.createCart(request));
  }


}
