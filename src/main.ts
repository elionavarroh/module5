//VARIABLES
let punctuation = 0;
let card = 0;
const buttongivemeacard = document.getElementById("takeacard");
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
    const showingcard = (texto, estado) => {
        let mensaje = "";
        switch (estado) {
        case 1 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 2 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 3 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 4 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 5 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 6 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 7 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 10 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 11 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        case 12 card:
        mensaje = `El número "${texto}" es tu carta`;
        break;
        default:
        mensaje = "Tu carta no ha podido procesarse";
        break;
        }
        document.getElementById("punctuation").innerHTML = mensaje;
       };
};

//EVENTS

if (buttongivemeacard !== null && buttongivemeacard !== undefined && buttongivemeacard instanceof HTMLButtonElement) {
    buttongivemeacard.addEventListener("click", givemeacard)
};

