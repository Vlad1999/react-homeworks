const body = document.querySelector("body")
const changeColor = document.getElementById("changeColor")

const colors = ["#91F57F", "#797294", "#D9048E", "#00A1E9", "#D93DCE", "#EEC255", "#F23A29", "#2C5FF6", "#A5AAA3", "#26D49C"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

changeColor.addEventListener("click", e => body.style.backgroundColor = colors[getRandomInt(0,10)]);