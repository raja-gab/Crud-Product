import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { EditProduitComponent } from './produit/edit-produit/edit-produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    EditProduitComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
