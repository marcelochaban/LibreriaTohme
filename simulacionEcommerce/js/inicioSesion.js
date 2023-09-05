const loginDiv = document.getElementById('login');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const overlay = document.getElementById('overlay');
const body = document.body;

// Elemento con la clase "producto-detalles"
const productoDetallesElement = document.querySelector('.producto-detalles');

loginDiv.addEventListener('click', () => {
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
    body.classList.add('modal-open'); // Agrega la clase para deshabilitar el fondo

    // Desactiva la clase "producto-detalles"
    productoDetallesElement.classList.add('disable-class');
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('modal-open'); // Elimina la clase para habilitar el fondo

    // Reactiva la clase "producto-detalles" cuando se cierra el modal
    productoDetallesElement.classList.remove('disable-class');
});

overlay.addEventListener('click', () => {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('modal-open'); // Elimina la clase para habilitar el fondo

    // Reactiva la clase "producto-detalles" cuando se cierra el modal
    productoDetallesElement.classList.remove('disable-class');
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        loginModal.style.display = 'none';
        overlay.style.display = 'none';
        body.classList.remove('modal-open'); // Elimina la clase para habilitar el fondo

        // Reactiva la clase "producto-detalles" cuando se cierra el modal
        productoDetallesElement.classList.remove('disable-class');
    }
});
