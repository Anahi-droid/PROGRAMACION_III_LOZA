const prompt = require("prompt-sync")();

const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {

  if (b === 0) return "Error: no se puede dividir para cero";

  return a / b;
};

function calcular(a, b, operacion) {

  const operaciones = {
    "+": sumar,
    "-": restar,
    "*": multiplicar,
    "/": dividir
  };

  const fn = operaciones[operacion];

  if (!fn) {
    return `Operación "${operacion}" no reconocida`;
  }

  return fn(a, b);
}

function leerNumero(mensaje) {

  while (true) {

    const entrada = prompt(mensaje);

    const numero = parseFloat(entrada);

    if (!isNaN(numero)) {
      return numero;
    }

    console.log("Entrada no válida, intenta nuevamente.");
  }
}

console.log("=== Plataforma de idiomas ===");

const palabras = leerNumero("Palabras aprendidas: ");

const lecciones = leerNumero("Lecciones completadas: ");

const operacion = prompt("Operación (+, -, *, /): ");

const resultado = calcular(palabras, lecciones, operacion);

console.log(`${palabras} ${operacion} ${lecciones} = ${resultado}`);