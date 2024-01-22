//VARIABLES
let punctuation = 0;
let card = 0;
const buttongivemeacard = document.getElementById("givemeacard");
const buttonshowcard = document.getElementById("showcard");
const result = document.getElementById("result");

//FUNCTIONS
function showPunctuation () {
    if (result !== null && result !== undefined && result instanceof HTMLHeadingElement) {
        punctuation;
    }
};
showPunctuation()

function givemeacard () {
    const min = 1;
    const max = 10;
    let cardgenerator = Math.floor(Math.random() * (max - min + 1) + min);
    if (cardgenerator > 7) {
        cardgenerator = cardgenerator + 2;
        console.log(cardgenerator)
        return cardgenerator;
    } else {
        console.log(cardgenerator)
       return cardgenerator;
    }
};

function showcard () {
    
}

//EVENTS

if (buttongivemeacard !== null && buttongivemeacard !== undefined && buttongivemeacard instanceof HTMLButtonElement) {
    buttongivemeacard.addEventListener("click", givemeacard)
};

