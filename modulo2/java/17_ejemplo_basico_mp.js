const prompt = require("prompt-sync")();

console.log("=== Plataforma de idiomas ===");

const vocabularioTexto = prompt("Palabras aprendidas en inglés: ");
const frasesTexto = prompt("Frases aprendidas en francés: ");

const vocabulario = parseFloat(vocabularioTexto) || 0;
const frases = parseFloat(frasesTexto) || 0;

const totalAprendido = vocabulario + frases;
const diferencia = vocabulario - frases;
const practica = vocabulario * frases;
const promedio = frases !== 0 ? vocabulario / frases : "indefinido";

console.log(`
Resultados del aprendizaje:
  Total aprendido: ${totalAprendido}
  Diferencia:      ${diferencia}
  Prácticas:       ${practica}
  Promedio:        ${promedio}
`);