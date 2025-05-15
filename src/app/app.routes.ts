import { Routes } from '@angular/router';
import { PcsComponent } from './pcs/pcs.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { UpdatePcComponent } from './update-pc/update-pc.component';
import { RechercheParFournisseurComponent } from './recherche-par-fournisseur/recherche-par-fournisseur.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { ListeFournisseursComponent } from './liste-fournisseurs/liste-fournisseurs.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { pcGuard } from './pc.guard';
export const routes: Routes = [
    {path:"pcs",component:PcsComponent},
    {path:"add-pc",component:AddPcComponent , canActivate:[pcGuard]},
    {path:"",redirectTo:"pcs",pathMatch:"full"},
    {path:"updatePc/:id",component:UpdatePcComponent},
    {path:"rechercheParFournisseur",component:RechercheParFournisseurComponent},
    {path:"rechercheParMarque",component:RechercheParMarqueComponent},
    {path:"listeFournisseurs",component:ListeFournisseursComponent},
    {path:"login",component:LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},


];
