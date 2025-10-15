// Asim Mian
// BSc Web and Mobile Development (Year 3)
// 15/10/2025 

// ------------------------TODO-------------------//
function hamburgerMenu(){
    var hamburger_menu = document.querySelector(".div_navbar_vertical");
    if(hamburger_menu.classList.toggle("active")){
        hamburger_menu.classList.add("active");
    } else{
        hamburger_menu.classList.remove("active");
    }
    return hamburgerMenu;
}
