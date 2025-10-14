// ------------------------TODO-------------------//
function hamburgerMenu(){
<<<<<<< HEAD
    const hamburger_menu = document.querySelector(".hamburger_menu");
    if(hamburger_menu.classList.toggle(".hamburger_menu")){
        hamburger_menu.classList.add(".hamburger_menu");
    } else{
        hamburger_menu.classList.remove(".hamburger_menu");
=======
    document.getElementsByClassName("hamburger_menu");
    if(document.getElementsByClassName("hamburger_menu") == "active"){
        classList.add(".hamburger_menu");
    } else{
        classList.remove(".hamburger_menu");
>>>>>>> parent of d8d83bb (updated: I changed tailwind to normal css and html, as i found that easier and less time comsuming)
    }
    return hamburgerMenu
}