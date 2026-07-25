
const boton = document.getElementById('botonAnimado');

function agrandar() {
    boton.style.transform = 'scale(1.15)';
    boton.style.background = '#285e61'; // Un tono más oscuro al interactuar
}

function normalizar() {
    boton.style.transform = 'scale(1)';
    boton.style.background = '#319795'; // Color original del botón
}

boton.addEventListener('mouseover', agrandar);
boton.addEventListener('mouseout', normalizar);

boton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    agrandar();
});
boton.addEventListener('touchend', normalizar);