let PageClass =  class {
  constructor() {
    //Tomo la posicin del scroll en la que se encuentra
    this.prevScroll = window.pageYOffset;
    document.querySelectorAll('.tab').forEach( element => { element.addEventListener('click', this.navigateScreen) });
    window.addEventListener('scroll', this.scrollHide);

    console.info('Page Behavior class setted.');
  }

  scrollHide() {
    // En movil, oculto el header en scroll-down y enseño en scroll-up
    const currentScroll = window.pageYOffset;
    (this.prevScroll > currentScroll) ? document.querySelector("header").classList.remove('hidden') : document.querySelector("header").classList.add('hidden');
    this.prevScroll = currentScroll;
  }

  navigateScreen() {
    //Unicamente si la tab que he pulsado no está activa
    //Como solo se trata de dos tabs, y para mantenerlo sencillo, utilizo el toggle de esta manera
    if (!this.classList.contains('active')) {
      const elemShow = `#${this.getAttribute('for')}`;
      document.querySelectorAll('button.tab').forEach(elem => {
        elem.classList.toggle('active');
        elem.classList.toggle('hidden');
      });
      document.querySelectorAll('.container').forEach(elem => {
        elem.classList.toggle('active');
        elem.classList.toggle('hidden');
      });
    }
  }
}

export default PageClass;
