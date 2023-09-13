package com.monochrome.monochrome.service;

import com.monochrome.monochrome.dto.CartRequest;
import com.monochrome.monochrome.dto.CartResponse;
import com.monochrome.monochrome.entity.Cart;
import com.monochrome.monochrome.entity.User;
import com.monochrome.monochrome.repository.CartRepository;
import com.monochrome.monochrome.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class CartServiceImpl implements CartService {

  private final CartRepository cartRepository;
  private final UserRepository userRepository;

  @Override
  public CartResponse createCart(CartRequest request) throws Exception {

    // 외래키인 user의 값을 저장하기 위해 user 데이터를 가져옴
    User user = userRepository.findByEmail(request.getUserId()).orElseGet(() -> null);

    // builder를 이용하여 Cart 객체 생성
    Cart cart = Cart.builder()
      .user(user)
      .date(LocalDateTime.now()) // 후순위 변경 예정
      .products(request.getProducts())
      .build();

    // save 함수를 이용 시 저장된 값이 Cart 객체로 반환됨
    Cart saveCart = cartRepository.save(cart);

    // 반환된 Cart값을 이용하여 cartresponse에 담아 결과값으로 리턴
    return CartResponse.builder()
      .id(String.valueOf(saveCart.getId()))
      .date(String.valueOf(saveCart.getDate()))
      .userId(saveCart.getUser().getEmail())
      .products(saveCart.getProducts())
      .build();
  }
}
