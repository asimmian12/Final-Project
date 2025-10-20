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
// Need to fix this futher
function addName(){
    document.getElementById("main_button").onclick = function(){
    let name = document.getElementById("name__Input").value;
    let date = document.getElementById("date__input").value;
    let income = document.getElementById("income__input").value;
    let result = document.getElementById("paragraph_text");
    result = result.innerHTML = `Added Persons:\n Name: ${name}, Date: ${date}, Amount: £${income}`;
    result = localStorage.setItem(result);
    result = localStorage.getItem(result);
    console.log(result);
    document.writeln(result);
}
}

// Modified to use with a for loop to search through the string for checking conditions; if it has 'uws' anywhere in paragraph
function Paragraph_UWS() {
    let textarea = document.querySelector(".textarea_uws_question");
    let letter = textarea.value.lastIndexOf("uws");
    let result = document.querySelector(".resultDiv");
    result.innerHTML = `Result: ${letter}`;
    // for (let letter = 0; letter < textarea.value.length; letter++) {
    //     if (letter < textarea.value.length) {
    //         let score = textarea.value.substring(letter, letter + 3);
    //         console.log(score);
    //         score = result.innerHTML;
    //     }
    // }
}