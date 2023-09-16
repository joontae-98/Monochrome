package com.monochrome.monochrome.service;

import com.monochrome.monochrome.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Override
  public boolean checkEmailDuplicate(String email) {
    return userRepository.existsByEmail(email);
  }
}
