import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../service/produit-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private service : ProduitService , private router : Router) { }
  produits : any
  searchText : any

  ngOnInit(): void {

    this.getAllProduit();
  }

  getAllProduit()
  {
    this.service.getProduits().subscribe(data=>{
      this.produits=data;
      console.log(data)
      
    },err=>{
      console.log(err);
    }
    )
  }
  produit(id) {
    this.router.navigate(['editProduit', id])
  }
  deleteProduit(id)
  {
    
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(id);
      this.service.deleteProduit(id).subscribe(data => { 
      this.getAllProduit()
    }, err => {
        console.log(err);
    })
  }
  searchProduit(nom)
  {
    this.service.getProduitByNom(nom).subscribe(data =>{
      this.produits =data;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

}
