import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './agregar/agregar.component';
import { ListadoComponent } from './listado/listado.component';
import { EquipoComponent } from './equipo/equipo.component';
import { SeleccionEquiposComponent } from './seleccion-equipos/seleccion-equipos.component';
import { BotonFlotanteComponent } from '../components/boton-flotante/boton-flotante.component';

@NgModule({
  declarations: [AgregarComponent, ListadoComponent, EquipoComponent, SeleccionEquiposComponent, BotonFlotanteComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class JugadoresModule { }
