// Función para cambiar la imagen principal de la galería
function grande(imagenSrc) {
    document.getElementById("grande").src = imagenSrc;
}

// Evento para mostrar el formulario según el sexo seleccionado
document.addEventListener("DOMContentLoaded", function() {
    const selectorSexo = document.getElementById("sexo");
    const formHombre = document.getElementById("form-hombre");
    const formMujer = document.getElementById("form-mujer");

    selectorSexo.addEventListener("change", function() {
        if (selectorSexo.value === "hombre") {
            formHombre.style.display = "block";
            formMujer.style.display = "none";
        } else if (selectorSexo.value === "mujer") {
            formHombre.style.display = "none";
            formMujer.style.display = "block";
        } else {
            formHombre.style.display = "none";
            formMujer.style.display = "none";
        }
    });
});
