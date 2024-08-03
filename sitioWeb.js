//-------------------------MODO OSCURO-------------------------------

const body = document.querySelector("body");
const btnOscuro = document.getElementById("btn-oscuro");

btnOscuro.addEventListener("click",function(){
    body.classList.toggle("oscuro");
    if (body.classList.contains("oscuro")){
        btnOscuro.innerHTML = `<i class="bi bi-sun"></i>`
    } else{
        btnOscuro.innerHTML = `<i class="bi bi-moon"></i>`
    }
})

//---------------------------SLIDER AUTOMATICO-------------------------

const slider = document.querySelector(".slider");
const clone = slider.innerHTML;
slider.innerHTML += clone;

//---------------------------ANIMACION AL SCROLLEAR--------------------

const seccionesOcultas = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entradas)=>{
    entradas.forEach(entrada =>{
        entrada.target.classList.toggle("mostrar",entrada.isIntersecting)
    })
})

seccionesOcultas.forEach((seccion)=>observer.observe(seccion))