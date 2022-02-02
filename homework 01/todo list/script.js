const list = document.getElementById("todo");

list.addEventListener("click", e => {
    if(e.target.previousSibling.previousSibling === null){
        e.target.style.textDecoration = "line-through";
    } else if(e.target.previousSibling.previousSibling.style.textDecoration === "line-through"){
        e.target.style.textDecoration = "line-through";
    }
});

