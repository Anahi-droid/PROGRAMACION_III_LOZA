// Crear un objeto — llaves {}
const persona = {
  nombre: "Ana",        // clave: "nombre", valor: "Ana"
  edad: 28,             // clave: "edad",   valor: 28
  activo: true          // clave: "activo", valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(persona.nombre);   // "Ana"
console.log(persona.edad);     // 28

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios
console.log(persona["nombre"]);         // "Ana"
const clave = "edad";
console.log(persona[clave]);            // 28

// Propiedad que no existe → undefined (no lanza error)
console.log(persona.telefono);          // undefined

// Añadir propiedades después de crear el objeto
persona.ciudad = "Madrid";
console.log(persona.ciudad);            // "Madrid"

// Eliminar propiedades
delete persona.activo;
console.log(persona.activo);            // undefined

const calculadora = {
  // Forma clásica
  sumar: function(a, b) {
    return a + b;
  },

  // Shorthand de método (ES6) — forma preferida
  restar(a, b) {
    return a - b;
  },

  // Arrow function — ojo con this (lo veremos más adelante)
  multiplicar: (a, b) => a * b
};

console.log(calculadora.sumar(3, 4));        // 7
console.log(calculadora.restar(10, 3));      // 7
console.log(calculadora.multiplicar(2, 5));  // 10

const persona = {
  nombre: "Ana",
  edad: 28,

  // ✅ function o shorthand — this apunta al objeto
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  },

  cumpleaños() {
    this.edad++;   // modifica la propiedad del objeto
    return `¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`;
  },

  // ❌ Arrow function — this NO apunta al objeto, apunta al scope externo
  saludarArrow: () => {
    return `Hola, soy ${this.nombre}`;   // this.nombre es undefined
  }
};

console.log(persona.saludar());      // "Hola, soy Ana y tengo 28 años."
console.log(persona.cumpleaños());   // "¡Feliz cumpleaños, Ana! Ahora tienes 29."
console.log(persona.saludarArrow()); // "Hola, soy undefined"

const nombre = "Ana";
const edad   = 28;
const ciudad = "Madrid";

// Sin shorthand — repetitivo
const persona1 = {
  nombre: nombre,
  edad: edad,
  ciudad: ciudad
};

// Con shorthand (ES6) — forma preferida
const persona2 = { nombre, edad, ciudad };

console.log(persona2);
// { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }

const campo = "nombre";
const valor = "Ana";

// La clave se evalúa en tiempo de ejecución
const objeto = {
  [campo]: valor,           // equivale a nombre: "Ana"
  [`${campo}Upper`]: valor.toUpperCase()   // nombreUpper: "ANA"
};

console.log(objeto.nombre);       // "Ana"
console.log(objeto.nombreUpper);  // "ANA"

// Útil para construir objetos dinámicamente
function crearConfig(clave, valor) {
  return { [clave]: valor };
}

console.log(crearConfig("tema", "oscuro"));    // { tema: 'oscuro' }
console.log(crearConfig("idioma", "es"));      // { idioma: 'es' }

const base = { nombre: "Ana", edad: 28 };

// Copiar un objeto (copia superficial)
const copia = { ...base };
copia.edad = 99;
console.log(base.edad);    // 28 — original intacto
console.log(copia.edad);   // 99

// Combinar objetos — las propiedades de la derecha sobreescriben a las de la izquierda
const extra   = { ciudad: "Madrid", activo: true };
const completo = { ...base, ...extra };
console.log(completo);
// { nombre: 'Ana', edad: 28, ciudad: 'Madrid', activo: true }

// Sobreescribir propiedades específicas — patrón muy común
const actualizado = { ...base, edad: 29, ciudad: "Barcelona" };
console.log(actualizado);
// { nombre: 'Ana', edad: 29, ciudad: 'Barcelona' }

// ⚠️ El spread es una copia SUPERFICIAL — los objetos anidados se comparten
const original = { nombre: "Ana", direccion: { calle: "Mayor", numero: 1 } };
const superficial = { ...original };
superficial.direccion.numero = 99;   // modifica también el original
console.log(original.direccion.numero);   // 99 ← efecto no deseado

// Copia profunda — usar structuredClone (moderno) o JSON.parse/stringify
const profunda = structuredClone(original);
profunda.direccion.numero = 42;
console.log(original.direccion.numero);   // 99 — ahora sí intacto