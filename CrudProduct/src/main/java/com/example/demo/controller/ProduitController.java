package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Produit;
import com.example.demo.service.ProduitService;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProduitController {
	
	@Autowired
	private ProduitService produitService;

	@GetMapping("/listAll")
	public List<Produit> listAll(){
		return produitService.listAll();
	}
	
	@GetMapping("/findbyid/{id}")
	public Optional<Produit> findById(@PathVariable ("id") Long id)
	{
		return produitService.findProduitById(id);
	}
	
	@GetMapping("/findbyname/{nom}")
	public Optional<Produit> findByName (@PathVariable ("nom") String nom )
	{
		return produitService.findProduitByName(nom);
	}
	
	@PostMapping("/addproduit")
	public Produit addProduit (@RequestBody Produit produit) {
		
		Produit p = new Produit();
		p.setNom(produit.getNom());
		p.setPrixUnitaire(produit.getPrixUnitaire());
		p.setQuantite(produit.getQuantite());
		produitService.saveProduit(p);
		return p ; 
		
		
	}
	
	@PutMapping("/editproduit/{id}")
	public Produit editProduit (@RequestBody Produit produit, @PathVariable Long id)
	{
		
		Produit p = produitService.findProduitById(id).orElse(null);
		p.setNom(produit.getNom());
		p.setPrixUnitaire(produit.getPrixUnitaire());
		p.setQuantite(produit.getQuantite());
		produitService.saveProduit(p);
		return p ;
	}
	@DeleteMapping("/deleteproduit/{id}")
	public void deleteProduit(@PathVariable ("id")  Long id)
	{
		produitService.deleteProduit(id);
	}
}
