/*
    Arreglos
*/

let habilidades = ["Bash", "Counter", "Healing"];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

habilidades.push("Pity");

const personaje: Personaje = {
  nombre: "Alejo",
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
};

personaje.puebloNatal = 'Belen';

console.table(personaje);
