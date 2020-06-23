//-----------------hart animatie--------//
var heart = document.querySelector("#heart");

let angle = 0;
let lastTime = null;
function animate(time) {
    if (lastTime != null) 
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    heart.style.top = (Math.sin(angle) * 80 + 40) + "px";
    heart.style.left = (Math.cos(angle) * 100 + 1030) + "px";

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

//------------------Dropdown---------------------------------------------//

const buttons = document.querySelectorAll('.accordion__button');
const contentSections = document.querySelectorAll('.accordion__content');

//-------------------functie zorgt er voor dat button zal uitklappen--------//
function setInitialAriaValue(elements, aria, ariaValue) {
    elements.forEach((element) => {
        element.setAttribute(`${aria}`, `${ariaValue}`);
    });
}
//-------------handler--Laat button bewegen-----------//
function accordionToggleHandler() {
    buttons.forEach((button) => {
        button.addEventListener('click', toggleContent);
    });
}
//-------(Event = e)-----------------------//
function toggleContent(e) {
    toggleButton(e.target);
    toggleDetails(e.target);
}
//---------------//
function toggleButton(button) {
    const expandedValue = button.getAttribute('aria-expanded');
    const setValue = expandedValue === 'true'? 'false': 'true';
    button.setAttribute('aria-expanded', setValue);
}

function toggleDetails(button) {
    const buttonAriaControl = button.getAttribute('aria-controls');
    const content = document.getElementById(buttonAriaControl);
    const hiddenValue = content.getAttribute('aria-hidden');
    const setValue = hiddenValue === 'true'? 'false': 'true';
    content.setAttribute('aria-hidden', setValue);
}

//------------------button klapt uit-----//
setInitialAriaValue(buttons, 'aria-expanded', 'false');
//----------------button is vedwijnt, lijst is niet meer zich baar-----------//
setInitialAriaValue(contentSections, 'aria-hidden', 'true');
accordionToggleHandler();

//-------bron------//
// https://codepen.io/corinneling/pen/LwRyXO
// https://eloquentjavascript.net/15_event.html#c_+CX2XtmsmE