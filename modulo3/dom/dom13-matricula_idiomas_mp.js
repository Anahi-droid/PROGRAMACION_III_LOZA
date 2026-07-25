const matricula = document.getElementById('matricula');
const meses = document.getElementById('meses');
const mensualidad = document.getElementById('mensualidad');
const btnCalcular = document.getElementById('btn_calculo_costo');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

btnCalcular.addEventListener('click', () => {
    const matriculaNumerica = parseFloat(matricula.value);
    const mesesNumerico = parseFloat(meses.value);
    const mensualidadNumerica = parseFloat(mensualidad.value);

    error.textContent = '';
    resultado.textContent = '';

    if (
        isNaN(matriculaNumerica) ||
        isNaN(mesesNumerico) ||
        isNaN(mensualidadNumerica)
    ) {
        error.textContent = 'Por favor ingrese valores numéricos.';
        return;
    }

    if (
        matriculaNumerica <= 0 ||
        mesesNumerico <= 0 ||
        mensualidadNumerica <= 0
    ) {
        error.textContent = 'Por favor ingrese valores positivos.';
        return;
    }

    const costoTotal = matriculaNumerica + (mesesNumerico * mensualidadNumerica);

    resultado.textContent = `Costo total del curso: $${costoTotal.toFixed(2)}`;
});