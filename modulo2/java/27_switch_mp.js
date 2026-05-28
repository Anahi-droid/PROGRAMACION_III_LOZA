const estadoCurso = "en_progreso";

switch (estadoCurso) {
  case "pendiente":
    console.log("📋 Curso registrado. Esperando inicio.");
    break;

  case "activo":
    console.log("✅ Curso activo. Puedes comenzar las lecciones.");
    break;

  case "en_progreso":
    console.log("📚 Continúa practicando tu idioma.");
    break;

  case "finalizado":
    console.log("🏆 Curso completado. Certificado disponible.");
    break;

  case "cancelado":
    console.log("❌ Curso cancelado.");
    break;

  default:
    console.log(`Estado desconocido: "${estadoCurso}"`);
}

const diaEstudio = 3;

switch (diaEstudio) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día de práctica de idiomas");
    break;

  case 6:
    console.log("Sábado de repaso");
    break;

  case 7:
    console.log("Domingo de descanso");
    break;

  default:
    console.log("Número de día inválido");
}

const tipoCurso = "ingles";

let descuento;
let descripcion;

switch (tipoCurso) {
  case "basico":
  case "ingles":
    descuento = 0;
    descripcion = "Curso estándar";
    break;

  case "frances":
  case "italiano":
    descuento = 0.05;
    descripcion = "Descuento especial 5%";
    break;

  case "avanzado":
  case "premium":
    descuento = 0.15;
    descripcion = "Descuento premium 15%";
    break;

  default:
    descuento = 0.10;
    descripcion = "Descuento general";
}

const precioCurso = 80;

const valorDescuento = precioCurso * descuento;

console.log(`Curso: ${tipoCurso}`);
console.log(`${descripcion}: $${valorDescuento.toFixed(2)}`);
console.log(`Precio final: $${(precioCurso - valorDescuento).toFixed(2)}`);