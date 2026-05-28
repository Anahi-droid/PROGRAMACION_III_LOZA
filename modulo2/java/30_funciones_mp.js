function progresoCurso(lecciones, completadas) {
  return completadas * 100 / lecciones;
}

const resultado = progresoCurso(40, 30);

console.log("El progreso del curso es: " + resultado + "%");

function registrar(categoria, ...mensajes) {

  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar(
  "CURSO",
  "Lección completada",
  "Pronunciación aprobada",
  "Nuevo nivel desbloqueado"
);

function estudiantes(tipo, ...datos) {

  for (const dato of datos) {
    console.log(`[${tipo}] ${dato}`);
  }
}

estudiantes(
  "ESTUDIANTE",
  "Lucía Gómez",
  "Quito",
  "lucia@idiomas.com"
);

const niveles = [3, 1, 4, 1, 5, 9, 2, 6];

console.log(Math.max(niveles));

console.log(Math.max(...niveles));
console.log(Math.min(...niveles));

const ingles = ["saludo", "verbos", "pronombres"];
const frances = ["números", "colores", "frases"];

const cursos = [...ingles, ...frances];

console.log(cursos);

const original = ["inglés", "francés", "alemán"];

const copia = [...original];

copia.push("italiano");

console.log(original);
console.log(copia);

const estudiante = {
  nombre: "Lucía",
  nivel: "Intermedio"
};

const perfil = {
  ...estudiante,
  idioma: "Inglés"
};

console.log(perfil);

function sinReturn() {

  const idioma = "Japonés";
}

console.log(sinReturn());

function cursoAprobado(nota) {

  if (nota >= 7) {
    return true;
  }

  return false;
}

const cursoAprobadoCorto = nota => nota >= 7;

console.log(cursoAprobado(8));
console.log(cursoAprobadoCorto(5));