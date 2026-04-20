const button = document.getElementById("themeBtn");

if (button) {
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}
