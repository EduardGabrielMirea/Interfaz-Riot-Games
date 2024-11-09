
# Explicación Detallada de Clases CSS para Barra de Navegación en Bootstrap

Este archivo detalla cada clase CSS utilizada en la barra de navegación de Bootstrap para facilitar su personalización.

## 1. `.navbar`
Clase principal para la estructura de la barra de navegación:
   - `position: relative`: permite que los elementos se posicionen en relación con esta barra.
   - `min-height: 50px`: establece una altura mínima.
   - `margin-bottom: 20px`: evita solapamiento con el contenido.

## 2. `.navbar-inverse`
Crea una barra con fondo oscuro:
   - Fondo negro (`background-color: #222`) y borde oscuro (`border-color: #080808`).
   - Colores de enlace y texto en tonos claros para visibilidad.

## 3. `.navbar-header`
Envuelve elementos del encabezado (logo y botón de colapso) para dispositivos móviles:
   - `float: left`: alinea el contenido a la izquierda.

## 4. `.navbar-toggle`
Botón de hamburguesa en dispositivos móviles, incluye:
   - `display: block` solo en pantallas pequeñas.
   - Tres `span` con `.icon-bar` para formar el icono.
   - `data-toggle="collapse"` y `data-target="#navbar"` para activar el colapso del menú.

## 5. `.icon-bar`
Cada `span` con esta clase representa una barra en el botón de hamburguesa:
   - `display: block`, `width: 22px`, `height: 2px` para la forma.
   - `background-color` para el color de la barra.

## 6. `.navbar-brand`
Usada para el logo o el nombre del proyecto:
   - `display: inline-block`: permite alineación horizontal con otros elementos.
   - Imágenes dentro de `.navbar-brand` se muestran como `display: block` y `height: auto`.

## 7. `.img-logo`, `.img-responsive` y `.img-circle`
   - **`.img-responsive`**: ajusta el tamaño de la imagen dentro del contenedor, con `max-width: 100%` y `height: auto`.
   - **`.img-circle`**: aplica bordes redondeados para un efecto circular.
   - **`.img-logo`**: clase personalizada que puedes usar para aplicar estilos específicos adicionales.

## 8. `.navbar-collapse` y `.collapse`
Permiten el colapso de la barra en pantallas pequeñas:
   - **`.navbar-collapse`**: configura la animación de despliegue.
   - **`.collapse`**: oculta contenido en pantallas pequeñas.

## 9. `.nav`
Define estilos básicos para listas de navegación:
   - Elimina puntos de viñeta y alinea los elementos horizontalmente.

## 10. `.navbar-nav`
Ajusta elementos de navegación dentro de la barra:
   - En pantallas grandes se muestra horizontalmente; en pequeñas, verticalmente al colapsarse.
   - Cada enlace en `.navbar-nav` tiene `padding` para accesibilidad.

## 11. `.active`
Aplica a `<li>` para indicar la página actual:
   - Cambia fondo y color de texto del enlace.

## 12. `.dropdown`
Permite menús desplegables dentro de la navegación:
   - **`.dropdown-toggle`**: enlaza que activa el menú.
   - **`.data-toggle="dropdown"`**: activa el desplegable.
   - **`.caret`**: agrega un pequeño triángulo para indicar el menú desplegable.

## 13. `.dropdown-menu`
Contenedor del menú desplegable:
   - `position: absolute` y `top: 100%` lo colocan debajo del activador.
   - **`.divider`**: línea de separación entre elementos.
   - **`.dropdown-header`**: define encabezados dentro del menú.

## 14. `.navbar-right`
Usada en `<ul class="navbar-nav navbar-right">`, alinea los elementos a la derecha dentro de la barra.

## 15. `.sr-only`
Oculta el contenido visualmente, manteniendo accesibilidad para lectores de pantalla. Usado en “Fixed top” para indicar el estado `(current)`.

Esta guía proporciona un desglose completo de las clases principales para que puedas personalizar tu barra de navegación.
