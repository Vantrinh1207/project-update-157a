package com.example.recipeapp.model;

import jakarta.persistence.*;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(name = "marketing_opt_in")
    private Boolean marketingOptIn;

    // Getters and setters

        // Default constructor
        public User() {}

        // Getters
        public Long getId() {
            return id;
        }
    
        public String getFirstName() {
            return firstName;
        }
    
        public String getLastName() {
            return lastName;
        }
    
        public String getEmail() {
            return email;
        }
    
        public String getPassword() {
            return password;
        }
    
        public Boolean getMarketingOptIn() {
            return marketingOptIn;
        }
    
        // Setters
        public void setId(Long id) {
            this.id = id;
        }
    
        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }
    
        public void setLastName(String lastName) {
            this.lastName = lastName;
        }
    
        public void setEmail(String email) {
            this.email = email;
        }
    
        public void setPassword(String password) {
            this.password = password;
        }
    
        public void setMarketingOptIn(Boolean marketingOptIn) {
            this.marketingOptIn = marketingOptIn;
        }
    }
    

