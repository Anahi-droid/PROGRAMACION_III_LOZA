const prompt = require("prompt-sync")();

const horaClase = 14;

if (horaClase < 12) {
  console.log("Buenos días. Clase de idiomas matutina activa.");
} else {
  console.log("Buenas tardes. Clase de idiomas vespertina activa.");
}

const progresoCurso = 800;
const tareasPendientes = 200;
const PROGRESO_MINIMO = 600;
const LIMITE_TAREAS = 0.4;

const porcentajeTareas = tareasPendientes / progresoCurso;

if (progresoCurso >= PROGRESO_MINIMO && porcentajeTareas <= LIMITE_TAREAS) {
  console.log("Nivel avanzado desbloqueado.");
  console.log(`Porcentaje de tareas pendientes: ${(porcentajeTareas * 100).toFixed(1)}%`);
} else {
  console.log("Nivel avanzado bloqueado.");
  console.log(`Progreso mínimo requerido: ${PROGRESO_MINIMO}`);
  console.log(`Tareas pendientes: ${(porcentajeTareas * 100).toFixed(1)}%`);
}

const codigoIngresado = "Idioma123";
const codigoCorrecto = "Idioma123";
let intentosFallidos = 0;
const MAX_INTENTOS = 3;

if (codigoIngresado === codigoCorrecto) {
  console.log("Acceso correcto al curso.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;

  console.log(`Código incorrecto. Intentos restantes: ${intentosRestantes}`);
  console.log(`Intentos fallidos: ${intentosFallidos}`);
}

const nivelTexto = prompt("Escribe tu nivel de inglés: ");
const nivel = parseInt(nivelTexto, 10);

if (isNaN(nivel)) {
  console.log("Ese nivel no es válido.");
} else {
  console.log(`Tu nivel es ${nivel}.`);
}

const totalLecciones = prompt("Cantidad de lecciones completadas: ");
const lecciones = parseInt(totalLecciones, 10);

if (lecciones >= 10) {
  console.log("Certificado desbloqueado");
} else {
  console.log("Continúa aprendiendo");
}

const claveCurso = prompt("Ingrese la clave del curso ");

if (claveCurso == 1234) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

const horaEstudio = prompt("Ingrese la hora de estudio ");

if (horaEstudio < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes/noches");
}