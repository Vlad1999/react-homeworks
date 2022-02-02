let navLinks = document.getElementById("navLinks");
let menuIcon = document.querySelector(".fa-bars");

function showMenu(){
    navLinks.style.right = "0";
    setTimeout(() => {
        menuIcon.style.opacity = "0";
    }, 75);

}
function hideMenu(){
    navLinks.style.right = "-200px";
    setTimeout(() => {
        menuIcon.style.opacity = "1";
    }, 500);

}