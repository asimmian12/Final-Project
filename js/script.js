// ------------------------TODO-------------------//
function hamburgerMenu(){
    const hamburger_menu = document.querySelector(".hamburger_menu");
    if(hamburger_menu.classList.toggle(".hamburger_menu")){
        hamburger_menu.classList.add(".hamburger_menu");
    } else{
        hamburger_menu.classList.remove(".hamburger_menu");
    }
    return hamburgerMenu
}