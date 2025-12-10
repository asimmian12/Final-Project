// Asim Mian
// BSc Web and Mobile Development (Year 3)
// 15/10/2025

// Hamburger Menu
function hamburgerMenu() {
  let hamburger_menu = document.querySelector(".hamburger_menu");
  let hamburger_navbar = document.querySelector(".hamburger_navbar");
  if (hamburger_menu.classList.toggle("active")) {
    if (hamburger_navbar.classList.toggle("active")) {
      hamburger_navbar.classList.add("active");
      hamburger_menu.classList.add("active");
    }
  } else {
    hamburger_menu.classList.remove("active");
    hamburger_navbar.classList.remove("active");
  }
  return hamburgerMenu;
}

// Old Hamburger Menu
// function hamburgerMenu() {
//   let hamburger_menu = document.querySelector(".hamburger_menu");
//   if (hamburger_menu.classList.toggle("active")) {
//     hamburger_menu.classList.add("active");
//   } else {
//     hamburger_menu.classList.remove("active");
//   }
//   return hamburgerMenu;
// }

// TODO: Minor Bugs for Class, but it works, nonetheless
class Person {
  constructor(name, birthday, income) {
    this.name = name;
    this.birthday = birthday;
    this.income = income;
  }
}

let persons = [];
let result = document.getElementById("paragraph_text");
function comparePeople() {
  let rest = new Person(
    document.getElementById("name").value,
    parseInt(document.getElementById("birthday").value),
    parseInt(document.getElementById("income").value)
  );
  persons.push(rest);

  for (let i = 0; i < persons.length; i++) {
    console.log(persons);
    result.innerHTML += `<ul class="section__results"> <li id="paragraph_text"> Name: ${persons[i].name}` + ` Birthday: ${persons[i].birthday}` + ` Income: ${persons[i].income}</li> </ul>`;
  }
}

function sortByBirthday() {
  persons.sort(function (a, b) {
    return a.birthday - b.birthday;
  });

  let highest = persons[0];
  let lowest = persons[persons.length - 1];
  result.innerHTML +=
    `<ul class="section__results"` +
    ` <li id="paragraph_text">` +
    " Highest: " +
    " Name: " +
    highest.name +
    " Birthday: " +
    highest.birthday +
    " Income: " +
    highest.income +
    " Lowest  " +
    " Name: " +
    lowest.name +
    " Birthday: " +
    lowest.birthday +
    " Income: " +
    lowest.income +
    `</li>`;
  result.innerHTML +=
    `<ul class="section__results"` +
    `<li id="paragraph_text">` +
    " Highest: " +
    " Name: " +
    highest.name +
    " Birthday: " +
    highest.birthday +
    " Income: " +
    highest.income +
    " Lowest  " +
    " Name: " +
    lowest.name +
    " Birthday: " +
    lowest.birthday +
    " Income: " +
    lowest.income +
    `</li>`;
}

function sortByIncome() {
  persons.sort(function (a, b) {
    return b.income - a.income;
  });

  let highest = persons[0];
  let lowest = persons[persons.length - 1];
  result.innerHTML +=
    `<ul class="section__results"` +
    `<li id="paragraph_text">` +
    " Highest: " +
    " Name: " +
    highest.name +
    " Birthday: " +
    highest.birthday +
    " Income: " +
    highest.income +
    " Lowest  " +
    " Name: " +
    lowest.name +
    " Birthday: " +
    lowest.birthday +
    " Income: " +
    lowest.income +
    `</li>`;
}

// TODO: Modified to use with a for loop to search through the string for checking conditions; if it has 'uws' anywhere in paragraph
function Paragraph_UWS() {
  let textarea = document.querySelector(".textarea_uws_question");
  let result = document.querySelector(".resultDiv");
  let letter = textarea.value;
  for (let i = 0; i < letter.length; i++) {
    if (letter.replaceAll(" ")) {
      let test = Number(letter.length - letter.lastIndexOf("uws"));
      result.innerHTML = `Found Last Occurrence of UWS at line: ${test}`;
      console.log(`Found Last Occurrence of UWS at line: ${test}`);
    }
  }
}

// Add to Cart Btn For Card 1
function addToCart() {
  let add = document.querySelector(".add-button");
  let clear = document.querySelector(".clear-button");
  let remove = document.querySelector(".subtract-button");
  let price_text = document.querySelector(".price-text");
  let quanity_text = document.querySelector(".quanity-text");
  let quanity = Number(1);
  let price = Math.round(Number(12.99));
  let count = 0;

  let total_price = document.querySelector(".final-price");
  let final_price;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 12.99;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };
}

// Add to Cart Btn For Card 2
function Cart() {
  let add = document.querySelector(".add_button");
  let clear = document.querySelector(".clear_button");
  let remove = document.querySelector(".subtract_button");
  let price_text = document.querySelector(".price_text");
  let quanity_text = document.querySelector(".quanity_text");
  let quanity = Number(1);
  let price = Math.round(Number(14.00));
  let count = 0;

  let total_price = document.querySelector(".final_price");
  let final_price;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 14.00;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 14.00;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };
}

// Add to Cart Btn For Card 3
function Carts() {
  let add = document.querySelector(".add__button");
  let clear = document.querySelector(".clear__button");
  let remove = document.querySelector(".subtract__button");
  let price_text = document.querySelector(".price__text");
  let quanity_text = document.querySelector(".quanity__text");
  let quanity = Number(1);
  let price = Math.round(Number(35.31));
  let count = 0;

  let total_price = document.querySelector(".final__price");
  let final_price;

  add.onclick = function () {
    count = count + 1;
    quanity = quanity + 1;
    price = price + 35.31;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };

  clear.onclick = function () {
    count = count = 0;
    quanity = quanity = 0;
    price = price = 0;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };

  remove.onclick = function () {
    count = count - 1;
    quanity = quanity - 1;
    price = price - 35.31;
    price_text.innerHTML = `Price is: £${price}`;
    quanity_text.innerHTML = `Quanity is: ${quanity}`;

    final_price = Math.round(price * quanity);
    total_price.innerHTML = `Final Price: ${final_price}`;
  };
}

let scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Animations with Swiper Library
window.onload = function () {
  ScrollReveal().reveal(".div_navbar_horizontal", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".div_layout", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".div_navbar_vertical", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".hamburger_menu", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section_about_us", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section_card", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section_skills", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section__journey", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section_uws_question", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".main_button", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".textarea_uws_question", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".paragraph_text", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section__forms", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".buttons", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".div__paragraph__results", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section_orders", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".name", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".name__Input", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".date", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".date__input", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".income", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".income__input", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section_product_section_card", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".paragraph_heading", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".footer__paragraph__text", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".footer__paragraph__text__social__links", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".footer__paragraph__text__copyright", {
    ...scrollRevealOption,
  });
};
