let index=0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalslides = slides.length;

function showSlide(){

    document.querySelector(".slider").style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot=>dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide(){
    index = (index + 1) % totalslides;
    showSlide();
}

function prevSlide(){
    index = (index - 1 + totalslides) % totalslides;
    showSlide();
}

function currentSlide(n){
    index = n;
    showSlide();
}

setInterval(nextSlide, 3000);