// Agregar interactividad a los botones
document.querySelector('.btn-register').addEventListener('click', function() {
    alert('Funcionalidad de registro - Próximamente');
});

document.querySelector('.btn-login').addEventListener('click', function() {
    alert('Funcionalidad de inicio de sesión - Próximamente');
});

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});