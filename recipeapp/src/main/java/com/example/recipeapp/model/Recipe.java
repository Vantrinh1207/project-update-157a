package com.example.recipeapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    
    @Column
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters and setters
      // Default constructor for JPA
      public Recipe() {}

      // Getters
      public Long getId() {
          return id;
      }
  
      public String getName() {
          return name;
      }
  
      public String getDescription() {
          return description;
      }
  
      public User getUser() {
          return user;
      }
  
      // Setters
      public void setId(Long id) {
          this.id = id;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public void setDescription(String description) {
          this.description = description;
      }
  
      public void setUser(User user) {
          this.user = user;
      }
  

}