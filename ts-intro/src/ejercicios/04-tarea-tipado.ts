interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}

interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: "Alejandro",
  edad: 50,
  direccion: {
    calle: "Belen",
    pais: "Colombia",
    ciudad: "Medellin",
  },
  mostrarDireccion(): string {
    return (
      this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
    );
  },
};

console.log(superHeroe.mostrarDireccion());
