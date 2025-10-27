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

// Add to Cart Btn For Card 1
function addToCart() {
  let add = document.querySelector(".add_button");
  let clear = document.querySelector(".clear_button");
  let remove = document.querySelector(".subtract_button");
  let paragraph_update = document.querySelector(".paragraph_text");
  let price_text = document.querySelector(".price_text");
  let quanity_text = document.querySelector(".quanity_text");
  let quanity = Number(1);
  let price = (Math.round(Number(12.99)));
  let count = 0;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }
}

// Add to Cart Btn For Card 2
function Cart() {
  let add = document.querySelector(".add-button");
  let clear = document.querySelector(".clear-button");
  let remove = document.querySelector(".subtract-button");
  let paragraph_update = document.querySelector(".paragraph-text");
  let price_text = document.querySelector(".price-text");
  let quanity_text = document.querySelector(".quanity-text");
  let quanity = Number(1);
  let price = (Math.round(Number(12.99)));
  let count = 0;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }
}

// Add to Cart Btn For Card 3
function Carts() {
  let add = document.querySelector(".add__button");
  let clear = document.querySelector(".clear__button");
  let remove = document.querySelector(".subtract__button");
  let paragraph_update = document.querySelector(".paragraph__text");
  let price_text = document.querySelector(".price__text");
  let quanity_text = document.querySelector(".quanity__text");
  let quanity = Number(1);
  let price = (Math.round(Number(12.99)));
  let count = 0;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
    paragraph_update.innerHTML = `Items Added: ${count}`;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }
}

// The js code can provide functionality to create a variable for ScrollReveal animations
let scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Animations with Swipper Libbary
window.onload = function () {
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

  // The js code can provide functionality to reveal sections with ScrollReveal for .name
  ScrollReveal().reveal(".name", {
    ...scrollRevealOption,
  })
  // The js code can provide functionality to reveal sections with ScrollReveal for .name__input
  ScrollReveal().reveal(".name__Input", {
    ...scrollRevealOption,
  })

  // The js code can provide functionality to reveal sections with ScrollReveal for .date
  ScrollReveal().reveal(".date", {
    ...scrollRevealOption,
  })

  // The js code can provide functionality to reveal sections with ScrollReveal for .date__input
  ScrollReveal().reveal(".date__input", {
    ...scrollRevealOption,
  })

  // The js code can provide functionality to reveal sections with ScrollReveal for .income
  ScrollReveal().reveal(".income", {
    ...scrollRevealOption,
  })

  // The js code can provide functionality to reveal sections with ScrollReveal for .input__income
  ScrollReveal().reveal(".income__input", {
    ...scrollRevealOption,
  })


  // The js code can provide functionality to reveal sections with ScrollReveal for .section_product_section_card
  ScrollReveal().reveal(".section_product_section_card", {
    ...scrollRevealOption,
  })

  // The js code can provide functionality to reveal sections with ScrollReveal for .paragraph_heading
  ScrollReveal().reveal(".paragraph_heading", {
    ...scrollRevealOption,
  });

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
