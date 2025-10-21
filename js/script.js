// Asim Mian
// BSc Web and Mobile Development (Year 3)
// 15/10/2025 

// Try to futher fix Asim!!!!
// Hamburger Menu
function hamburgerMenu() {
    let hamburger_menu = document.querySelector(".div_navbar_vertical");
    if (hamburger_menu.classList.toggle("active")) {
        hamburger_menu.classList.add("active");
    } else {
        hamburger_menu.classList.remove("active");
    }
    return hamburgerMenu;
}
// Need to fix this futher
function addName() {
    document.querySelector(".main_button").onclick = function () {
        let name = document.querySelector(".name__Input").value;
        let date = document.querySelector(".date__input").value;
        let income = document.querySelector(".income__input").value;
        let result = document.querySelector(".paragraph_text");

        result = result.innerHTML = `Added Persons:\n Name: ${name}, Date: ${date}, Amount: £${income}`;
        result = localStorage.setItem(`${name} ${date}`);
        result = localStorage.getItem(`${name} ${date}`);
        console.log(name, date);
        document.writeln(name, date);
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
// Add to Cart Btn
function addToCart() {
    let add = document.querySelector(".add_button")
    let clear = document.querySelector(".clear_button")
    let remove = document.querySelector(".subtract_button")
    let paragraph_update = document.querySelector(".paragraph-text");
    let count = 0;

    add.onclick = function () {
        count = count + 1;
        paragraph_update.innerHTML = `Items Added: ${count}`;
    }

    clear.onclick = function () {
        count = count = 0;
        paragraph_update.innerHTML = `Items Cleared: ${count}`;
    }

    remove.onclick = function () {
        count = count - 1;
        paragraph_update.innerHTML = `Items Removed: ${count}`;
    }
}
