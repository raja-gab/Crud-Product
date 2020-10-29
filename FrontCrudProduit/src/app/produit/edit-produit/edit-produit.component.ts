import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/service/produit-service.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
id : number
produit : any 
  constructor(private service : ProduitService ,private activatedRoute : ActivatedRoute , private router : Router) { 
    this.id=activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.getProduitById();
  }
  getProduitById()
  {
    this.service.getProduitById(this.id).subscribe(data=>{
      this.produit=data;
      console.log(data) ;    
    },err=>{
      console.log(err);
    }
    )
  }
  updateProduit()
  {
    this.service.editProduit(this.produit)
        .subscribe(data=>{
          console.log(data);
          alert("Modifier avec succès")
          this.router.navigate([''])
        },err=>{
          console.log(err);
         alert("échec de la modification")
        });
  }
}
