const redButton = document.getElementById("red");
const grrenButton = document.getElementById("green");
const area = document.getElementById("area");
const input = document.getElementById("input");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underlin = document.getElementById("underline");
const line_through = document.getElementById("line_through");

input.value = "";

state = {
    isBoldActive : false,
    isItalicActive : false,
    isUnderlineActive : false,
    isLineThroughActive : false,
    isCapitalizeActive : false
}

const changeColor = color => () => {
    area.style.color = color;
} 

const changeFont = style => () => {
    if (style === "bold"){
        document.execCommand('bold',false,null);
    } else if(style === "italic"){
        document.execCommand('italic',false,null);
    } else if (style === "underline") {
        document.execCommand('underline',false,null);
    } else if(style === "line-through"){
        document.execCommand('strikethrough',false,null);
    }
} 

redButton.addEventListener("click", changeColor("#EC1C24"));
grrenButton.addEventListener("click", changeColor("#045530"));

bold.addEventListener("click", changeFont("bold"));
italic.addEventListener("click", changeFont("italic"));
underlin.addEventListener("click", changeFont("underline"));
line_through.addEventListener("click", changeFont("line-through"));

let span = document.createElement("span");

input.addEventListener("input", e => {
    span.textContent = e.target.value;
    area.appendChild(span);
});