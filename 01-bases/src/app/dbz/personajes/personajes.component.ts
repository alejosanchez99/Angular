import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //@Input() personajes: Personaje[] = [];

  constructor(private dbzService: DbzService) { }

  get personajes() {
    return this.dbzService.getPersonajes;
  }

  
}
