import { Producto, calcularISV } from './06-desesctructuracion-funcion';


const carritoCompras: Producto[] = [
  {
    descripcion: 'telefono',
    precio: 100
  },
  {
    descripcion: 'telefono 2',
    precio: 150
  },
]

const [total, isv] = calcularISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);;