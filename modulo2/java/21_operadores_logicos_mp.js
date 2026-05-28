false
0
""
null
undefined
NaN

"ingles"
"0"
{}
-1

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("ingles"));
console.log(Boolean([]));

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("ingles" && "frances");
console.log(0 && "italiano");
console.log("" && "japones");
console.log("alemán" && "portugues");

const estudiante = { nombre: "Lucía", premium: true };

estudiante.premium && console.log("Acceso al curso premium");

const progreso = estudiante.nivel && estudiante.nivel.avanzado;

console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("ingles" || "frances");
console.log(0 || "italiano");
console.log(0 || "");
console.log("" || "Curso básico");

const idioma = prompt("Idioma que deseas aprender:") || "Inglés";

function bienvenida(idioma) {
  const curso = idioma || "Inglés";
  console.log(`Bienvenido al curso de ${curso}`);
}

bienvenida("Francés");
bienvenida("");
bienvenida(null);

console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!"");
console.log(!"ingles");
console.log(!null);
console.log(!undefined);

console.log(!!0);
console.log(!!1);
console.log(!!"");
console.log(!!"ingles");
console.log(!!null);
console.log(!![]);