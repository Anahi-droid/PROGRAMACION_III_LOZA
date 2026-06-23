const prompt = require("prompt-sync")();

const costoCurso = 150;
const MINIMO_BECA = 100;
const PORCENTAJE_BECA = 0.10;

let totalCurso = costoCurso;

if (costoCurso >= MINIMO_BECA) {
  const descuento = costoCurso * PORCENTAJE_BECA;
  totalCurso = costoCurso - descuento;
  console.log(`Beca aplicada: $${descuento.toFixed(2)}`);
}

console.log(`Total del curso: $${totalCurso.toFixed(2)}`);

const leccionesPendientes = 3;
const LIMITE_LECCIONES = 5;

if (leccionesPendientes <= LIMITE_LECCIONES) {
  console.log(`⚠️ Te quedan ${leccionesPendientes} lecciones por completar.`);
}

const nivelEstudiante = 17;
const NIVEL_REQUERIDO = 18;

if (nivelEstudiante < NIVEL_REQUERIDO) {
  console.log("Acceso denegado al curso avanzado.");
}

console.log("Proceso finalizado.");

const horasEstudio = prompt("Horas de estudio semanales: ");
console.log(`Tus horas de estudio son ${horasEstudio}`);

if (horasEstudio > 10) {
    console.log("Excelente dedicación al aprendizaje");
}

const palabrasAprendidas = prompt("Cantidad de palabras aprendidas: ");
console.log(`Has aprendido ${palabrasAprendidas} palabras`);

if (palabrasAprendidas > 90) {
    console.log("Nivel de vocabulario destacado");
}

const totalPracticas = prompt("Ingrese el total de prácticas completadas: ");

if (totalPracticas < 70) {
  console.log("Necesitas más prácticas para aprobar");
} else {
  console.log("Prácticas completadas correctamente");
}