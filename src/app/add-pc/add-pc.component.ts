import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pc } from '../model/pc.model';
import { PcService } from '../pc.service';
import { Fournisseur } from '../model/fournisseur.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-pc.component.html',
  styleUrl: './add-pc.component.css'
})
export class AddPcComponent implements OnInit {
  fournisseurs!: Fournisseur[];
  newId!:number;
  newFournisseur!:Fournisseur;
  newPc=new Pc();
  constructor(private pcService:PcService,private router:Router){

  }
  ngOnInit(): void {
    this.pcService.listerFournisseur().
    subscribe(four=>{
      this.fournisseurs=four._embedded.fournisseurs;
      console.log(four);
    });
  }
  
  addPc() {
    this.newPc.fournisseur=this.fournisseurs?.find(four=>four.id==this.newId)!;
    this.pcService.ajouterPc(this.newPc).subscribe(ps=> {
      console.log(ps);
      this.router.navigate(['pcs']);
    });
  }
  
  
}
