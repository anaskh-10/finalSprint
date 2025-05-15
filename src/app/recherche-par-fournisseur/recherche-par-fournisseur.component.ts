import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Fournisseur } from '../model/fournisseur.model';
import { PcService } from '../pc.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche-par-fournisseur',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-fournisseur.component.html',
  styles: ``
})
export class RechercheParFournisseurComponent implements OnInit{
  pcs:Pc[]=[];
  IdFourn!:number;
  fournisseurs!:Fournisseur[];
  constructor(private pcService:PcService){}
  ngOnInit(): void {
    this.pcService.listerFournisseur().subscribe(four=>{this.fournisseurs=four._embedded.fournisseurs;
      console.log(four);
    });
  }
  onChange(){
    this.pcService.rechercherParFournissuer(this.IdFourn).subscribe(ps=>{this.pcs=ps})
  }

}
