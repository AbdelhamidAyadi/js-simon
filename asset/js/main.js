let randomList = [];
let container = document.getElementById("container");
let number;
let answersList = [];
let rightAnswers = [];

while (randomList.length < 5) {
    if (!randomList.includes(random(1, 100))) {
        randomList.push(random(1, 100));
    }

}
container.innerHTML = randomList;
setTimeout(timeOut, 5000);
setTimeout(timeOut1, 5100);
setTimeout(timeOut2, 6000);
setTimeout(timeOut3, 7000);



function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function timeOut() {
    container.innerHTML = ""
}

function timeOut1() {
    container.innerHTML = "Adesso inserisci i 5 numeri"
}

function timeOut2() {
    container.innerHTML = ""
}

function timeOut3() {
    for (let x = 0; x < 5; x++) {
        number = Number(prompt("Inserisci un numero"));
        answersList.push(number);

    }
    for (let y = 0; y < 5; y++) {
        for (let z = 0; z < answersList.length; z++) {
            if (answersList[z] == randomList[y]) {
                rightAnswers.push(answersList[z]);
    
            }
    
        }
    
    }
    container.innerHTML = `<div>I numeri che sono stati individuati sono : ${rightAnswers.length} e sono i seguenti numeri: ${rightAnswers}.</div>`

}
