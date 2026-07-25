const horas = document.getElementById('campo_horas');
const precio = document.getElementById('campo_precio');
const boton = document.getElementById('btn');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', () => {
    const costo = Number(horas.value) * Number(precio.value);
    resultado.textContent = `Costo total: $${costo}`;
});