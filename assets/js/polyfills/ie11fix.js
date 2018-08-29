//Compruebo que el navegador sea IE y aplico los polyfills necesarios.
export default function ie11Fix () {
    if (navigator.userAgent.match(/Trident/)!==null) {
        document.querySelector('#container1').setAttribute('iefix', true);

        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

        if (window.Element && !Element.prototype.closest) {
          Element.prototype.closest =
          function(s) {
              var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                  i,
                  el = this;
              do {
                  i = matches.length;
                  while (--i >= 0 && matches.item(i) !== el) {};
              } while ((i < 0) && (el = el.parentElement));
              return el;
          };
        }

    }
}
