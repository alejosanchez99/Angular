import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AgregarComponent } from "../pages/agregar/agregar.component";
import { ListadoComponent } from '../pages/listado/listado.component';
import { EquipoComponent } from '../pages/equipo/equipo.component';
import { SeleccionEquiposComponent } from '../pages/seleccion-equipos/seleccion-equipos.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'equipo', component: EquipoComponent },
      { path: 'seleccion-equipos', component: SeleccionEquiposComponent },
      { path: '**', redirectTo: 'agregar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
