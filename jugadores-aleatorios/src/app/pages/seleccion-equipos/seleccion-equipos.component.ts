import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen'},
];

@Component({
  selector: 'app-seleccion-equipos',
  templateUrl: './seleccion-equipos.component.html',
  styleUrls: ['./seleccion-equipos.component.css']
})
export class SeleccionEquiposComponent {

  displayedColumns: string[] = ['name', ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private router: Router) { }

  Devolver() {
    this.router.navigate(['./equipo']);
  }

}
