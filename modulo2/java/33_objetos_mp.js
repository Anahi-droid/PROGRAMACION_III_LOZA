const estudiante = {
  nombre: "Lucía",
  idioma: "Inglés",
  activo: true
};

console.log(estudiante.nombre);
console.log(estudiante.idioma);

console.log(estudiante["nombre"]);

const clave = "idioma";

console.log(estudiante[clave]);

console.log(estudiante.nivel);

estudiante.ciudad = "Quito";

console.log(estudiante.ciudad);

delete estudiante.activo;

console.log(estudiante.activo);

const plataforma = {

  agregarLeccion: function(a, b) {
    return a + b;
  },

  completarLeccion(a, b) {
    return a - b;
  },

  puntosExtra: (a, b) => a * b
};

console.log(plataforma.agregarLeccion(3, 4));

console.log(plataforma.completarLeccion(10, 3));

console.log(plataforma.puntosExtra(2, 5));

const usuario = {

  nombre: "Carlos",

  nivel: 2,

  presentarse() {
    return `Hola, soy ${this.nombre} y estoy en el nivel ${this.nivel}.`;
  },

  subirNivel() {

    this.nivel++;

    return `¡Felicidades ${this.nombre}! Ahora estás en el nivel ${this.nivel}.`;
  },

  saludoArrow: () => {
    return `Hola, soy ${this.nombre}`;
  }
};

console.log(usuario.presentarse());

console.log(usuario.subirNivel());

console.log(usuario.saludoArrow());

const nombre = "María";

const idioma = "Francés";

const ciudad = "Cuenca";

const estudiante1 = {
  nombre: nombre,
  idioma: idioma,
  ciudad: ciudad
};

const estudiante2 = {
  nombre,
  idioma,
  ciudad
};

console.log(estudiante2);

const campo = "curso";

const valor = "Inglés Básico";

const objeto = {

  [campo]: valor,

  [`${campo}Upper`]: valor.toUpperCase()
};

console.log(objeto.curso);

console.log(objeto.cursoUpper);

function crearConfiguracion(clave, valor) {

  return {
    [clave]: valor
  };
}

console.log(crearConfiguracion("tema", "oscuro"));

console.log(crearConfiguracion("idioma", "español"));

const base = {
  nombre: "Lucía",
  nivel: 3
};

const copia = {
  ...base
};

copia.nivel = 5;

console.log(base.nivel);

console.log(copia.nivel);

const extra = {
  idioma: "Italiano",
  activo: true
};

const completo = {
  ...base,
  ...extra
};

console.log(completo);

const actualizado = {
  ...base,
  nivel: 4,
  ciudad: "Loja"
};

console.log(actualizado);

const original = {
  nombre: "Carlos",
  progreso: {
    leccion: 5,
    porcentaje: 70
  }
};

const superficial = {
  ...original
};

superficial.progreso.porcentaje = 90;

console.log(original.progreso.porcentaje);

const profunda = structuredClone(original);

profunda.progreso.porcentaje = 100;

console.log(original.progreso.porcentaje);