import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) { }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

 //@Output() personajeAgregado: EventEmitter<Personaje> = new EventEmitter();

  public agregar(): void {
    if (this.nuevo.nombre.length > 0) {

      //this.personajeAgregado.emit(this.nuevo);
      this.dbzService.agregarNuevoPersonaje(this.nuevo);

      this.nuevo = {
        nombre: '',
        poder: 0
      };
    }
  }

}
