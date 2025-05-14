document.addEventListener('DOMContentLoaded', function() {
    // Manejo del tema oscuro/claro
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Verificar el almacenamiento local para el tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.textContent = 'Modo Oscuro';
    }
    
    // Evento para cambiar el tema
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.textContent = 'Modo Oscuro';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Actualizar año en el footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Inicializar scripts de publicidad (ejemplo)
    /*
    if (typeof adsterra !== 'undefined') {
        adsterra.init();
    }
    */
});