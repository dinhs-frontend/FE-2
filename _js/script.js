//-----------------hart animatie--------//
// var heart = document.querySelector("#heart");

// let angle = 0;
// let lastTime = null;
// function animate(time) {
//     if (lastTime != null) 
//         angle += (time - lastTime) * 0.001;
//     lastTime = time;
//     heart.style.top = (Math.sin(angle) * 80 + 40) + "px";
//     heart.style.left = (Math.cos(angle) * 100 + 1030) + "px";

//     requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

//------------------Dropdown---------------------------------------------//

// const buttons = document.querySelectorAll('.accordion__button');
// const contentSections = document.querySelectorAll('.accordion__content');

// //-------------------functie zorgt er voor dat button zal uitklappen--------//
// function setInitialAriaValue(elements, aria, ariaValue) {
//     elements.forEach((element) => {
//         element.setAttribute(`${aria}`, `${ariaValue}`);
//     });
// }
// //-------------handler--Laat button bewegen-----------//
// function accordionToggleHandler() {
//     buttons.forEach((button) => {
//         button.addEventListener('click', toggleContent);
//     });
// }
// //-------(Event = e)-----------------------//
// function toggleContent(e) {
//     toggleButton(e.target);
//     toggleDetails(e.target);
// }
// //--------------------------------------------------//
// function toggleButton(button) {
//     const expandedValue = button.getAttribute('aria-expanded');
//     const setValue = expandedValue === 'true'? 'false': 'true';
//     button.setAttribute('aria-expanded', setValue);
// }

// function toggleDetails(button) {
//     const buttonAriaControl = button.getAttribute('aria-controls');
//     const content = document.getElementById(buttonAriaControl);
//     const hiddenValue = content.getAttribute('aria-hidden');
//     const setValue = hiddenValue === 'true'? 'false': 'true';
//     content.setAttribute('aria-hidden', setValue);
// }

// //------------------button klapt uit-----//
// setInitialAriaValue(buttons, 'aria-expanded', 'false');
// //----------------button is vedwijnt, lijst is niet meer zich baar-----------//
// setInitialAriaValue(contentSections, 'aria-hidden', 'true');
// accordionToggleHandler();

//---------------------------------------------------------------------//

const  previousBtn  =  document.querySelector('.previousBtn');
const  nextBtn  =  document.querySelector('.nextBtn');

const firstField = document.querySelector('.field1');
const secondField = document.querySelector('.field2');
const thirdField = document.querySelector('.field3');
const form = document.querySelector('form');

function next() {
    firstField.classList.remove("hide");
    secondField.classList.add("hide");
    thirdField.classList.add("hide");
};

function previous () {
};


function over () {
    location.href='account.html';
};

nextBtn.addEventListener('click', next);
previousBtn.addEventListener('click', previous);

