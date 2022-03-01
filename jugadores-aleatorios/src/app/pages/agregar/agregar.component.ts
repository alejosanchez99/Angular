import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  posiciones = [
    {
      id: 1,
      nombre: 'Arquero'
    },
    {
      id: 2,
      nombre: 'Defensa'
    },
    {
      id: 3,
      nombre: 'Volante'
    },
    {
      id: 4,
      nombre: 'Delantero'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
