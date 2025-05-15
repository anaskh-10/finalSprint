import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../model/fournisseur.model';
import { PcService } from '../pc.service';
import { UpdateFournisseurComponent } from '../update-fournisseur/update-fournisseur.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-liste-fournisseurs',
  standalone: true,
  imports: [UpdateFournisseurComponent,CommonModule],
  templateUrl: './liste-fournisseurs.component.html',
  styles: ``
})
export class ListeFournisseursComponent implements OnInit {
  fournisseurs!:Fournisseur[];
  updatedFour:Fournisseur={"nom":"","prenom":""};
  ajout:boolean=true;

  constructor(private pcService:PcService){}
  
  ngOnInit(): void {
    this.pcService.listerFournisseur().subscribe(four=>{
      this.fournisseurs=four._embedded.fournisseurs;
      console.log(four);
    });
  }
  fournisseurUpdated(four:Fournisseur){
    console.log("four updated event",four);
    this.pcService.ajouterFournisseur(four).subscribe( ()=>this.chargerFourniseur());
  }
  chargerFourniseur(){
    this.pcService.listerFournisseur().subscribe(four=>{this.fournisseurs=four._embedded.fournisseurs;
      console.log(four);
    });
  }
  updateFour(four:Fournisseur){
    this.updatedFour=four;
    this.ajout=false;
  }


}
