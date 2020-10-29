package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Produit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id ; 
	
	@NotBlank
	@Column(nullable = false)
	private String nom ; 
	
	@NotBlank()
	@Column(nullable = false)
	private int quantite ; 
	
	@NotBlank
	@Column(nullable = false)
	private double prixUnitaire ;

}
