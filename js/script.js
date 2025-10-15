// ------------------------TODO-------------------//
function hamburgerMenu(){
    const hamburger_menu = document.querySelector(".navbar-vertical");
    if(hamburger_menu.classList.toggle("active")){
        hamburger_menu.classList.add("active");
    } else{
        hamburger_menu.classList.remove("active");
    }
    return hamburgerMenu
}

// ------------------------TODO-------------------//
// function hamburgerNav(){
//     const hamburger_navbar = document.querySelector(".hamburger_navbar");
//     if(hamburger_navbar.classList.toggle("active")){
//         hamburger_navbar.classList.add("active")
//     } else{
//         hamburger_navbar.classList.add("active")
//     }
//     return hamburgerNav
// }