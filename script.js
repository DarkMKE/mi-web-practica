function lanzarDado() {
    // Generate a random number between 1 and 6
    const resultado = Math.floor(Math.random() * 6) + 1;
    // Display the result in the div
    document.querySelector('div').textContent = resultado;
}
