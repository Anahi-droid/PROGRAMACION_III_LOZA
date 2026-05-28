console.log("Ciclo for");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const idiomas = ["inglés", "francés", "italiano"];

for (let i = 0; i < idiomas.length; i++) {

    console.log(idiomas[i]);

    const idioma = idiomas[i];

    console.log(idioma);
}

for (const idioma of idiomas) {
    console.log(idioma);
}

const MAX_INTENTOS = 3;
const TIEMPO_ESPERA = 2;

let intentos = 0;
let accesoCorrecto = false;

do {

  intentos++;

  console.log(`Intento ${intentos}/${MAX_INTENTOS}: ingresando a la plataforma...`);

  if (intentos >= 3) {
    accesoCorrecto = true;
  }

  if (!accesoCorrecto && intentos < MAX_INTENTOS) {
    console.log(`⏳ Error de acceso. Reintentando en ${TIEMPO_ESPERA}s...`);
  }

} while (!accesoCorrecto && intentos < MAX_INTENTOS);

if (accesoCorrecto) {
  console.log("✅ Acceso exitoso al curso.");
} else {
  console.log("❌ No se pudo ingresar a la plataforma.");
}

const cursos = [
  { codigo: "I01", nombre: "Inglés", stock: 2 },
  { codigo: "F02", nombre: "Francés", stock: 15 },
  { codigo: "A03", nombre: "Alemán", stock: 0 },
  { codigo: "J04", nombre: "Japonés", stock: 7 },
  { codigo: "P05", nombre: "Portugués", stock: 1 },
];

const STOCK_CRITICO = 3;

console.log("=== Reporte de cursos ===");

for (let i = 0; i < cursos.length; i++) {

  const curso = cursos[i];

  let estado;

  if (curso.stock === 0) {
    estado = "🔴 Sin cupos";

  } else if (curso.stock <= STOCK_CRITICO) {
    estado = "🟡 Pocos cupos";

  } else {
    estado = "🟢 Disponible";
  }

  console.log(`${curso.codigo} - ${curso.nombre}: ${estado}`);
}

const progresoEstudiantes = [
  { estudiante: "Lucía", progreso: 3200, idioma: "Inglés" },
  { estudiante: "Carlos", progreso: 4750, idioma: "Francés" },
  { estudiante: "María", progreso: 2100, idioma: "Italiano" },
  { estudiante: "Sofía", progreso: 5300, idioma: "Alemán" },
  { estudiante: "Pedro", progreso: 1800, idioma: "Portugués" },
];

const META = 3000;

let totalGeneral = 0;
let estudiantesMeta = 0;

console.log("=== Progreso de estudiantes ===");

for (const estudiante of progresoEstudiantes) {

  totalGeneral += estudiante.progreso;

  const cumpleMeta = estudiante.progreso >= META;

  if (cumpleMeta) {
    estudiantesMeta++;
  }

  const indicador = cumpleMeta ? "✅" : "⚠️";

  console.log(
    `${indicador} ${estudiante.estudiante} - ${estudiante.idioma} - ${estudiante.progreso}`
  );
}

console.log(`Total general: ${totalGeneral}`);
console.log(`Estudiantes en meta: ${estudiantesMeta}`);

const texto = "Aprender idiomas es divertido";

const VOCALES = new Set(["a", "e", "i", "o", "u"]);

let conteoVocales = 0;
let conteoConsonantes = 0;
let conteoEspacios = 0;

for (const caracter of texto.toLowerCase()) {

  if (caracter === " ") {

    conteoEspacios++;

  } else if (VOCALES.has(caracter)) {

    conteoVocales++;

  } else if (caracter >= "a" && caracter <= "z") {

    conteoConsonantes++;
  }
}

console.log(`Texto: "${texto}"`);
console.log(`Vocales: ${conteoVocales}`);
console.log(`Consonantes: ${conteoConsonantes}`);
console.log(`Espacios: ${conteoEspacios}`);

const cursosTop = [
  "Inglés avanzado",
  "Francés básico",
  "Japonés inicial",
  "Italiano conversacional",
  "Portugués intensivo"
];

console.log("=== Cursos más populares ===");

for (const [posicion, curso] of cursosTop.entries()) {

  const medalla =
    posicion === 0 ? "🥇" :
    posicion === 1 ? "🥈" :
    posicion === 2 ? "🥉" :
    `${posicion + 1}.`;

  console.log(`${medalla} ${curso}`);
}

const configuracion = {
  idioma: "es",
  plataforma: "LinguaWorld",
  modoOscuro: false,
  leccionesDiarias: 3
};

console.log("=== Configuración ===");

for (const clave in configuracion) {

  const valor = configuracion[clave];

  const valorMostrado =
    typeof valor === "boolean"
      ? (valor ? "Activado" : "Desactivado")
      : valor;

  console.log(`${clave}: ${valorMostrado}`);
}

const lecciones = [
  { nombre: "Gramática", nivel: 10 },
  { nombre: "Pronunciación", nivel: 4 },
  { nombre: "Conversación", nivel: 1 },
  { nombre: "Escucha", nivel: 0 },
];

const NIVEL_CRITICO = 2;

for (const leccion of lecciones) {

  if (leccion.nivel <= NIVEL_CRITICO) {
    console.log(`⚠️ Lección crítica: ${leccion.nombre}`);
    break;
  }
}

const actividades = [
  { id: "A01", estado: "completada" },
  { id: "A02", estado: "pendiente" },
  { id: "A03", estado: "completada" },
  { id: "A04", estado: "cancelada" },
];

let totalCompletadas = 0;

console.log("=== Actividades completadas ===");

for (const actividad of actividades) {

  if (actividad.estado !== "completada") {

    console.log(`↩️ ${actividad.id} omitida (${actividad.estado})`);

    continue;
  }

  totalCompletadas++;

  console.log(`✅ ${actividad.id} completada`);
}

console.log(`Total completadas: ${totalCompletadas}`);