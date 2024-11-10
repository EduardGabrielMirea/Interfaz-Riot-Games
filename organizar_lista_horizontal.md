
# Organizar Elementos de Lista en Horizontal con CSS Flexbox

Para alinear los elementos de una lista `<li>` de forma horizontal en lugar de vertical, puedes utilizar **CSS Flexbox**. Esto es especialmente útil para organizar iconos de redes sociales u otros elementos de forma horizontal en la página.

## Instrucciones

1. Modifica el contenedor `.social ul` para aplicar `display: flex`.
2. Ajusta el diseño de los elementos `<li>` con `display: inline-flex`.

## Código de CSS

```css
.social {
    display: flex;
    justify-content: center; /* Opcional: centra los elementos */
    gap: 10px; /* Espacio entre los elementos */
}

.social ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.social ul li {
    display: inline-flex;
}
```

## Explicación del Código

- `display: flex` en `.social ul` convierte el contenedor de la lista en un **contenedor flex**, lo que permite que los elementos `<li>` se dispongan horizontalmente.
- `gap: 10px` añade espacio entre cada elemento de la lista, evitando que se vean pegados.
- `display: inline-flex` en los elementos `<li>` asegura que cada elemento ocupe solo el espacio necesario para su contenido, sin exceder el ancho disponible.

## Resultado

Con estas modificaciones, los elementos `<li>` dentro de `.social ul` se mostrarán en una sola línea horizontal, ideales para presentar iconos o enlaces alineados de forma estética.
