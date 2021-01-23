interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalle: Detalle;
}

interface Detalle {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 35,
  cancion: 'Mess',
  detalle: {
    autor: 'Ed Sheeran',
    anio: 2015
  }
};

const { volumen, segundo, cancion, detalle: { autor } } = reproductor;
//const { autor } = detalle; Se puede hacer de esta forma.
/*
console.log('El volumen actual es de:', volumen);
console.log('El Segundo actual es de:', segundo);
console.log('la cancion actual es de:', cancion);
console.log('El autor actual es de:', autor);
*/

const dragonBallZ: string[] = ['Gokú', 'Vegeta', 'Trunks'];
const [posicion1, posicion2, posicion3] = dragonBallZ;
const [, , soloPosicion3] = dragonBallZ;

console.log('Personaje 1', posicion1)
console.log('Personaje 2', posicion2)
console.log('Personaje 3', soloPosicion3)