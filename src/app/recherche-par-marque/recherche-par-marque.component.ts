import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';
import { Pc } from '../model/pc.model';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-recherche-par-marque',
  standalone: true,
  imports: [FormsModule,CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-marque.component.html',
  styles: ``
})
export class RechercheParMarqueComponent implements OnInit{
  marquePc!:string;
  pcs:Pc[]=[];
  allPcs: Pc[] = [];
  searchTerm!:string;

  constructor(private pcService:PcService){}
  
  ngOnInit(): void {
    this.pcService.listePcs().subscribe(ps=>{
      this.allPcs = ps;
      this.pcs = ps;
      console.log('All PCs:', this.allPcs);
    });
  }
  rechercherPcs() {
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      this.pcs = this.allPcs.filter(pc =>
        pc.marquePc?.toLowerCase().includes(term)
      );
    } else {
      this.pcs = this.allPcs; // Show all if input is empty
    }
    console.log('Filtered PCs:', this.pcs);
  }

}
