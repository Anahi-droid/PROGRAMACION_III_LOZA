const cursos = [
    {
        id: 1,
        nombre: "Inglés",
        descripcion: "Básico",
        precio: 120
    },
    {
        id: 2,
        nombre: "Francés",
        descripcion: "Intermedio",
        precio: 180
    },
    {
        id: 3,
        nombre: "Alemán",
        descripcion: "Avanzado",
        precio: 250
    }
];

function renderCursos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    cursos.forEach(curso => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
        <td>${curso.id}</td>
        <td>${curso.nombre}</td>
        <td>${curso.descripcion}</td>
        <td>$${curso.precio.toFixed(2)}</td>
        <td>
            <button onclick="editarCurso(${curso.id})">Editar</button>
            <button onclick="eliminarCurso(${curso.id})">Eliminar</button>
        </td>
        `;

        cuerpoTabla.appendChild(fila);
    });

    actualizarEstadisticas();
}

function agregarCurso() {
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const precio = document.getElementById('precio').value.trim();

    if (!nombre || !descripcion || !precio) {
        alert('Complete todos los campos.');
        return;
    }

    cursos.push({
        id: cursos.length > 0 ? Math.max(...cursos.map(c => c.id)) + 1 : 1,
        nombre,
        descripcion,
        precio: parseFloat(precio)
    });

    renderCursos();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
}

const agregarBtn = document.getElementById('btn_agregar');
agregarBtn.addEventListener('click', agregarCurso);

let idEditar = null;

function editarCurso(id) {
    const curso = cursos.find(c => c.id === id);

    document.getElementById('nombre').value = curso.nombre;
    document.getElementById('descripcion').value = curso.descripcion;
    document.getElementById('precio').value = curso.precio;

    idEditar = id;

    agregarBtn.textContent = 'Actualizar Curso';
    agregarBtn.removeEventListener('click', agregarCurso);
    agregarBtn.addEventListener('click', actualizarCurso);
}

function actualizarCurso() {
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const precio = document.getElementById('precio').value.trim();

    if (!nombre || !descripcion || !precio) {
        alert('Complete todos los campos.');
        return;
    }

    const indice = cursos.findIndex(c => c.id === idEditar);

    cursos[indice] = {
        id: idEditar,
        nombre,
        descripcion,
        precio: parseFloat(precio)
    };

    renderCursos();
    limpiarFormulario();

    agregarBtn.textContent = 'Agregar Curso';
    agregarBtn.removeEventListener('click', actualizarCurso);
    agregarBtn.addEventListener('click', agregarCurso);

    idEditar = null;
}

function cancelarEdicion() {
    limpiarFormulario();

    agregarBtn.textContent = 'Agregar Curso';
    agregarBtn.removeEventListener('click', actualizarCurso);
    agregarBtn.addEventListener('click', agregarCurso);

    idEditar = null;
}

document.getElementById('btn_cancelar').addEventListener('click', cancelarEdicion);

function eliminarCurso(id) {
    const indice = cursos.findIndex(c => c.id === id);

    if (indice !== -1) {
        if (confirm('¿Desea eliminar este curso?')) {
            cursos.splice(indice, 1);
            renderCursos();
        }
    }
}

function actualizarEstadisticas() {
    document.getElementById('totalCursos').textContent = cursos.length;

    const promedio = cursos.length > 0
        ? (cursos.reduce((suma, c) => suma + c.precio, 0) / cursos.length).toFixed(2)
        : 0;

    document.getElementById('costoPromedio').textContent = `$${promedio}`;

    if (cursos.length > 0) {
        const caro = cursos.reduce((a, b) => a.precio > b.precio ? a : b);
        const barato = cursos.reduce((a, b) => a.precio < b.precio ? a : b);

        document.getElementById('cursoMasCaro').textContent = `${caro.nombre} ($${caro.precio})`;
        document.getElementById('cursoMasBarato').textContent = `${barato.nombre} ($${barato.precio})`;
    } else {
        document.getElementById('cursoMasCaro').textContent = 'N/A';
        document.getElementById('cursoMasBarato').textContent = 'N/A';
    }
}

window.onload = function () {
    renderCursos();
};