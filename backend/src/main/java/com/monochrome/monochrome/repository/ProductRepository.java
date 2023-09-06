package com.monochrome.monochrome.repository;

import com.monochrome.monochrome.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {


}
