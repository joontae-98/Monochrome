package com.monochrome.monochrome.dto;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class ProductsDTO implements Serializable {

    private Long productId;
    private String size;
}
