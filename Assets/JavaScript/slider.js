document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;
    let totalSlides = slider.children.length;
    let autoplayInterval;

    function setPositionByIndex() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveNext() {
        index = (index + 1) % totalSlides;
        setPositionByIndex();
    }

    function movePrev() {
        index = (index - 1 + totalSlides) % totalSlides;
        setPositionByIndex();
    }

    function startAutoplay() {
        autoplayInterval = setInterval(moveNext, 2000);
    }

    prevBtn.addEventListener("click", function () {
        clearInterval(autoplayInterval);
        movePrev();
        startAutoplay();
    });

    nextBtn.addEventListener("click", function () {
        clearInterval(autoplayInterval);
        moveNext();
        startAutoplay();
    });

    startAutoplay();
});
