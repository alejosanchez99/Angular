import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  public estado: number = 0;
  public base: number = 2;

  public acumular(valor: number): number {
    return (this.estado += valor);
  }
}
