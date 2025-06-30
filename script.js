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

let scrollIndex = 0;
const logosWrapper = document.querySelector(".logosConvenios");
let logos = document.querySelectorAll(".logo");

function scrollConvenios(direcao) {
    // Atualiza os logos (caso eles mudem dinamicamente depois)
    logos = document.querySelectorAll(".logo");

    // Corrige limites
    const maxIndex = logos.length - 5;
    if (direcao > 0 && scrollIndex >= maxIndex) return;
    if (direcao < 0 && scrollIndex <= 0) return;

    // Calcula o passo com base no logo atual
    const logoAtual = logos[scrollIndex];
    const larguraLogo = logoAtual.offsetWidth;
    const gap = 48; // mesmo valor do CSS (gap: 2rem)

    // Atualiza índice
    scrollIndex += direcao;

    // Move com base no total acumulado até o índice atual
    let deslocamento = 0;

    for (let i = 0; i < scrollIndex; i++) {
        deslocamento += logos[i].offsetWidth + gap;
    }

    logosWrapper.style.transform = `translateX(-${deslocamento}px)`;
}

console.log(logos)
console.log(logos[0].offsetWidth)
console.log(logos.length - 5)

iniciarIntervalo();