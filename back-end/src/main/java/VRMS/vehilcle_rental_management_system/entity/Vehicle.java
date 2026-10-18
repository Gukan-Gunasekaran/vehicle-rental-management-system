package VRMS.vehilcle_rental_management_system.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name="vehicle")
@Data
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long r_no;

    @Column
    String brand;

    @Column
    String model;

    @Column
    Short year;

    @Column
    String category;

    @Column(nullable = false)
    int h_charge;
}
