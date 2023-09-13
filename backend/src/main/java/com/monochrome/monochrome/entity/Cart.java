package com.monochrome.monochrome.entity;

import com.monochrome.monochrome.common.ProductsListConverter;
import com.monochrome.monochrome.dto.ProductsDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime date;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Convert(converter = ProductsListConverter.class)
    private List<ProductsDTO> products;

}
