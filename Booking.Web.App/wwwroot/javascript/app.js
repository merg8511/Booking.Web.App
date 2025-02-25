window.scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// NUEVA FUNCIÓN PARA INICIALIZAR ANIMACIONES CUANDO BLazor RENDERIZA
window.initAnimations = () => {
    const animatedElements = document.querySelectorAll(".animate-fade-in, .animate-slide-in, .animate-zoom-in, .animate-gallery");

    function checkVisibility() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Ejecutar en carga de página
};

