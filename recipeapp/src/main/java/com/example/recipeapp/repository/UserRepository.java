package com.example.recipeapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.recipeapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom query methods if needed
}
