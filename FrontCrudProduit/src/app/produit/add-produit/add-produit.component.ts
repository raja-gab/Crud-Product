import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/service/produit-service.service';
import { Produit } from 'src/app/model/Produit';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  produit: any= new Produit();
  constructor(private service : ProduitService , private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.service.addProduit(this.produit).subscribe(data => {
      this.router.navigate([''])
    },err=>{
      console.log(err);
      alert("erreur");
    }
    )
  }

}
