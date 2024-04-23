package com.example.recipeapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.recipeapp.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // Custom query to find recipes by user
    List<Recipe> findByUserId(Long userId);
}
