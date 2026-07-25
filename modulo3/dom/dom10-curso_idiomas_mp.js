const campoClases = document.getElementById('campo_clases');
const campoPrecio = document.getElementById('campo_precio');
const btnCalcular = document.getElementById('btn_calcular');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', function() {
    const clases = parseFloat(campoClases.value);
    const precio = parseFloat(campoPrecio.value);
    const costo = clases * precio;
    resultado.textContent = `Costo total: $${costo}`;
});