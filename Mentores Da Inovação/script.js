document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    const indicadores = document.querySelectorAll('.indicador');
    
    let currentIndex = 0;
    const totalSlides = slideItems.length;
    
    // Função para atualizar o slide
    function updateSlide() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualiza indicadores
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('ativo', index === currentIndex);
        });
    }
    
    // Próximo slide
    btnProximo.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    });
    
    // Slide anterior
    btnAnterior.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });
    
    // Navegação pelos indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            currentIndex = index;
            updateSlide();
        });
    });
    
    // Auto-play (opcional)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % totalSlides;
    //     updateSlide();
    // }, 3000);
});