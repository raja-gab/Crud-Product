package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Produit;
import com.example.demo.repository.ProduitRepository;

@Service
public class ProduitService {
	
	@Autowired
	private ProduitRepository produitRepository ; 
	
	public List<Produit> listAll()
	{
		return produitRepository.findAll();
	}

	public Optional<Produit> findProduitById (Long id)
	{
		return produitRepository.findById(id);
	}

	public Optional<Produit> findProduitByName (String nom)
	{
		return produitRepository.findProduitByNom(nom);
	}
	public Produit saveProduit (Produit produit)
	{
		return produitRepository.save(produit);
	}
	public void deleteProduit(Long id )
	{
		produitRepository.deleteById(id);
	}

	

}
