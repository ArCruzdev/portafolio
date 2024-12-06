export function sliderSlide(){
    const $slide = document.querySelector('.slides'),
      $imgSlides = document.querySelectorAll('.imgSlide');
     
    let imgPorcentaje = 100 / $imgSlides.length; // porcentaje que debe moverse el contnedor de las imagenes
    let contador = 0;
    let anchoImg = 0;
    let autoSlide;

    const moveSlider = (move) => {
      $slide.style.transform = `translateX(-${move}%)`;
    }

    const autoMoveSlider = () => {
      if (contador < $imgSlides.length - 1) {
        contador++;
      } else {
        contador = 0;
      }
      anchoImg = imgPorcentaje * contador;
      moveSlider(anchoImg);
    }

    const startAutoSlide = () => {
      autoSlide = setInterval(autoMoveSlider, 1500);
    }

    startAutoSlide();

      document.addEventListener('click', e => {
        clearInterval(autoSlide);

        if(e.target.matches('.btnRight')){
            if(contador < $imgSlides.length - 1){
              contador++;
              anchoImg = imgPorcentaje * contador;
              moveSlider(anchoImg)
            } else {
              contador = 0;
              anchoImg = 0;
              moveSlider(anchoImg)
            }
        }

        if(e.target.matches('.btnLeft')){
          if(contador > 0){
            contador--;
            anchoImg = imgPorcentaje * contador;
            moveSlider(anchoImg);
          } else {
            contador = $imgSlides.length - 1;
            anchoImg = imgPorcentaje * contador;
            moveSlider(anchoImg)
          }
        }
        startAutoSlide();
      })
}
