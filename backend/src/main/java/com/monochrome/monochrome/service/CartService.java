package com.monochrome.monochrome.service;

import com.monochrome.monochrome.dto.CartRequest;
import com.monochrome.monochrome.dto.CartResponse;

public interface CartService {

    CartResponse createCart(CartRequest request) throws Exception;
}
