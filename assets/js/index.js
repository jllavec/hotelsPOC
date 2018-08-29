//Tomando el main css file
import style from '../css/main.scss';

//-----------Importando modules JS----------------

//Mixin beutifier
import mix from './helpers/mixWith';

//IE Required Polyfills
import ie11Fix from './polyfills/ie11fix';

//Clase principal
import PageClass from './classes/pageBehavior';

//Mixins
import Tab1Screen from './classes/tab1Screen';
import Tab2Screen from './classes/tab2Screen';




class Main extends mix(PageClass).with(Tab1Screen, Tab2Screen) {
  constructor(){
    super();
    console.info('Main class setted.');
  }
}

ie11Fix();
let mainBehavior = new Main();
