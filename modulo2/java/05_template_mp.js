const estudiante = "Lucía";
const idioma = "Inglés";
const nivel = 28;

console.log(`Bienvenida, ${estudiante}`);

console.log(`Idioma seleccionado: ${idioma.toUpperCase()}`);
console.log(`El próximo nivel será ${nivel + 1}`);
console.log(`¿Puede acceder al curso avanzado? ${nivel >= 18 ? "Sí" : "No"}`);

const perfil = `
  Estudiante: ${estudiante}
  Idioma:     ${idioma}
  Nivel:      ${nivel}
  Acceso:     ${nivel >= 18 ? "Permitido" : "Denegado"}
`;

console.log(perfil);