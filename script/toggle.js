const toggleBtn = document.querySelector('.toggle');
const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle i');
const dropdown = document.querySelector('.dropdown');
const lista = document.querySelector('.elementos-lista');

toggle.onclick = function () {
    dropdown.classList.toggle('open'); // Cambiar 'add' por 'toggle'
    const isOpen = dropdown.classList.contains('open');

    toggleIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};

// Agregar manejador de eventos a los enlaces <a>
const elementosListaLinks = document.querySelectorAll('.elementos-lista a');
elementosListaLinks.forEach(link => {
    link.addEventListener('click', function () {
        dropdown.classList.remove('open');
        toggleIcon.classList = 'fa-solid fa-bars';
    });
});
