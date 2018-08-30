# hotelsPOC

## Task runner
* **Start** (npm start).    
Inicia un live server de webpack con el proyecto

* **Build** (npm run build).   
Genera los ficheros minificados y compilados(scss->css / es6 -> es5)

## Git
Para este proyecto se utilizan conventional commits (https://conventionalcommits.org/).

Es necesario instalar en node global "commitizen-cli": npm install -g commitizen

* **Commit**   
Para hacer un commit, simplemente stagear los ficheros y lanzar : **git cz**. Despues seguir los pasos para realizar el commit.

## Solución propuesta

He intentado desarrollar todo desde cero sin ningún tipo de ayuda de framework/librería/módulo externo tanto para las animaciones, transiciones como el grid (exceptuando casos que relatare a continuacion).

Para empezar he utilizado Webpack para compilar tanto Sass como los modulos de ES6. Este para mi ha sido una especie de prueba de concepto, ya que nunca había utilizado Webpack, pero, por qué no? Tenía la oportunidad de aprender/utilizarlo en este momento y fui a por ello. 

Tambien SASS fue un "pequeño reto", ya que solo lo había utilizado un par de veces muy puntuales, y no estoy acostumbrado a estructurar ficheros SASS, aunque tambien he visto diferentes estructuras de ficheros en diferentes proyectos y "cada maestrillo tiene su librillo", he visto en muchos casos. Para las media queries he utilizado "Mobile First", asi que los estilos principales son dedicados a mobile, y en las media queries son para tablet y desktop.

Todas las animaciones las he intentado hacer únicamente con SASS, y en los casos que fue necesario meter un poco de JS para ciertos comportamientos como los fade de las screens y los collapse de la segunda pantalla.

El contenido de la web es estático, no conecta con ningún endpoint(fake) para tomar los datos, ya que al realizar el mismo con JS puro, se me complicaba crear un template repeater.

Para la primera pantalla decidí utilizar uno de los ejemplos de grid mixins que se encontraban en las instrucciones de la prueba. Utilizo un sistema de columnas dinamico para mostrar el contenido de la web. Dependiendo del tamaño de la pantalla, se crean tantas columnas como lo quisiera dividir. (En IE me dio un poco de guerra y no está perfecto...)

La segunda pantalla decidí hacer la estructura yo mismo desde 0.

Para el scripting, decidí utilizar clases y mixins de ES6. Se trata de una pequeña prueba de concepto y para proyectos tan pequeños quizá no son tan necesarios, pero me parecio buena idea utilizarlospara demostrar su uso.

Muchas gracias por vuestro tiempo y un saludo.
