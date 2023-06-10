# Documentacion de la pagina by Chat-GPT3.5 turbo
### Elementos y valores:

| Elemento  | Atributo | Valor | Definición |
| --------- | -------- | ----- | ---------- |
| Body      | Margin   | 0     | Elimina los márgenes predeterminados |
| @font-face| Font-family | cinvisible | Establece el nombre de una fuente personalizada |
|           | src      | url('fonts/invisible.otf') | Establece la ubicación de la fuente |
| *         | user-select, -moz-user-select, -webkit-user-select | none | Evita que el usuario pueda seleccionar el texto |
| Header    | Color    | #ffffff | Color blanco |
|           | Position | fixed   | Mantiene el encabezado fijo en la pantalla |
|           | Background-color | #ffd900 | Color amarillo-naranja |
|           | Width    | 100%     | Establece el ancho del encabezado al 100% del ancho de la página |
|           | Height   | 70px    | Establece la altura del encabezado en 70px |
|           | Display  | flex    | Utiliza el modelo de diseño flexible |
|           | Justify-content | space-between | Distribuye el espacio entre los elementos del encabezado |
|           | Align-items | center | Centra verticalmente los elementos del encabezado |
|           | Padding  | 10px    | Añade un espacio de relleno de 10px alrededor del encabezado |
|           | Top      | -10px   | Desplaza el encabezado 10px hacia arriba |
|           | Z-index  | 9999    | Establece la posición de apilamiento del encabezado |
|           | Box-shadow | 0 -6px 10px 5px rgba(0, 0, 0, 0.5) | Agrega una sombra al encabezado |
| Header .logo | Display | flex | Utiliza el modelo de diseño flexible |
|              | Align-items | center | Centra verticalmente los elementos del logotipo |
|              | Text-align | center | Centra el texto del logotipo |
|              | Width   | 40px    | Establece el ancho del logotipo en 40px |
|              | Height  | 40px    | Establece la altura del logotipo en 40px |
| .imglogoanim | Animation | rotate 1s linear | Agrega una animación de rotación al logotipo |
| .imglogocerrar | Animation | rotateinvert 1s linear | Agrega una animación de rotación invertida al logotipo |
| @keyframes rotate | - | - | Define una animación llamada "rotate" que rota un elemento |
|                 | from | transform: rotate(0deg); | Define el estado inicial de la animación |
|                 | to   | transform: rotate(365deg); | Define el estado final de la animación |
| @keyframes rotateinvert | - | - | Define una animación llamada "rotateinvert" que rota un elemento en sentido inverso |
|                        | from | transform: rotate(0deg); | Define el estado inicial de la animación |
|                        | to   | transform: rotate(-365deg); | Define el estado final de la animación |
| header .logo img | width | 100% | Establece el ancho de la imagen del logotipo al 100% del contenedor |
| #main | padding-top | 70px | Añade un espacio de relleno en la parte superior de "#main" de 70px |
|       | transition | margin-left 1s | Aplica una transición suave en el cambio de "margin-left" durante 1 segundo |
|       | display | flex | Utiliza el modelo de diseño flexible |
|       | justify-content | space-between | Distribuye el espacio entre los elementos del "#main" |
|       | align-items | center | Centra verticalmente los elementos del "#main" |
|       | width | 100% | Establece el ancho de "#main" al 100% del contenedor |
|       | max-width | 100% | Establece el ancho máximo de "#main" al 100% del contenedor |
|       | flex-wrap | wrap | Permite que los elementos del "#main" se envuelvan en varias líneas |
| #secarriba | background-color | red | Establece el color de fondo de "#secarriba" como rojo |
|            | height | 50px | Establece la altura de "#secarriba" en 50px |
|            | width | 100% | Establece el ancho de "#secarriba" al 100% del contenedor |
|            | display | flex | Utiliza el modelo de diseño flexible |
|            | align-items | center | Centra verticalmente los elementos de "#secarriba" |
|            | padding-left | 10px | Añade un espacio de relleno en el lado izquierdo de "#secarriba" de 10px |
| #seccentro, #secizquierda, #secderecha | margin | 5px 5px | Establece los márgenes de los elementos "#seccentro", "#secizquierda" y "#secderecha" |
|                                          | width | 400px | Establece el ancho de los elementos "#seccentro", "#secizquierda" y "#secderecha" en 400px |
|                                          | height | 50em | Establece la altura de los elementos "#seccentro", "#secizquierda" y "#secderecha" en 50em |
| footer | background-color | #F1F1F1 | Establece el color de fondo del pie de página como #F1F1F1 |
|        | text-align | center | Centra el contenido del pie de página horizontalmente |
|        | width | 100% | Establece el ancho del pie de página al 100% del contenedor |
|        | padding | 10px | Añade un espacio de relleno de 10px alrededor del pie de página |
|        | display | flex | Utiliza el modelo de diseño flexible |
|        | justify-content | center | Centra horizontalmente los elementos del pie de página |
|        | align-content | center | Centra verticalmente los elementos del pie de página |
|        | align-items | center | Centra verticalmente los elementos del pie de página |
|        | flex-wrap | nowrap | Evita que los elementos del pie de página se envuelvan en varias líneas |
| footer .texto | width | 100% | Establece el ancho del contenido de texto del pie de página al 100% del contenedor |
| .sidebar | position | fixed | Establece la posición fija de la barra lateral |
|          | height | 100% | Establece la altura de la barra lateral al 100% del contenedor |
|          | width | 0 | Establece el ancho inicial de la barra lateral en 0 |
|          | top | 0 | Establece la posición superior de la barra lateral en la parte superior del contenedor |
|          | left | 0 | Establece la posición izquierda de la barra lateral en la parte izquierda del contenedor |
|          | z-index | 1 | Establece el índice de apilamiento de la barra lateral |
|          | background-color | #0097FF | Establece el color de fondo de la barra lateral como #0097FF |
|          | overflow-x | hidden | Oculta el desplazamiento horizontal en la barra lateral |
|          | transition | 1s | Aplica una transición suave en 1 segundo |
|          | margin-top | 70px | Añade un espacio de margen en la parte superior de la barra lateral de 70px |
|          | box-sizing | border-box | Incluye los bordes y el relleno en el tamaño total de la barra lateral |
| .sidebar ul, .sidebar li | margin | 0 | Establece el margen de las listas en la barra lateral como cero |
|                          | padding | 0 | Establece el relleno de las listas en la barra lateral como cero |
| .sidebar li | margin-bottom | 5px | Establece el margen inferior de los elementos de lista en la barra lateral en 5px |
|             | margin-left | 5px | Establece el margen izquierdo de los elementos de lista en la barra lateral en 5px |
|             | width | 100% | Establece el ancho de los elementos de lista en la barra lateral al 100% del contenedor |
| .sidebar ul | margin-top | 10px | Establece un margen superior de 10px para la lista dentro de la barra lateral |
|              | display | block | Establece la visualización de la lista como bloque |
|              | width | 95% | Establece el ancho de la lista al 95% del contenedor |
|              | min-width | 200px | Establece el ancho mínimo de la lista en 200px |
| .sidebar a | text-decoration | none | Elimina la decoración de texto en los enlaces de la barra lateral |
|             | color | black | Establece el color del texto de los enlaces en negro |
|             | font-weight | bold | Establece el peso de la fuente en negrita para los enlaces |
| .sidebar li:hover | background-color | rgb(65, 238, 43) | Establece el color de fondo de los elementos de lista al pasar el cursor |
| .sidebar li:hover a | color | #F1714B | Establece el color del texto de los enlaces al pasar el cursor |
| .sub-menu | display | none | Oculta el submenú |
| h1 | color | #f90 | Establece el color del texto de los encabezados h1 en #f90 |
|    | font-size | 180% | Establece el tamaño de fuente de los encabezados h1 al 180% del tamaño predeterminado |
|    | font-weight | normal | Establece el peso de la fuente de los encabezados h1 como normal |
| #contenido | transition | margin-left .4s | Aplica una transición suave en el cambio de "margin-left" durante 0.4 segundos |
|           | padding | 1rem | Añade un espacio de relleno de 1rem al contenido |
| .mySlides | display | none | Oculta los elementos con la clase "mySlides" |
| img | vertical-align | middle | Alinea verticalmente las imágenes |
| .slideshow-container | max-width | 1000px | Establece el ancho máximo del contenedor del slideshow en 1000px |
|                      | position | relative | Establece la posición relativa del contenedor del slideshow |
|                      | margin | auto | Centra el contenedor del slideshow horizontalmente |
| .active | background-color | #717171 | Establece el color de fondo para los elementos con la clase "active" como #717171 |
| .fade | animation-name | fade | Especifica el nombre de la animación para los elementos con la clase "fade" |
|       | animation-duration | 1.5s | Establece la duración de la animación en 1.5 segundos |
| @keyframes fade | from | opacity: .4 | Define el estado inicial de la animación con una opacidad de 0.4 |
|                  | to   | opacity: 1 | Define el estado final de la animación con una opacidad de 1 |
| @media only screen and (max-width: 300px) | ||
|.text | font-size | 11px | Cuando la pantalla es más pequeña y tiene un ancho máximo de 300px, establece el tamaño de fuente de los elementos con la clase "text" en 11px |