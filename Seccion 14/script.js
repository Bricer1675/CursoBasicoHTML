// Esperamos a que la página cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionamos el botón por su ID
    const button = document.getElementById('changeTextButton');

    // Seleccionamos la sección donde vamos a cambiar el texto
    const introSection = document.getElementById('intro');

    // Agregamos un evento al botón que escucha los clics
    button.addEventListener('click', function () {
        // Cambia el contenido dentro de la sección "intro"
        introSection.innerHTML = `
            <h2>¡Texto cambiado!</h2>
            <p>Has hecho clic en el botón y ahora este texto ha cambiado dinámicamente.</p>
            <button id="resetButton">Restaurar texto</button>
        `;

        // Agregamos un botón para restaurar el texto original
        const resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', function () {
            introSection.innerHTML = `
                <h2>Interacción con JavaScript</h2>
                <p>Esta es una página web básica donde aplicamos etiquetas HTML, enlaces, menús y JavaScript.</p>
                <button id="changeTextButton">Haz clic para cambiar el texto</button>
            `;

            // Reasignamos la función del botón para que siga funcionando
            document.getElementById('changeTextButton').addEventListener('click', arguments.callee);
        });
    });
});