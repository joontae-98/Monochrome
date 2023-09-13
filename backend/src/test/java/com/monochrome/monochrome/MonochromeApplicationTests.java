package com.monochrome.monochrome;

import com.monochrome.monochrome.dto.ProductsDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MonochromeApplicationTests {

    @Test
    void contextLoads() {
        convertTest();
    }

    // 문자열 추출을 위한 함수
    public String extractionString(String str, String start, String end, int length) {
        if (str == null || start == null || end == null) {
            return null;
        }
        return str.substring(str.indexOf(start) + length, str.indexOf(end));
    }

    // 객체를 변환하여 데이터 베이스에 저장하기 위한 테스트 코드
    public void convertTest() {
        ProductsDTO a = ProductsDTO.builder()
                .productId(1L)
                .size("s")
                .build();
        String s = a.toString();
        Long productId = Long.valueOf(extractionString(s, "productId=", ", ", 10));
        String size = extractionString(s, "size=", ")", 5);
        ProductsDTO b = ProductsDTO.builder()
                .productId(productId)
                .size(size)
                .build();

        System.out.println("추출");
        System.out.println(b.toString());
    }

}
