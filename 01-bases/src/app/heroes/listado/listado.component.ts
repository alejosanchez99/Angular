import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public heroesBorrado: string[] = [];

  ngOnInit(): void {
  }

  public borrarHeroe(): void {
    const heroeBorrado = this.heroes.shift() || '';

    if (heroeBorrado || heroeBorrado.length > 0) {
      this.heroesBorrado.push(heroeBorrado);
    }
  }
}
