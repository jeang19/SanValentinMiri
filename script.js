const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("question");
const catImage = document.getElementById("catImage");

const images = ["gatito1.jpg", "gatito2.jpg", "gatito3.jpg", "gatito4.jpg", "gatito5.jpg"];
let clickCount = 0;

noButton.addEventListener("click", () => {
    if (clickCount < images.length - 1) {
        catImage.src = images[clickCount + 1];
        clickCount++;

        // Hace el botón "Sí" más grande
        yesButton.style.transform = `scale(${1 + clickCount * 0.2})`;

        // Última iteración, oculta el botón "No"
        if (clickCount === images.length - 1) {
            noButton.remove();
        }
    }
});

yesButton.addEventListener("click", () => {
    question.innerHTML = "¡Gracias, mi amor! 💖";
    catImage.src = "corazon.jpg"; // Imagen final
    yesButton.remove();
    noButton.remove();
});
