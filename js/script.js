// Asim Mian
// BSc Web and Mobile Development (Year 3)
// 15/10/2025 

// Try to futher fix Asim!!!!
// Hamburger Menu
function hamburgerMenu(){
    let hamburger_menu = document.querySelector(".div_navbar_vertical");
    if(hamburger_menu.classList.toggle("active")){
        hamburger_menu.classList.add("active");
    } else{
        hamburger_menu.classList.remove("active");
    }
    return hamburgerMenu;
}

// Orignal - I made a function that can uws as character with spaces in mind, i'll modify this to only count uws
// function Paragraph_UWS(){
//     let textarea = document.querySelector(".textarea_uws_question");
//     let y = textarea.value.lastIndexOf("uws");
//     let result = document.querySelector(".resultDiv");
//     result.innerHTML = `Result: ${y}`;    
// }

// Modified to search through the string for checking conditions; if it has 'uws' anywhere in paragraph
function Paragraph_UWS() {
    let textarea = document.querySelector(".textarea_uws_question");
    let y = textarea.value.lastIndexOf("uws");
    let result = document.querySelector(".resultDiv");
    result.innerHTML = `Result: ${y}`;
    for (let y = 0; y < textarea.value.length; y++) {
        if (y < textarea.value.length) {
            let score = textarea.value.substring(y, y + 3);
            console.log(score);
            score = result.innerHTML;
        }
    }
}
