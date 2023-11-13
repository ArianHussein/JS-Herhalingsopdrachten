//Opdracht 1

document.querySelector(".berekenBtn2").addEventListener("click", function() {

    const salaris = 2000;
    const percentage = 5;
    const salarisverhoging = (salaris * percentage) / 100;
    const resultaatElement = document.querySelector(".resultaat2");
    resultaatElement.textContent = `Salarisverhoging: €${salarisverhoging.toFixed(2)}`;
});






//Opdracht 2
document.querySelector(".berekenBtn1").addEventListener("click", function() {
  
    const prijs = 400000;
    const percentage = 2.5;
    const jaarlijkseRente = (prijs * percentage) / 100;
    const resultaatElement = document.querySelector(".resultaat1");
    resultaatElement.textContent = `Jaarlijkse rente: €${jaarlijkseRente.toFixed(2)}`;
});






//Opdracht 3
document.querySelector(".berekenBtn").addEventListener("click", function() {
    const prijsExBtw = 100;
    const btwPercentage = 21;
    const prijsInclusiefBtw = prijsExBtw * (1 + btwPercentage / 100);
    const resultaatElement = document.querySelector(".resultaat");
    resultaatElement.textContent = `De prijs van de jas inclusief btw is: €${prijsInclusiefBtw.toFixed(2)}`;
});






//Opdracht 4

const inputPerson = prompt("Voer het type persoon in (docent, student, directeur):");


if (inputPerson === "docent") {
    console.log("Jij bent een docent.");
} else if (inputPerson === "student") {
    console.log("Jij bent een student.");
} else if (inputPerson === "directeur") {
    console.log("Jij bent een directeur.");
} else {
    console.log("Jij bent gek!");
}





//Opdracht 5
const exchangeRates = {
    BTC: 35050,
    ETH: 1887,
    XRP: 0.7,
    DOG: 0.07,
    SOL: 40.26
};

const euros = (prompt("Voer het bedrag in euro's in:"));

const cryptoType = prompt("Voer het type cryptovaluta in (BTC, ETH, XRP, DOG, SOL):");

if (exchangeRates.hasOwnProperty(cryptoType)) {

    const amountInCrypto = euros / exchangeRates[cryptoType];


    console.log(`${euros} euro's is gelijk aan ${amountInCrypto.toFixed(8)} ${cryptoType}`);
} else {

    console.log("De ingevoerde cryptovaluta is onbekend.");
}







//Opdracht 6

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("Einde programma");






//Opdracht 7
let count1 = 0;

while (count1 < 20) {
    if (count1 < 10) {
        console.log("Dit is zin 1.");
        console.log("Dit is zin 2.");
    } else {
        console.log("Alleen zin 1 wordt afgedrukt na 10 keer.");
    }

    count1++;
}

console.log("Einde programma");






//Opdracht 8
let count = 0;

while (count < 20) {
    console.log("Loop");
    count++

    if (count === 10) {
        break;
    }
}




//Opdracht 9
const colours = ["rood", "groen", "geel", "blauw", "roze"];
console.log(colours);


//Opdracht 10
const muziekArtiesten = ["Artiest1", "Artiest2", "Artiest3", "Artiest4", "Artiest5"];
let klikCount = 0;

function voegArtiestToe() {
    if (klikCount < muziekArtiesten.length) {
        const artiestenContainer = document.querySelector(".artiestenContainer");
        const nieuweDiv = document.createElement("div");
        nieuweDiv.textContent = muziekArtiesten[klikCount];

        artiestenContainer.appendChild(nieuweDiv);

        klikCount++;
    }
}

const voegToeButton = document.querySelector(".voegToeButton");
voegToeButton.addEventListener("click", voegArtiestToe)

//Opdracht 11

let items = [];
function addItem() {
    const inputElement = document.querySelector(".text-input");
    const itemText = inputElement.value;

    if (itemText.trim() !== "") {
        items.push(itemText);

        const itemListElement = document.querySelector(".item-list");
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        itemListElement.appendChild(listItem);

        inputElement.value = "";
    }
}


function clearItems() {
    items = [];

    const itemListElement = document.querySelector(".item-list");
    while (itemListElement.firstChild) {
        itemListElement.removeChild(itemListElement.firstChild);
    }
}





//Opdracht 12

function showMessage(message) {
    console.log(message);
}

showMessage("Test message.");






//Opdracht 13

function showSum(num1, num2) {
    const sum = num1 + num2;
    console.log("De som is:", sum);
}

showSum(5, 8);






//Opdracht 14

function showArray(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i]);
    }
}

const exampleArray = [2, 4, 6, 8, 10];
showArray(exampleArray);






//Opdracht 15
function getProduct(num1, num2) {
    return num1 * num2;
}

const result1 = getProduct(4, 7);
console.log("Het product is:", result1);





//Opdracht 16
function getSumOfArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

const numbersArray = [1, 3, 5, 7, 11];
const result = getSumOfArray(numbersArray);

console.log("De som van de array is:", result);
