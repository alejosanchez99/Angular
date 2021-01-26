import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.services';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginaPrincipalComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
