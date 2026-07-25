document.addEventListener("DOMContentLoaded", 
    function() {
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Nuevos horarios de Idiomas disponibles";
        
        console.log("Mensaje:", mensaje);

        const link = document.getElementById("link");
        link.textContent = "Portal de Idiomas";
        link.href= "https://www.google.com";
        link.classList.add("boton");
        console.log("Link", link);
    });