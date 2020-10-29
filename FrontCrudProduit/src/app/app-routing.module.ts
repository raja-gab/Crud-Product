import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { EditProduitComponent } from './produit/edit-produit/edit-produit.component';
import { ProduitComponent } from './produit/produit.component';


const routes: Routes = [
  {path:'',component:ProduitComponent},
  {path:'addProduit',component:AddProduitComponent},
  {path:'editProduit/:id',component:EditProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
