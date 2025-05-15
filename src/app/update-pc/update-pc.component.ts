import { Component, OnInit } from '@angular/core';
import { Pc } from '../model/pc.model';
import { PcService } from '../pc.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Fournisseur } from '../model/fournisseur.model';
@Component({
  selector: 'app-update-pc',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-pc.component.html',
  styles: ``
})
export class UpdatePcComponent implements OnInit {
  currentPc= new Pc();
  fournisseurs!:Fournisseur[];
  updatedId?:number;
  constructor(private pcService:PcService,private activatedRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
   this.pcService.listerFournisseur().subscribe((four)=>{
    this.fournisseurs=four._embedded.fournisseurs;
    console.log(four);
   });
   this.pcService.consulterPc(this.activatedRoute.snapshot.params['id']).subscribe((ps)=>{
    this.currentPc=ps;
    this.updatedId=this.currentPc.fournisseur.id;
   })
  }
  updatePc(){
    this.currentPc.fournisseur=this.fournisseurs.find(
      (four)=>four.id ==this.updatedId
    )!;
    this.pcService.updatePc(this.currentPc).subscribe((four)=>{
      this.router.navigate(['pcs']);
    })
  }
}
