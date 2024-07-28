const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
// Función para establecer el estado inicial
function initializeSettings() {
    // Recuperar el estado del localStorage
    const mode = localStorage.getItem('mode');
    const sidebarState = localStorage.getItem('sidebarState');

    // Aplicar el modo
    if (mode === 'dark') {
        body.classList.add("dark");
        modeText.innerText = "Light Mode";
    } else {
        body.classList.remove("dark");
        modeText.innerText = "Dark Mode";
    }

    // Aplicar el estado de la barra lateral
    if (sidebarState === 'closed') {
        sidebar.classList.add("close");
    } else {
        sidebar.classList.remove("close");
    }
}

// Ejecutar la función para configurar el estado inicial
initializeSettings();

// Event listener para la barra lateral
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    // Guardar el estado en localStorage
    localStorage.setItem('sidebarState', sidebar.classList.contains("close") ? 'closed' : 'open');
});

// Event listener para el modo oscuro/claro
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
    // Guardar el estado en localStorage
    localStorage.setItem('mode', body.classList.contains("dark") ? 'dark' : 'light');
});
