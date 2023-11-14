function toggleTheme() {
    bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("dark-mode");
}

buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;