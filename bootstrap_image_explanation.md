
# Estilos de Imágenes en Navegación con Bootstrap

Esta guía describe cómo utilizar estilos de imágenes en una barra de navegación usando clases de Bootstrap.

## `.navbar-brand > img`
Al agregar una imagen dentro de `.navbar-brand`, automáticamente se aplican estilos para que la imagen se muestre en bloque (`display: block`) y se adapte al contenedor.

## Ajustes de Alineación Vertical
Por defecto, las imágenes tienen `vertical-align: middle;` aplicado a través de la clase `.img` para mantener la alineación con el texto adyacente, si es necesario.

## Clases de Imagen de Bootstrap

- **`.img-responsive`**: Esta clase ajusta automáticamente el tamaño de la imagen para que no exceda el ancho de su contenedor, aplicando `max-width: 100%` y `height: auto`, lo cual es útil si quieres que la imagen escale en función del tamaño del contenedor.

- **`.img-rounded`, `.img-thumbnail`, `.img-circle`**: Estas clases son útiles para dar estilos específicos como bordes redondeados o en miniatura a la imagen, adaptando su apariencia a diferentes necesidades de diseño.
