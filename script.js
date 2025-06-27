let slideAtual = 0
const slides = document.querySelectorAll(".slide")
const slidesContainer = document.querySelector(".slides")
let intervalo

function mostrarSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.remove("active")
        if(i === index){
            slide.classList.add("active")
        }
    }) 
    const larguraSlide = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${index * larguraSlide}px)`
}

function mudarSlide(step){
    slideAtual = (slideAtual + step + slides.length) % slides.length;
    mostrarSlide(slideAtual)
    reiniciarIntervalo()
}

function reiniciarIntervalo(){
    clearInterval(intervalo)
    iniciarIntervalo()
}

function iniciarIntervalo(){
    intervalo = setInterval(() => mudarSlide(1), 5000)
}

iniciarIntervalo()