const prompt = require("prompt-sync")();

const estudiante = prompt("Escribe tu nombre: ");
console.log(`Bienvenido, ${estudiante}`);

const nivelTexto = prompt("Escribe tu nivel de inglés: ");
const nivel = parseInt(nivelTexto, 10);

if (isNaN(nivel)) {
  console.log("Ese nivel no es válido.");
} else {
  console.log(`Tu nivel registrado es ${nivel}.`);
}