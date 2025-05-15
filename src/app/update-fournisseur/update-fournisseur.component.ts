import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fournisseur } from '../model/fournisseur.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-fournisseur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-fournisseur.component.html',
  styles: ``
})
export class UpdateFournisseurComponent implements OnInit{

@Input()
fournisseur!:Fournisseur;

@Output()
fournisseurUpdated=new EventEmitter<Fournisseur>();

@Input()
ajout!:boolean;

ngOnInit(): void {
  console.log("ngOnInit du composant UpdateFournisseur ",this.fournisseur)
}
saveFournisseur(){
  this.fournisseurUpdated.emit(this.fournisseur);
}

}
