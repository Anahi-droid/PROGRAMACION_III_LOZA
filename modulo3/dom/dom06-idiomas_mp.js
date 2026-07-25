
const circulo = document.getElementById('circulo');
let idiomas = [
    { nombre: 'Inglés', color: '#2b6cb0' },
    { nombre: 'Francés', color: '#c53030' },
    { nombre: 'Alemán', color: '#d69e2e' },
    { nombre: 'Japonés', color: '#2f855a' },
    { nombre: 'Italiano', color: '#b7791f' },
    { nombre: 'Portugués', color: '#6b46c1' }
];
let idiomaActual = 0;

let arrastrando = false;

// Cambiar color y nombre del idioma
function cambiarIdiomaCirculo() {
    idiomaActual = (idiomaActual + 1) % idiomas.length;
    circulo.style.background = idiomas[idiomaActual].color;
    circulo.textContent = idiomas[idiomaActual].nombre;
}


function moverCirculo(x, y) {
    const container = document.getElementById('container');
    const containerRect = container.getBoundingClientRect();
    const circuloRect = circulo.getBoundingClientRect();
    const mitadAncho = circuloRect.width / 2;
    const mitadAlto = circuloRect.height / 2;

    const offsetTop = containerRect.top + window.scrollY;
    const offsetLeft = containerRect.left + window.scrollX;

    circulo.style.left = (x - offsetLeft - mitadAncho) + 'px';
    circulo.style.top = (y - offsetTop - mitadAlto) + 'px';
}


circulo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    cambiarIdiomaCirculo();
    arrastrando = true;
});

document.addEventListener('touchmove', (e) => {
    if (!arrastrando) return;
    const touch = e.touches[0];
    moverCirculo(touch.pageX, touch.pageY);
});

document.addEventListener('touchend', () => {
    arrastrando = false;
});


circulo.addEventListener('mousedown', (e) => {
    e.preventDefault();
    cambiarIdiomaCirculo();
    arrastrando = true;
});

document.addEventListener('mousemove', (e) => {
    if (!arrastrando) return;
    moverCirculo(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
    arrastrando = false;
});