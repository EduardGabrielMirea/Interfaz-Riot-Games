
# Redirigir a una Página después de Autenticación Exitosa

Si deseas redirigir a la página `home.html` tras verificar los datos del formulario, puedes hacer la redirección utilizando `window.location.href` en lugar de una segunda solicitud `GET` para `home.html`. A continuación, se presenta una versión actualizada del código para lograrlo:

```javascript
const loginButton = document.getElementById("login-button");
const xhr = new XMLHttpRequest();

loginButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtener los datos de los campos del formulario
    var userName = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    
    // Configurar y enviar la solicitud POST para la autenticación
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Si la autenticación es exitosa, redirigir a home.html
                window.location.href = "home.html";
            } else {
                // Manejar el error de autenticación (opcional)
                alert("Error de autenticación. Por favor verifica tus datos.");
            }
        }
    };
    
    // Enviar los datos del formulario como JSON
    xhr.send(JSON.stringify({ username: userName, password: password }));
});
```

## Explicación de los Cambios

1. **Redirección exitosa**: `window.location.href = "home.html";` redirige a la página `home.html` si la autenticación es exitosa.
2. **Validación del usuario**: `xhr.open("POST", "/login", true);` envía una solicitud `POST` para validar al usuario en el servidor.
3. **Envía JSON**: `xhr.send(JSON.stringify({ username: userName, password: password }));` envía los datos como JSON en el cuerpo de la solicitud.
4. **Condición de error opcional**: Si el servidor responde con un estado distinto a 200, se muestra un mensaje de error.

---

## Propósito de `xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");`

La línea 

```javascript
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
```

sirve para especificar al servidor el tipo de contenido que se está enviando en el cuerpo de la solicitud. En este caso:

1. **`Content-Type: application/json`**: Indica que el cuerpo de la solicitud está en formato JSON. Esto es útil cuando necesitas enviar datos estructurados (como objetos o arrays) y el servidor espera recibirlos en este formato.
   
2. **`charset=UTF-8`**: Especifica que el texto JSON se está enviando en la codificación de caracteres UTF-8, lo cual es el estándar y asegura que caracteres especiales se transmitan correctamente.

En el contexto del código, esta línea es necesaria para enviar los datos de inicio de sesión (usuario y contraseña) en formato JSON al servidor.
