import { Injectable } from '@angular/core';
import { Pc } from './model/pc.model';
import { Fournisseur } from './model/fournisseur.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { FournisseurWrapper } from './model/fournisseurWrapped';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class PcService {
  pc!:Pc;
  pcs!: Pc[];
  fournisseurs!:Fournisseur[];
  constructor(private http:HttpClient,private authService:AuthService) { 
    /*this.fournisseurs=[
      {id:1,nom:"khiari",prenom:"anas"},
      {id:2,nom:"maaoui",prenom:"moetez"}
    ]
    this.pcs=[
      {idPc : 1,marquePc:"DELL",referencePc:"DELL-1435",prixPc:3000,dateCreation:new Date("01/06/2021"),fournisseur:{id:1,nom:"khiari",prenom:"anas"}},
      {idPc : 2,marquePc:"HP",referencePc:"HP-1435",prixPc:3500,dateCreation:new Date("02/10/2024"),fournisseur:{id:2,nom:"maaoui",prenom:"moetez"}}

    ];*/
  }
  listePcs():Observable<Pc[]>{
    return this.http.get<Pc[]>(environment.apiURL+"/all");
  }
  ajouterPc(p:Pc):Observable<Pc>{
    return this.http.post<Pc>(environment.apiURL+"/addpc", p);
  }
  supprimerPc(id:number){
    const url=`${environment.apiURL}/delpc/${id}`;
    return this.http.delete(url);
  }
  consulterPc(id:number):Observable<Pc>{
    const url = `${environment.apiURL}/getbyid/${id}`;
    return this.http.get<Pc>(url);
  }
  updatePc(p:Pc):Observable<Pc>{
    return this.http.put<Pc>(environment.apiURL+"/updatepc", p);
  }
  listerFournisseur():Observable<FournisseurWrapper>{
    return this.http.get<FournisseurWrapper>(environment.apiURLFour);
  }
  consulterFournisseur(id:number):Fournisseur{
    return this.fournisseurs.find(four=>four.id==id)!;
  } 
  rechercherParFournissuer(id:number):Observable<Pc[]>{
    const url=`${environment.apiURL}/pcFour/${id}`;
    return this.http.get<Pc[]>(url);
  }
  rechercherParMarque(marquePc:string):Observable<Pc[]>{
    const url= `${environment.apiURL}/pcsByMarque/${marquePc}`;
    return this.http.get<Pc[]>(url);
  }
  ajouterFournisseur(four:Fournisseur):Observable<Fournisseur>{
    return this.http.post<Fournisseur>(environment.apiURLFour, four);
  }

}
