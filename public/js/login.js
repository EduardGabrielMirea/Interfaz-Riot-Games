document.addEventListener("DOMContentLoaded",function () {
     // Comprobar el From y redireccionar al home.html. Hay que hacer cuando le des enter que funcione también (Hecho por mi)
     const loginButton = document.getElementById("login-button");
     const homeHtml = 'home.html';
     const xhr = new XMLHttpRequest();
     loginButton.addEventListener("click", function(event){
         event.preventDefault();
 
         //Coger los datos de los campos del formulario
         var userName = document.getElementById("username").value.trim();
         var password = document.getElementById("password").value.trim();
 
         // Llamar a la funcion de verificación
           if (!verificarCampos(userName, password)) {
             return; // Si la validación falla, detener el envío
         }
         // Falta verificar bien los datos.
         xhr.open('GET', homeHtml, true);
         xhr.onreadystatechange = function () {
             if (xhr.readyState === 4 && xhr.status === 200) {
                 // Si la autenticación es exitosa, redirigir a home.html
                 window.location.href = "home.html";
                 } else {
                     // Manejar el error de autenticación (opcional)
                     alert("Error de autenticación. Por favor verifica tus datos.");
                 }
         }
         xhr.send();
     });
  

      // Script para mostrar u ocultar la contraseña en el login.
    var passwordInput = document.getElementById("password");
    var togglePassword = document.getElementById("toggle-password");
    togglePassword.addEventListener("click", function() {
        // Alternar el tipo de entrada
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        
        // Cambiar el ícono entre el ojo abierto y cerrado
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});

// Funcion para verificar si los campos están vacios
function verificarCampos(userName,password) {
       
    if (userName === "") {
        alert("El campo 'Nombre' es obligatorio.");
        return false; // Detener el envío si el campo está vacío
    }

    if (password === "") {
        alert("El campo 'Password' es obligatorio.");
        return false; // Detener el envío si el campo está vacío
    }
    return true; // Si los campos no están vacíos, enviar el formulario
}