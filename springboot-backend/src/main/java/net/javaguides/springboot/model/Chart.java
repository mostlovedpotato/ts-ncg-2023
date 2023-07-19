package net.javaguides.springboot.model;

import com.sun.jdi.CharType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "charts")
public class Chart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "cname")
    private String cname;
    @Column(name = "chartType")
    private String chartType;
    @Column(name="country")
    private String country;
    @Column(name="indicator")
    private long indicator;
    @Column(name="startDate")
    private Date startDate;
    @Column(name = "endDate")
    private Date endDate;

}
