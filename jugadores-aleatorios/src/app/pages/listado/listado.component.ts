import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Jugador {
  id: number;
  nombre: string;
  posicion: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent  {
  displayedColumns: string[] = ['id', 'nombre', 'posicion'];
  dataSource = new MatTableDataSource<Jugador>(ELEMENT_DATA);

  @ViewChild('paginator') set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }
}

const ELEMENT_DATA: Jugador[] = [
  { id: 1, nombre: 'Alejandro', posicion: 'Arquero' },
  { id: 2, nombre: 'Juan', posicion: 'Defensa' },
  { id: 3, nombre: 'Daniel', posicion: 'Defensa' },
  { id: 4, nombre: 'Pedro', posicion: 'Defensa' },
  { id: 5, nombre: 'Pablo', posicion: 'Defensa' },
  { id: 6, nombre: 'Pity', posicion: 'Volante' },
  { id: 7, nombre: 'Sergio', posicion: 'Volante' },
  { id: 8, nombre: 'Carlos', posicion: 'Volante' },
  { id: 9, nombre: 'Tuti', posicion: 'Delantero' },
  { id: 10, nombre: 'Ochoa', posicion: 'Delantero' },
  { id: 11, nombre: 'Juanjose', posicion: 'Delantero' },
];
