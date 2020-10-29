import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  getProduits() {
    return this.http.get("http://localhost:8010/listAll");
  }
  getProduitById(id){
    return this.http.get("http://localhost:8010/findbyid/"+id)
  }
  getProduitByNom(nom){
    return this.http.get("http://localhost:8010/findbyname/"+nom)
  }
  addProduit(produit){
    return this.http.post("http://localhost:8010/addproduit/",produit)
  }
  editProduit(produit){
    return this.http.put("http://localhost:8010/editproduit/"+produit.id,produit)
    }
  deleteProduit(id){
  return this.http.delete("http://localhost:8010/deleteproduit/"+id)
  }
 
}
