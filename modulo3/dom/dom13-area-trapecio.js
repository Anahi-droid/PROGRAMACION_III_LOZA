const baseMayor = document.getElementById('baseMayor');
const baseMenor = document.getElementById('baseMenor');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn_calculo_area');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

botonCalcular.addEventListener('click', () => {
    const baseMayorNumerico = parseFloat(baseMayor.value);
    const baseMenorNumerico = parseFloat(baseMenorNumerico.value);
    const alturaNumerico = parseFloat(alturaNumerico.value);
    if (isNaN(baseMayorNumerico) || isNaN(baseMenorNumerico) || isNaN(altura)){
        error.textContent="Por favor ingrese los valores numericos"
        return;
    }
    if (baseMayorNumerico<=0 || baseMenorNumerico<=0 || alturaNumerico<=0){
        error.textContent="Por favoringresa los valores positivos"
        return;
    }
    const area = ((baseMayorNumerico+baseMenorNumerico/2)) * altura;
    resultado.textContent = `Resultado ${area}`

});