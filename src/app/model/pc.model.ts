import { Fournisseur } from "./fournisseur.model";

export class Pc{
    idPc!:number;
    marquePc?:string;
    referencePc?:string;
    prixPc?:number;
    dateCreation?:Date;
    fournisseur!:Fournisseur
}




/*private Long idPc;
    private String marquePc;
    private String referencePc;
    private Double prixPc;
    private Date dateCreation;
*/