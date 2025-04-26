document.addEventListener('DOMContentLoaded', () => {
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
// Adicione no início do arquivo:
console.log("Script carregado!"); // Verifique se aparece no console

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado!"); // Verifique se aparece
    
    const form = document.getElementById("form");
    console.log("Elemento form:", form); // Deve mostrar o elemento
    
    if(!form) {
        console.error("FORMULÁRIO NÃO ENCONTRADO! Verifique:");
        console.error("- O ID no HTML está correto?");
        console.error("- O script está carregando após o elemento?");
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Formulário enviado!"); // Verifique se aparece
        
        const email = document.getElementById("email");
        if(!email) {
            console.error("Campo de email não encontrado!");
            return;
        }
        
        if(email.value === "") {
            console.log("Email vazio detectado");
            // Sua lógica de erro aqui
        } else {
            alert("Enviado com sucesso!");
            form.reset();
        }
    });
});
    
    // Auto-play (opcional)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % totalSlides;
    //     updateSlide();
    // }, 3000);
});
