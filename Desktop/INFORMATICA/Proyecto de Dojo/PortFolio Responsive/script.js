// Seleccionar elementos
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');

// Agregar un event listener al botón
navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Alternar clase para mostrar/ocultar
});
