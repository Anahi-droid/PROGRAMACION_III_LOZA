// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
  console.log("Hello World");   // "Hola, Ana!"
}
saludo()

// Sintaxis: function expresada
const saludarHola = function(){
  console.log("Hola con funcion expresada");
}
saludarHola();

// Sintaxis: function flecha
const saludosFlecha=()=>{
  console.log("Hello con funcion flecha");
}

// Sintaxis: function anonima
setTimeout(function(){
  console.log("Ejecutando...")
}, 1000)


// Sintaxis: function parametros{
function saludarConParametros(nombre){
  console.log("Hola "+nombre)
}
saludarConParametros(Pedro)

function sumar(a,b){
  return a+b;
}
resultado=sumar(45,5);
console.log(resultado);
