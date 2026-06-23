const prompt = require("prompt-sync")();

const estudianteActivo = true;
const nivelUsuario = "intermedio";
const modulo = "gramatica";

if (estudianteActivo) {
  console.log(`Bienvenido. Nivel: ${nivelUsuario}`);

  if (nivelUsuario === "avanzado") {
    console.log("Acceso completo a todos los cursos.");

    if (modulo === "gramatica") {
      console.log("Cargando módulo avanzado de gramática...");
    }

  } else if (nivelUsuario === "intermedio") {
    console.log("Acceso intermedio concedido.");

    if (modulo === "gramatica") {
      console.log("📘 Accediendo a ejercicios de gramática.");
    } else {
      console.log(`Cargando módulo: ${modulo}`);
    }

  } else {
    console.log("Nivel desconocido.");
  }

} else {
  console.log("Debes iniciar sesión para continuar.");
}

const estudiante = "Lucía";
const correo = "lucia@idiomas.com";
const clave = "abc";
const MIN_CLAVE = 8;

if (estudiante.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${estudiante}`);

  if (!correo.includes("@") || !correo.includes(".")) {
    console.log("❌ El correo no es válido.");
  } else {
    console.log(`✅ Correo válido: ${correo}`);

    if (clave.length < MIN_CLAVE) {
      console.log(`❌ La contraseña debe tener al menos ${MIN_CLAVE} caracteres.`);
      console.log(`Caracteres actuales: ${clave.length}`);
    } else {
      console.log("✅ Registro completado.");
    }
  }
}

const categoriaCurso = "ingles";
const esPremium = true;
const precioCurso = 200;

let precioFinal = precioCurso;
let detalle = "";

if (categoriaCurso === "ingles") {

  const descuento = precioCurso * 0.15;
  precioFinal = precioCurso - descuento;
  detalle = "15% descuento curso inglés";

  if (esPremium) {
    const bono = precioFinal * 0.05;
    precioFinal -= bono;
    detalle += " + 5% descuento premium";
  }

} else if (categoriaCurso === "frances") {

  if (esPremium) {
    precioFinal = precioCurso * 0.80;
    detalle = "20% descuento premium";
  } else {
    precioFinal = precioCurso * 0.90;
    detalle = "10% descuento normal";
  }

} else if (categoriaCurso === "italiano") {

  precioFinal = precioCurso;
  detalle = "Curso sin descuento";
}

console.log(`Curso: ${categoriaCurso}`);
console.log(`Precio base: $${precioCurso.toFixed(2)}`);
console.log(`Detalle: ${detalle}`);
console.log(`Precio final: $${precioFinal.toFixed(2)}`);

const lecciones_t = prompt("Ingrese el total de lecciones ");
const lecciones = parseInt(lecciones_t, 10);

const premium = prompt("¿Es estudiante premium? (S/N) ");

if (lecciones > 50) {
    console.log("Certificado desbloqueado");

    if (premium == "S") {
      console.log("Acceso a contenido exclusivo.");
    } else {
        console.log("Acceso estándar");
    }

} else {
      console.log("Continúa aprendiendo");
}

const edad = prompt("Edad: ");
const estudiaIdiomas = prompt("¿Estás aprendiendo idiomas? (s/n): ");

if (edad <= 18) {

  if (estudiaIdiomas === "s") {
    console.log("Estudiante activo");
  } else {
    console.log("Deberías practicar un idioma");
  }

} else {
  console.log("Estudiante adulto");
}