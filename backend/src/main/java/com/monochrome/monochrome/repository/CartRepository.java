package com.monochrome.monochrome.repository;

import com.monochrome.monochrome.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {

}
