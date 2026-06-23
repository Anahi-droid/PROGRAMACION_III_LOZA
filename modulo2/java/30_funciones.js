

function triangulo(base, altura){
  return base*altura/2;
}

resul = triangulo(9, 4)
console.log("El area de un triangulo es:" +resul)


function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo


function datos(dt, ...datitos){
  for(const ms of datitos){
    console.log(`[${dt}] ${ms}`);
  }
}

datos("DATOS","Alejandra Basantes","Quito","aleja89@gmail.com");

const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(numeros));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...numeros));    // 9
console.log(Math.min(...numeros));    // 1

// Combinar arrays
const primeros = [1, 2, 3];
const segundos = [4, 5, 6];
const todos    = [...primeros, ...segundos];
console.log(todos);   // [1, 2, 3, 4, 5, 6]

// Copiar un array (copia superficial)
const original = [1, 2, 3];
const copia    = [...original];
copia.push(4);
console.log(original);   // [1, 2, 3]  — no se modifica
console.log(copia);      // [1, 2, 3, 4]

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }


// Una función sin return devuelve undefined implícitamente
function sinReturn() {
  const x = 42;
  // no hay return
}
console.log(sinReturn());   // undefined

// return detiene la ejecución de la función
function esPar(n) {
  if (n % 2 === 0) {
    return true;    // sale aquí si n es par
  }
  return false;     // solo llega aquí si n es impar
}

// Forma más concisa — devolver la expresión directamente
const esParCorto = n => n % 2 === 0;

console.log(esPar(4));         // true
console.log(esParCorto(7));    // false