function agregar(valor) {
    let display = document.getElementById('display');
    display.value += valor;
}

function borrar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function limpiar() {
    let display = document.getElementById('display');
    display.value = '';
}