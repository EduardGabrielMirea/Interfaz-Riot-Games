# Uso de `box-sizing: border-box` en CSS

El uso de `box-sizing: border-box` en CSS permite un control más preciso del tamaño y espaciado de los elementos en una página web. A continuación, se explica su función y por qué es tan útil en el diseño web.

## 1. Comportamiento sin `box-sizing: border-box` (por defecto)

Por defecto, los elementos en CSS usan `box-sizing: content-box`, lo que significa que el ancho y alto especificados solo aplican al **contenido** del elemento. Esto implica que el padding y el borde se **suman** al tamaño especificado, lo cual puede generar resultados inesperados.

### Ejemplo:
Si defines un elemento con:
```css
width: 200px;
padding: 10px;
border: 2px solid black;
```