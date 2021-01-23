export interface Producto {
  descripcion: string;
  precio: number;
}

const telefono: Producto = {
  descripcion: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  descripcion: "Ipad Air",
  precio: 350,
};

export function calcularISV(productos: Producto[]): [number,number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  }); 

  return [total,total * 0.15];
}

const articulos: Producto[] = [telefono, tableta];

const [total, isv] = calcularISV(articulos);

console.log('ISV:', total);
console.log('ISV:', isv);