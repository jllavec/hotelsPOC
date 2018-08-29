let Tab1Screen = (superclass) => class extends superclass {
    constructor() {
      super();
      //Seteo los listeners de las card
      document.querySelectorAll('.radio-container').forEach((element) => {
          element.addEventListener('click', this.radioBehavior);
      });
      console.info('Tab1 screen mixin setted.');
    }

    radioBehavior() {
        if (document.querySelector(".radio-container.selected")!==null) {
          document.querySelector(".radio-container.selected").classList.remove('selected');
          document.querySelector("input[checked]").removeAttribute('checked');
        }
        this.classList.add('selected');
        this.querySelector('input').setAttribute('checked', true);
      }
  }

  export default Tab1Screen;
