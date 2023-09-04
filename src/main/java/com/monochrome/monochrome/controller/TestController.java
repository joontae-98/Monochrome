package com.monochrome.monochrome.controller;

import com.monochrome.monochrome.dto.AuthenticationRequest;
import com.monochrome.monochrome.dto.AuthenticationResponse;
import com.monochrome.monochrome.dto.RegisterRequest;
import com.monochrome.monochrome.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class TestController {
  private final AuthenticationService authenticationService;

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

}
