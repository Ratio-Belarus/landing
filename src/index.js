import "normalize.css";
import "@styles";

let buttons = document.querySelectorAll(".button");

for (let button of buttons) {
    button.addEventListener("mouseover", function () {
        button.classList.toggle("button_active")
    });
    button.addEventListener("mouseout", function () {
        button.classList.toggle("button_active");
    });
}