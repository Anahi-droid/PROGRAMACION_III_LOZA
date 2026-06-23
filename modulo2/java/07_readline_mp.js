const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escribe el idioma que deseas aprender: ", (idioma) => {
  console.log(`Excelente elección, comenzarás a aprender ${idioma}`);
  rl.close();
});