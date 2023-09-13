package com.monochrome.monochrome.common;

import com.monochrome.monochrome.dto.ProductsDTO;
import jakarta.persistence.AttributeConverter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ProductsListConverter implements AttributeConverter<List<ProductsDTO>, String> {
    private static final String SPLIT_CHAR = ", ";

    @Override
    public String convertToDatabaseColumn(List<ProductsDTO> productsList) {

        List<String> strList = new ArrayList<>();
        for (ProductsDTO dto : productsList) {
            strList.add(dto.toString());
        }
        return String.join(SPLIT_CHAR, strList);
    }

    @Override
    public List<ProductsDTO> convertToEntityAttribute(String productsStr) {
        List<String> strList = Arrays.asList(productsStr.split(SPLIT_CHAR + "p"));
        List<ProductsDTO> productsList = new ArrayList<>();
        for (String str : strList) {

            Long productId = Long.valueOf(extractionString(str, "productId=", ", ", 10));
            String size = extractionString(str, "size=", ")", 5);

            ProductsDTO products = ProductsDTO.builder()
                    .productId(productId)
                    .size(size)
                    .build();
            productsList.add(products);
        }
        return productsList;
    }

    public String extractionString(String str, String start, String end, int length) {
        if (str == null || start == null || end == null) {
            return null;
        }
        return str.substring(str.indexOf(start) + length, str.indexOf(end));
    }
}
