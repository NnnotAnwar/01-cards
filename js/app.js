const slidesPlugin = (activeSlide = 0) => {
    const slides = document.querySelectorAll('.slide')
    slides[activeSlide].classList.add('active')
    const removeActive = () => slides.forEach(slide => slide.classList.remove('active'));

    slides.forEach(slide => {

        slide.addEventListener('click', () => {
            removeActive()
            slide.classList.add('active')
        })
    })
}

slidesPlugin(4)