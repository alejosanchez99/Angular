import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AgregarComponent } from "../pages/agregar/agregar.component";
import { ListadoComponent } from '../pages/listado/listado.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //{ path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'listado', component: ListadoComponent },
      //{ path: ':id', component: HeroeComponent },
      { path: '**', redirectTo: 'agregar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
