const prompt = require("prompt-sync")();


const progreso = 78;

if (progreso >= 90) {
  console.log("🏆 Nivel avanzado.");
} else if (progreso >= 70) {
  console.log("📘 Nivel intermedio.");
} else if (progreso >= 40) {
  console.log("📝 Nivel básico.");
} else {
  console.log("🚀 Nivel inicial.");
}



const horasCurso = 4.5;

if (horasCurso <= 2) {
  console.log("Curso corto");
} else if (horasCurso <= 5) {
  console.log("Curso mediano");
} else if (horasCurso <= 10) {
  console.log("Curso intensivo");
} else {
  console.log("Curso especializado");
}


// Nota del estudiante
const nota = 78;

let calificacion;
let aprobado;

if (nota >= 90) {
  calificacion = "A — Excelente";
  aprobado = true;
} else if (nota >= 80) {
  calificacion = "B — Muy bueno";
  aprobado = true;
} else if (nota >= 70) {
  calificacion = "C — Bueno";
  aprobado = true;
} else if (nota >= 60) {
  calificacion = "D — Regular";
  aprobado = true;
} else {
  calificacion = "F — Reprobado";
  aprobado = false;
}

console.log(`Calificación: ${calificacion}`);
console.log(`Estado: ${aprobado ? "Aprobado ✅" : "Reprobado ❌"}`);


const horas = parseInt(prompt("Ingrese horas de estudio: "), 10);

if (horas <= 2) {
  console.log("Pocas horas de estudio");
} else if (horas <= 5) {
  console.log("Horas de estudio moderadas");
} else {
  console.log("Excelente dedicación");
}



const puntajeTexto = prompt("Ingrese el puntaje del curso: ");
const puntaje = parseFloat(puntajeTexto);

if (puntaje < 50) {
  console.log("Nivel básico");
} else if (puntaje <= 80) {
  console.log("Nivel intermedio");
} else {
  console.log("Nivel avanzado");
}



const diaTexto = prompt("Ingrese un número del 1 al 7: ");
const dia = parseInt(diaTexto, 10);

if (dia >= 1 && dia <= 5) {
  console.log("Día de clases");
} else if (dia === 6) {
  console.log("Sábado de práctica");
} else if (dia === 7) {
  console.log("Domingo libre");
} else {
  console.log("Día inválido");
}