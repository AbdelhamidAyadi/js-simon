let randomList = [];
let container = document.getElementById("container");
let answer = [];

while (randomList.length < 5) {
    if (!randomList.includes(random(1, 100))) {
        randomList.push(random(1, 100));
    }
    
}
console.log(randomList);



function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}