const productos = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 10.99,
        descripcion: "Teclado mecánico"
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 5.99,
        descripcion: "Mouse inalámbrico"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 199.99,
        descripcion: "Monitor de 24 pulgadas"
    }
];

let productoEditando = null;

function renderProductos() {

    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    productos.forEach(producto => {

        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td>
                <button onclick="editarProducto(${producto.id})">
                    Editar
                </button>

                <button onclick="eliminarProducto(${producto.id})">
                    Eliminar
                </button>
            </td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}

function agregarProducto() {

    const nombreInput = document.getElementById('nombre').value.trim();

    const descripcionInput = document.getElementById('descripcion').value.trim();

    const precioInput = document.getElementById('precio').value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {

        alert('Por favor complete todos los campos');
        return;
    }

    if (productoEditando !== null) {

        const producto = productos.find(
            p => p.id === productoEditando
        );

        producto.nombre = nombreInput;
        producto.descripcion = descripcionInput;
        producto.precio = parseFloat(precioInput);

        productoEditando = null;

        document.getElementById('btn_agregar').textContent =
            'Agregar Producto';

    } else {

        const nuevoProducto = {

            id: productos.length > 0
                ? Math.max(...productos.map(p => p.id)) + 1
                : 1,

            nombre: nombreInput,
            descripcion: descripcionInput,
            precio: parseFloat(precioInput)
        };

        productos.push(nuevoProducto);
    }

    renderProductos();
    limpiarFormulario();
}

function editarProducto(id) {

    const producto = productos.find(
        p => p.id === id
    );

    document.getElementById('nombre').value =
        producto.nombre;

    document.getElementById('descripcion').value =
        producto.descripcion;

    document.getElementById('precio').value =
        producto.precio;

    productoEditando = id;

    document.getElementById('btn_agregar').textContent =
        'Actualizar Producto';
}

function eliminarProducto(id) {

    const indice = productos.findIndex(
        p => p.id === id
    );

    if (indice !== -1) {

        const confirmar = confirm(
            '¿Desea eliminar este producto?'
        );

        if (confirmar) {

            productos.splice(indice, 1);

            renderProductos();
        }
    }
}

function limpiarFormulario() {

    document.getElementById('nombre').value = '';

    document.getElementById('descripcion').value = '';

    document.getElementById('precio').value = '';

    productoEditando = null;

    document.getElementById('btn_agregar').textContent =
        'Agregar Producto';
}

const agregarBtn = document.getElementById('btn_agregar');

agregarBtn.addEventListener(
    'click',
    agregarProducto
);

const cancelarBtn = document.getElementById('btn_cancelar');

cancelarBtn.addEventListener(
    'click',
    limpiarFormulario
);

window.onload = function () {

    renderProductos();
};