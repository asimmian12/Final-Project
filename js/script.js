// ------------------------TODO-------------------//
function hamburgerMenu(){
    const hamburger_menu = document.querySelector(".hamburger_menu");
    if(hamburger_menu.classList.toggle("active")){
        hamburger_menu.classList.add("active");
    } else{
        hamburger_menu.classList.remove("active");
    }
    return hamburgerMenu
}