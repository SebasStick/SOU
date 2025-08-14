function validarDatos() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensajeError = document.getElementById("mensaje-error");

    if (nombre === "" || correo === "") {
        mensajeError.textContent = "Por favor llena todos los campos.";
        return;
    }

    if (!correo.includes("@")) {
        mensajeError.textContent = "Por favor ingresa un correo válido.";
        return;
    }

    // Ocultar formulario y mostrar contenido
    document.getElementById("formulario-container").style.display = "none";
    document.getElementById("contenido").style.display = "block";

    // Mostrar el nombre del usuario
    document.getElementById("nombre-usuario").textContent = nombre;

    // Activar evento del botón continuar
    document.getElementById("btnContinuar").onclick = function() {
        document.getElementById("fondo-presentacion").style.display = "none";
        document.getElementById("menu-navegacion").style.display = "block";
        document.getElementById("menu-tutoriales").style.display = "block";
    };
}

document.getElementById("btnContinuar").addEventListener("click", function () {
    // Mostrar el menú de navegación
    document.getElementById("menu-navegacion").style.display = "block";
    
    // Ocultar el fondo de presentación
    document.getElementById("fondo-presentacion").style.display = "none";
    
    // Mostrar el contenido debajo del menú
    var menuTutoriales = document.getElementById("menu-tutoriales");
    if (menuTutoriales) menuTutoriales.style.display = "block";
    // Mostrar la sección de tarjetas-gif
    var tarjetasGif = document.querySelector('.tarjetas-gif');
    if (tarjetasGif) tarjetasGif.style.display = "flex";
});

// Asignar funcionalidad de abrir nueva pestaña al hacer clic en cada tarjeta
document.addEventListener("DOMContentLoaded", function () {
    var tarjetas = document.querySelectorAll('.tarjetas-gif .tarjeta');
    var urls = [
        'tips.html',        // Consejos y Tips
        'comunidad.html',   // Comunidad (si tienes esta página, si no, pon la url que corresponda)
        'tutoriales.html'   // Tutoriales
    ];
    tarjetas.forEach(function(tarjeta, i) {
        tarjeta.style.cursor = 'pointer';
        tarjeta.addEventListener('click', function() {
            window.open(urls[i], '_blank');
        });
    });
});