// Asim Mian
// BSc Web and Mobile Development (Year 3)
// 15/10/2025 

// TODO: Try to futher fix Asim!!!!
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

// TODO: Need to fix this Class futher
// class Person {
//   constructor(name, birthday, income) {
//     this.name = name;
//     this.birthday = birthday;
//     this.income = income;
//   }
// }

// let persons = [
//   new Person((document.getElementById("name__Input").value)),
//   new Person((document.getElementById("date__input").value)),
//   new Person((document.getElementById("income__input").value)),
// ];

// let person1 = new Person("Asim", "30/12/02", "30");
// let person2 = new Person("Asim", "30/12/02", "30");
// let person3 = new Person("Asim", "30/12/02", "30");

// for (let i = 0; i < persons.length; i++) {
//   let p = persons[i];
//   console.log(p);
// }

// document.getElementById("birthday").onclick = function (name, birthday, income, a, b) {
//   name = document.getElementById("name__Input").value;
//   birthday = document.getElementById("date__input").value;
//   income = document.getElementById("income__input").value;
//   let result = document.getElementById("paragraph_text");
//   result.innerHTML = result.sort(a, b);
//   return a.birthday - b.birthday;
// }

// document.getElementById("income").onclick = function (name, birthday, income, a, b) {
//   name = document.getElementById("name__Input").value;
//   birthday = document.getElementById("date__input").value;
//   income = document.getElementById("income__input").value;
//   let result = document.getElementById("paragraph_text");
//   result.innerHTML = result.sort(a, b);
//   return a.income - b.income;
// }

// function add_person() {
//   document.getElementById("add_person").onclick = function () {
//     let name = document.getElementById("name__Input").value;
//     let birthday = document.getElementById("date__input").value;
//     let income = document.getElementById("income__input").value;
//     let result = document.getElementById("paragraph_text");
//     result.innerHTML = (`Added Person: Name: ${name}, Date: ${birthday}, Income: ${income}`);
//   }
// }

// window.onload = function () {
//   add_person();
// }


// TODO: Modified to use with a for loop to search through the string for checking conditions; if it has 'uws' anywhere in paragraph
function Paragraph_UWS() {
  let textarea = document.querySelector(".textarea_uws_question");
  let result = document.querySelector(".resultDiv");
  let letter = textarea.value;
  result.innerHTML = `${letter}`;
  // for (let i = 0; i < letter[i].length; i++) {
  //   let test = letter[i];
  //   console.log(test);
  //   result.innerHTML = `${test}`;
  // }
}

// Add to Cart Btn For Card 1
function addToCart() {
  let add = document.querySelector(".add_button");
  let clear = document.querySelector(".clear_button");
  let remove = document.querySelector(".subtract_button");
  let price_text = document.querySelector(".price_text");
  let quanity_text = document.querySelector(".quanity_text");
  let quanity = Number(1);
  let price = (Math.round(Number(12.99)));
  let count = 0;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }
}

// Add to Cart Btn For Card 2
function Cart() {
  let add = document.querySelector(".add-button");
  let clear = document.querySelector(".clear-button");
  let remove = document.querySelector(".subtract-button");
  let price_text = document.querySelector(".price-text");
  let quanity_text = document.querySelector(".quanity-text");
  let quanity = Number(1);
  let price = (Math.round(Number(12.99)));
  let count = 0;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }
}

// Add to Cart Btn For Card 3
function Carts() {
  let add = document.querySelector(".add__button");
  let clear = document.querySelector(".clear__button");
  let remove = document.querySelector(".subtract__button");
  let price_text = document.querySelector(".price__text");
  let quanity_text = document.querySelector(".quanity__text");
  let quanity = Number(1);
  let price = (Math.round(Number(12.99)));
  let count = 0;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;
  }

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
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
