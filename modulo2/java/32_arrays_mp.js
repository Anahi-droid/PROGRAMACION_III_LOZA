const idiomas = ["inglés", "francés", "italiano"];

const niveles = [1, 2, 3, 4, 5];

const mixto = [1, "alemán", true, null];

const vacio = [];

console.log(idiomas[0]);
console.log(idiomas[2]);
console.log(idiomas[9]);

console.log(idiomas[-1]);

console.log(idiomas.at(-1));
console.log(idiomas.at(-2));

console.log(idiomas.length);

idiomas[1] = "portugués";

console.log(idiomas);

const lecciones = [1, 2, 3];

lecciones.push(4);
lecciones.push(5, 6);

console.log(lecciones);

const ultima = lecciones.pop();

console.log(ultima);
console.log(lecciones);

lecciones.unshift(0);

console.log(lecciones);

const primera = lecciones.shift();

console.log(primera);
console.log(lecciones);

const modulos = ["gramática", "verbos", "conversación"];

modulos.splice(2, 0, "pronunciación");

console.log(modulos);

const eliminados = modulos.splice(1, 2);

console.log(eliminados);
console.log(modulos);

const nivelesCurso = [10, 20, 30, 20, 40];

console.log(nivelesCurso.indexOf(20));
console.log(nivelesCurso.indexOf(99));

console.log(nivelesCurso.lastIndexOf(20));

console.log(nivelesCurso.includes(30));
console.log(nivelesCurso.includes(99));

const cursos = ["Inglés", "Francés", "Japonés"];

cursos.forEach((curso, indice) => {
  console.log(`${indice}: ${curso}`);
});

for (const curso of cursos) {
  console.log(curso);
}

const puntos = [1, 2, 3, 4, 5];

const dobles = puntos.map(n => n * 2);

console.log(dobles);
console.log(puntos);

const estudiantes = [
  { nombre: "Lucía", nivel: 28 },
  { nombre: "Carlos", nivel: 31 },
  { nombre: "María", nivel: 25 }
];

const nombres = estudiantes.map(e => e.nombre);

console.log(nombres);

const resumen = estudiantes.map(e => ({
  nombre: e.nombre,
  aprobado: e.nivel >= 18
}));

console.log(resumen);

const practicas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = practicas.filter(n => n % 2 === 0);

console.log(pares);

const mayores = practicas.filter(n => n > 5);

console.log(mayores);

const usuarios = [
  { nombre: "Ana", edad: 28, activo: true },
  { nombre: "Luis", edad: 16, activo: true },
  { nombre: "Marta", edad: 31, activo: false },
  { nombre: "Pedro", edad: 22, activo: true }
];

const activos = usuarios.filter(u => u.edad >= 18 && u.activo);

console.log(activos.map(u => u.nombre));

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acum, n) => acum + n, 0);

console.log(suma);

const producto = numeros.reduce((acum, n) => acum * n, 1);

console.log(producto);

const maximo = numeros.reduce(
  (max, n) => n > max ? n : max,
  -Infinity
);

console.log(maximo);

const idiomasRepetidos = [
  "inglés",
  "francés",
  "inglés",
  "alemán",
  "francés",
  "inglés"
];

const conteo = idiomasRepetidos.reduce((acum, idioma) => {

  acum[idioma] = (acum[idioma] ?? 0) + 1;

  return acum;

}, {});

console.log(conteo);

const anidado = [[1, 2], [3, 4], [5, 6]];

const plano = anidado.reduce(
  (acum, arr) => [...acum, ...arr],
  []
);

console.log(plano);

const progreso = [0, 15, -5, 22, 37, 100, -10, 28];

const porcentaje = progreso.map(
  p => p * 2
);

console.log(porcentaje);

const avance = progreso.filter(
  p => p >= 0 && p <= 30
);

console.log(avance);

const avanceFinal = progreso
  .filter(p => p >= 0 && p <= 30)
  .map(p => p * 2);

console.log(avanceFinal);