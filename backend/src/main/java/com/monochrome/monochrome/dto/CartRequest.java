package com.monochrome.monochrome.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartRequest {

    // 데이터 추가 시 자동으로 날짜 생성
//    private LocalDateTime date;
    private String userId;
    private List<ProductsDTO> products;
}
