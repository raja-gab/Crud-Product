package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long>{
	
	Optional<Produit> findProduitByNom(String nom);

}
