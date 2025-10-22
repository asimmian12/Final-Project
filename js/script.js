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
    let paragraph_update = document.querySelector(".paragraph_text");
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

// The js code can provide functionality to create a variable for ScrollReveal animations
let scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Animations with Swipper Libbary
window.onload = function (){
// The js code can provide functionality to reveal sections with ScrollReveal for .div_navbar_horizontal
ScrollReveal().reveal(".div_navbar_horizontal", {
  ...scrollRevealOption,
});

// The js code can provide functionality to reveal sections with ScrollReveal for .div_layout
ScrollReveal().reveal(".div_layout", {
  ...scrollRevealOption,
});

// The js code can provide functionality to reveal sections with ScrollReveal for .div_navbar_vertical
ScrollReveal().reveal(".div_navbar_vertical", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .hamburger_menu
ScrollReveal().reveal(".hamburger_menu", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section_about_us
ScrollReveal().reveal(".section_about_us", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section_card
ScrollReveal().reveal(".section_card", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section_skills
ScrollReveal().reveal(".section_skills", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for ..section__journey
ScrollReveal().reveal(".section__journey", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section_uws_question
ScrollReveal().reveal(".section_uws_question", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .main_button
ScrollReveal().reveal(".main_button", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .textarea_uws_question
ScrollReveal().reveal(".textarea_uws_question", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .paragraph_text
ScrollReveal().reveal(".paragraph_text", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section__forms
ScrollReveal().reveal(".section__forms", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .buttons
ScrollReveal().reveal(".buttons", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .div__paragraph__results
ScrollReveal().reveal(".div__paragraph__results", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section_orders
ScrollReveal().reveal(".section_orders", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .section_product_section_card
ScrollReveal().reveal(".section_product_section_card", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .footer__paragraph__text
ScrollReveal().reveal(".footer__paragraph__text", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .footer__paragraph__text__social__links
ScrollReveal().reveal(".footer__paragraph__text__social__links", {
  ...scrollRevealOption,
})

// The js code can provide functionality to reveal sections with ScrollReveal for .footer__paragraph__text__copyright
ScrollReveal().reveal(".footer__paragraph__text__copyright", {
  ...scrollRevealOption,
})
};
