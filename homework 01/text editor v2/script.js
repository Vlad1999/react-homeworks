const redButton = document.getElementById("red");
const grrenButton = document.getElementById("green");
const area = document.getElementById("area");
const input = document.getElementById("input");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underlin = document.getElementById("underline");
const line_through = document.getElementById("line_through");
const capitalize = document.getElementById("capitalize");

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
        if(state.isBoldActive === false){
            bold.style.backgroundColor = "#404040";
            area.style.fontWeight = style;
        } else {
            bold.style.backgroundColor = "#d9d9d9";
            area.style.fontWeight = "normal";
        }  
        state.isBoldActive =  !state.isBoldActive;
    } else if(style === "italic"){
        if(state.isItalicActive === false){
            italic.style.backgroundColor = "#404040";
            area.style.fontStyle = style;
        } else {
            italic.style.backgroundColor = "#d9d9d9";
            area.style.fontStyle = "normal";
        }
        state.isItalicActive = !state.isItalicActive;
    } else if (style === "underline") {
        if(state.isUnderlineActive === false){
            area.style.textDecoration = style;
            underlin.style.backgroundColor = "#404040";
            line_through.style.backgroundColor = "#d9d9d9";
        } else {
            underlin.style.backgroundColor = "#d9d9d9";
            area.style.textDecoration = "none";
        }
        state.isLineThroughActive = false;
        state.isUnderlineActive = !state.isUnderlineActive;
    } else if(style === "line-through"){
        if(state.isLineThroughActive === false){
            area.style.textDecoration = style;
            line_through.style.backgroundColor = "#404040";
            underlin.style.backgroundColor = "#d9d9d9";
        } else {
            line_through.style.backgroundColor = "#d9d9d9";
            area.style.textDecoration = "none";
        }
        state.isUnderlineActive = false;
        state.isLineThroughActive = !state.isLineThroughActive;
    } else if(style === "capitalize"){
        if(state.isCapitalizeActive === false){
            area.style.textTransform = style;
            capitalize.style.backgroundColor = "#404040";
        } else {
            area.style.textTransform = "none";
            capitalize.style.backgroundColor = "#d9d9d9";
        }
        state.isCapitalizeActive = !state.isCapitalizeActive;
    }
} 

redButton.addEventListener("click", changeColor("#EC1C24"));
grrenButton.addEventListener("click", changeColor("#045530"));
bold.addEventListener("click", changeFont("bold"));
italic.addEventListener("click", changeFont("italic"));
underlin.addEventListener("click", changeFont("underline"));
line_through.addEventListener("click", changeFont("line-through"));
capitalize.addEventListener("click", changeFont("capitalize"));

let span = document.createElement("span");

input.addEventListener("input", e => {
    span.textContent = e.target.value;
    area.appendChild(span);
});

