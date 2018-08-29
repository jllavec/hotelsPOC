let Tab2Screen = (superclass) => class extends superclass {
    constructor() {
      super();
      //Seteo los listeners de los collapse
      document.querySelectorAll(".collapse-header").forEach((elem) => {
        elem.addEventListener("click", this.collapsibleBehavior);
      });
      document.querySelectorAll(".detail-header").forEach((elem) => {
        elem.addEventListener("click", this.collapsibleBehavior);
      });

      console.info('Tab2 screen mixin setted.');
    }

    collapsibleBehavior() {
      const panel = this.parentElement.querySelector('.collapse-content');
      const img = this.querySelector('.arrow-collapse');

      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        img.classList.toggle('flip');
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        img.classList.toggle('flip');
      }
      /* Es un collapse de detalle de plan opcional ->
       --> Voy refrescando al padre mientras crece para hacer la animación mas dinámica*/
      if(this.classList.contains('detail-header')) {
        const containerAncestor = this.closest('.collapse-content');
        let timesRun = 0;
        let interval = setInterval(() => {
          timesRun += 1;
          if(timesRun === 25){
              clearInterval(interval);
          }
          containerAncestor.style.maxHeight = containerAncestor.scrollHeight + "px";
        }, 25);
      }

    }

  }

  export default Tab2Screen;
