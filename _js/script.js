
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

// //button klapt uit-------------------------------------//
// setInitialAriaValue(buttons, 'aria-expanded', 'false');
// //----------------button is vedwijnt, lijst is niet meer zich baar-----------//
// setInitialAriaValue(contentSections, 'aria-hidden', 'true');
// accordionToggleHandler();

//-einde------------------------------------------------------------------------//

//-Account Form----------------------------------------------------------------//

const field1 = document.querySelector('.field1');
const field2 = document.querySelector('.field2');
const field3 = document.querySelector('.field3');
const progress1 = document.querySelector('.progress1');
const progress2 = document.querySelector('.progress2');
const progress3 = document.querySelector('.progress3');
const logo_container = document.querySelector('#logo_container');

// Verberg 'field2' en 'field3' on load.
field2.classList.add('hide');
field3.classList.add('hide');
progress1.classList.add('current_progress')

// let logo = document.createElement('img');
// logo.setAttribute('src', '_img/logo.svg');
// logo.setAttribute('alt', 'Lufmi');
// logo_container.appendChild(logo);
// console.log(logo);

// Field1 ------------------------------------------------------------------------------//
// Aanmaken van de 'next' knop op field1.
const next_btn1 = document.createElement('button'); // Creeer een DOM element 'button'.
field1.appendChild(next_btn1); // Plaats de DOM element in 'field1'.
next_btn1.innerHTML = 'Next'; // Hier vul je de content van de DOM element in.

next_btn1.onclick = function() {

    field1.classList.add('hide');
    field2.classList.remove('hide');
    progress1.classList.remove('current_progress');
    progress2.classList.add('current_progress');
}
// End Field1 --------------------------------------------------------------------------//


// Field2 ------------------------------------------------------------------------------//
// Aanmaken van de 'next' en 'previous' knoppen op field2.
const previous_btn2 = document.createElement('button');
field2.appendChild(previous_btn2);
previous_btn2.innerHTML = 'Previous';

previous_btn2.onclick = function() {
    field2.classList.add('hide');
    field1.classList.remove('hide');
    progress2.classList.remove('current_progress');
    progress1.classList.add('current_progress');
}

const next_btn2 = document.createElement('button');
field2.appendChild(next_btn2);
next_btn2.innerHTML = 'Next';

next_btn2.onclick = function() {
    field2.classList.add('hide');
    field3.classList.remove('hide');
    progress2.classList.remove('current_progress');
    progress3.classList.add('current_progress');
}
// End Field2 --------------------------------------------------------------------------//


// Field3 ------------------------------------------------------------------------------//
// Aanmaken van de 'previous' knoppen op field3.
const previous_btn3 = document.createElement('button');
field3.appendChild(previous_btn3);
previous_btn3.innerHTML = 'Previous';

previous_btn3.onclick = function() {
    field2.classList.remove('hide');
    field3.classList.add('hide');
    progress3.classList.remove('current_progress');
    progress2.classList.add('current_progress');
}

// Verwijderen en toevoegen van de 'submit' knop, zodat de 'submit' knop aan de rechter
// kant van de previous button zit.
let remove_submit = document.querySelector('.submit');
remove_submit.parentNode.removeChild(remove_submit);

const add_submit = document.createElement('button');
field3.appendChild(add_submit);

add_submit.setAttribute('type', 'submit');
add_submit.innerHTML = 'Submit';
add_submit.onclick = function() {
    document.location.replace('index.html');
}
// End Field3 ---------------------------------------------------------------------//

//Bronnen: 
//Developer.mozilla. (z.d.). GlobalEventHandlers.onclick. Geraadpleegd van https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
//Developer.mozilla. (z.d.). Node.appendChild (). Geraadpleegd van https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
