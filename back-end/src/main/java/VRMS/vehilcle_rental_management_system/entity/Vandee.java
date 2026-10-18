package VRMS.vehilcle_rental_management_system.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name="vandee")
@Data
public class Vandee {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long V_id;

    @Column(nullable = false)
    String v_name;

    @Column(nullable = false)
    Character gender;

    @Column(nullable = false)
    String mail;

    @Column(nullable = false)
    String street;

    @Column(nullable=false)
    String city;

    @Column(nullable = false)
    String taluk;

    @Column(nullable = false)
    String district;

    @Column(nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy hh:mm a")
    Date s_date;

    @Column(nullable = false)
    @JsonFormat(pattern ="dd-MM-yyyy hh:mm a")
    Date e_date;
}
