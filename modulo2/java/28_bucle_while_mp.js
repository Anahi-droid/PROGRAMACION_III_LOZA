let index = 0;

while (index <= 5) {
    console.log(index);
    index++;
}

index = 10;

while (index >= 0) {
    console.log(index);
    index--;
}

const cursosPendientes = [
  { id: "C001", nivel: "avanzado", curso: "Inglés profesional" },
  { id: "C002", nivel: "intermedio", curso: "Francés básico" },
  { id: "C003", nivel: "basico", curso: "Italiano inicial" },
  { id: "C004", nivel: "avanzado", curso: "Alemán conversacional" },
];

let indice = 0;

console.log("=== Procesando cursos ===");

while (indice < cursosPendientes.length) {

  const curso = cursosPendientes[indice];

  if (curso.nivel === "avanzado") {
    console.log(`🔴 [AVANZADO] ${curso.id}: ${curso.curso}`);

  } else if (curso.nivel === "intermedio") {
    console.log(`🟡 [INTERMEDIO] ${curso.id}: ${curso.curso}`);

  } else {
    console.log(`🟢 [BÁSICO] ${curso.id}: ${curso.curso}`);
  }

  indice++;
}

console.log(`Total procesados: ${cursosPendientes.length} cursos`);

const META_LECCIONES = 1000;

const leccionesDiarias = [120, 85, 200, 310, 95, 250];

let totalLecciones = 0;
let diasEstudio = 0;

while (totalLecciones < META_LECCIONES && diasEstudio < leccionesDiarias.length) {

  const lecciones = leccionesDiarias[diasEstudio];

  totalLecciones += lecciones;
  diasEstudio++;

  console.log(`Día ${diasEstudio}: +${lecciones} lecciones → Total: ${totalLecciones}`);

  if (totalLecciones >= META_LECCIONES) {
    console.log(`🎯 ¡Meta alcanzada en ${diasEstudio} día(s)!`);
  }
}

if (totalLecciones < META_LECCIONES) {

  const faltante = META_LECCIONES - totalLecciones;

  console.log(`Meta no alcanzada. Faltan ${faltante} lecciones`);
}

const niveles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

index = 0;

while (index < 10) {

    const nivel = niveles[index];

    console.log("Nivel", nivel, "Lecciones", 5 * nivel);

    index++;
}