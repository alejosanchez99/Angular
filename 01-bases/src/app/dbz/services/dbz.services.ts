import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

  constructor() {
    console.log('Servicio inicializado');
  }

  private  personajes: Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 12300,
    },
    {
      nombre: 'Krillin',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    }
  ];

  get getPersonajes(): Personaje[] {
    return [...this.personajes];
  }

  public agregarNuevoPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }
 }
