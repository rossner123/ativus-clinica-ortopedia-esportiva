let slideAtual = 0;
const slidesContainer = document.querySelector(".slides");
let slides = document.querySelectorAll(".slide");

let totalSlides = slides.length;

function adicionaSlide(i) {
  const primeiroClone = slides[i - 1].cloneNode(true);
  slidesContainer.appendChild(primeiroClone);

  slides = document.querySelectorAll(".slide");
  totalSlides = slides.length;
}   

let intervalo;

function mostrarSlide(index) {
    const larguraSlide = slides[index].clientWidth;
    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(-${index * larguraSlide}px)`;
}

function mudarSlide(step) {
    slideAtual += step;
    mostrarSlide(slideAtual);
    adicionaSlide(slideAtual)
    reiniciarIntervalo();
    
}

function reiniciarIntervalo(){
    clearInterval(intervalo);
    iniciarIntervalo();
}

function iniciarIntervalo(){
    intervalo = setInterval(() => mudarSlide(1), 3000);
}

iniciarIntervalo();