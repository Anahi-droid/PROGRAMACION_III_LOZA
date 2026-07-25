const campoCurso = document.getElementById('campo_curso');
const botonAgregar = document.getElementById('btn_agregar');
const listaCursos = document.getElementById('lista_cursos');

botonAgregar.addEventListener('click', function() {
    const curso = campoCurso.value.trim();
    if (curso !== '') {
        const li = document.createElement('li');
        li.textContent = curso;
        listaCursos.appendChild(li);
        campoCurso.value = '';
    }
});