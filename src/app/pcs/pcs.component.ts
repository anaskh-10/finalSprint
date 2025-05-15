import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pc } from '../model/pc.model';
import { PcService } from '../pc.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-pcs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './pcs.component.html',
  styleUrl: './pcs.component.css'
})
export class PcsComponent implements OnInit{
  pcs:Pc[]=[];
  constructor(private pcService:PcService, private cd: ChangeDetectorRef,public authService: AuthService){
    //this.pcs=pcService.listePcs();
  }
  ngOnInit(): void {
    this.chargerPcs();
  }
  chargerPcs(){
    this.pcService.listePcs().subscribe(ps=>{
      console.log(ps);
      this.pcs=ps;
      this.cd.detectChanges();
    }, error => {
      console.error("Erreur de chargement des PCs:", error);
  });
}
  supprimerPc(p:Pc){
    let conf=confirm("Etes-vous sur ?");
    if(conf)
      this.pcService.supprimerPc(p.idPc).subscribe(()=>{
        console.log("pc supprimer");
        this.chargerPcs();
      });
  }
  

}
