/*
  Funciones 
*/

function sumar(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(numero: number, otroNumero?: number, base: number = 2)
{
  return numero * base;
}
 
interface PersonajeColombiano{
  nombre: string;
  edad: number;
  nacionalidad?: boolean;
  MostrarPersona: () => void
}

function crear(personaje: PersonajeColombiano, nacionalidad: boolean) {
  personaje.nacionalidad = nacionalidad;
}

const nuevoPersonaje: PersonajeColombiano = {
  nombre: 'Alejandro',
  edad: 100,
  MostrarPersona() {
    console.log('su nombre es' + this.nombre);
  }
};

crear(nuevoPersonaje, true);

console.log(nuevoPersonaje);

nuevoPersonaje.MostrarPersona();


