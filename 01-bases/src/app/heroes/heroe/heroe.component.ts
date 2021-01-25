import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl : './heroe.component.html'
})

export class HeroeComponent {
  public nombre: string = 'Iron Man';
  public edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  public ObtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  public cambiarEdad(): void {
    this.edad = 32;
  }
}

