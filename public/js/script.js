document.addEventListener("DOMContentLoaded",function () {
  
    //Cargar Partial de navegación
    $("#navbar-section").load("/templates/partials/_navigation.html", function () {
        //(Hecho por mi)
        document.querySelectorAll('.navbar a').forEach(link => {
            // Extrae solo el path de la URL del link y de la página actual
            const linkPath = new URL(link.href).pathname;
            const currentPath = window.location.pathname;
    
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    }); // Carga el contenido del archivo

    /*   
    // Pausar el video cuando se cambia de diapositiva (no hecho por mi)
    $('#myCarousel').on('slide.bs.carousel', function () {
        var activeSlide = $(this).find('.item.active iframe')[0];
        if (activeSlide) {
            activeSlide.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    });
    */ 
});