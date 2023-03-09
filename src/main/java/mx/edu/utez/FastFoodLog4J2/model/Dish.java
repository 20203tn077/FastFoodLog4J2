package mx.edu.utez.FastFoodLog4J2.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDateTime;

@Entity
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(max = 64, message = "Ocurrió un error: E007")
    @Column(nullable = false, length = 64)
    @NotBlank(message = "Ocurrió un error: E008")
    @NotNull(message = "Ocurrió un error: E009")
    private String name;
    @Column(nullable = false, length = 128)
    @NotBlank(message = "Ocurrió un error: E011")
    @NotNull(message = "Ocurrió un error: E012")
    @Size(max = 128, message = "Ocurrió un error: E010")
    private String description;
    @Column(nullable = false)
    @Positive(message = "Ocurrió un error: E013")
    @NotNull(message = "Ocurrió un error: E014")
    private Double price;
    @NotNull(message = "Ocurrió un error: E015")
    @Column(nullable = false)
    private LocalDateTime registrationDate;
    @Column(nullable = false)
    @NotNull(message = "Ocurrió un error: E016")
    private Boolean status = true;

    public Dish() {
    }

    public Dish(Long id, String name, String description, Double price, LocalDateTime registrationDate, Boolean status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.registrationDate = registrationDate;
        this.status = status;
    }

    public Dish(String name, String description, Double price, LocalDateTime registrationDate, Boolean status) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.registrationDate = registrationDate;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
