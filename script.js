// Esperar a que todo el documento cargue
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LÓGICA PARA EL MODO OSCURO / CLARO
    const botonTema = document.getElementById("cambiar-tema");
    
    botonTema.addEventListener("click", () => {
        // Intercambia la clase 'modo-oscuro' en el body
        document.body.classList.toggle("modo-oscuro");
        
        // Cambia el texto del botón según el modo
        if (document.body.classList.contains("modo-oscuro")) {
            botonTema.textContent = "☀️ Modo Claro";
        } else {
            botonTema.textContent = "🌙 Modo Oscuro";
        }
    });

    // 2. LÓGICA PARA EL CONTADOR DE CLICS
    const botonContador = document.getElementById("boton-contador");
    const textoContador = document.getElementById("numero-contador");
    let clics = 0;

    botonContador.addEventListener("click", () => {
        clics++;
        textoContador.textContent = clics;
    });

});
