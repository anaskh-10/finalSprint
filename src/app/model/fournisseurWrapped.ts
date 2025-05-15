import { Fournisseur } from "./fournisseur.model";
export class FournisseurWrapper{
    _embedded!: {fournisseurs:Fournisseur[]};
}