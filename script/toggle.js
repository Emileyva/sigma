const toggleBtn = document.querySelector('.toggle');
const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle i');
const dropdown = document.querySelector('.dropdown');
const lista = document.querySelectorAll('.elementos-lista');

toggle.onclick = function () {
    dropdown.classList.add('open');
    const isOpen = dropdown.classList.contains('open');

    toggleIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

lista.onclick = function () {
        dropdown.classList.remove('open');
        console.log('prueba');
}