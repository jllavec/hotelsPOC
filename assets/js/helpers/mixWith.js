//Syntactic sugar de empleo de mixins, es un helper facil y sencillo de utilizar,
//y hace que el código sea mas legible y mantenible.

let mix = (superclass) => new MixinBuilder(superclass);

class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass;
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}

export default mix;
