import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
})
export class PaginaPrincipalComponent {

  constructor(private dbzService: DbzService) {}

  public nuevo: Personaje = {
    nombre: 'Gohan',
    poder: 15000,
  };
}
