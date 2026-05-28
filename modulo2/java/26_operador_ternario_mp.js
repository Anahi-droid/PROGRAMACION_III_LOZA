const leccionesDisponibles = 8;

const estadoCurso = leccionesDisponibles > 0 ? "Disponible" : "Completo";

console.log(`Estado del curso: ${estadoCurso}`);

const precioCurso = 25.50;
const cantidadCursos = 3;
const totalPago = precioCurso * cantidadCursos;

console.log(`Cursos: ${cantidadCursos} x $${precioCurso}`);
console.log(`Total: $${totalPago.toFixed(2)}`);
console.log(`Acceso premium: ${totalPago >= 50 ? "Sí ✅" : "No ❌"}`);

const progreso = -150;

const estadoProgreso = progreso >= 0 ? "Activo" : "Pendiente";
const colorEstado = progreso >= 0 ? "verde" : "rojo";

console.log(`[${colorEstado.toUpperCase()}] Progreso: ${estadoProgreso}`);

const edad = 20;

const categoriaEstudiante =
  edad >= 65 ? "Experto" :
  edad >= 18 ? "Adulto" :
  "Joven";

let categoriaClara;

if (edad >= 65) {
  categoriaClara = "Experto";
} else if (edad >= 18) {
  categoriaClara = "Adulto";
} else {
  categoriaClara = "Joven";
}