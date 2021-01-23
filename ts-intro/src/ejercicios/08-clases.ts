class PersonaNormal {
  constructor(public nombre: string, public direccion: string) { }
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'direccion');
  }
}

const ironMan = new Heroe("IronMan", 30, "Alejandro");

console.log(ironMan);
