"use strict";

const NumberGenerator = function(){
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //const ourNumber = [];
    for (let i = 0; i < 4; i++){
        let index = Math.floor(Math.random() * arr.length);
        ourNumber[i] = arr[index];
        if (ourNumber[0] === 0){
            i = 0;
        }
        arr[index] = arr[arr.length-1];
        arr.pop();
    }
    //console.log(ourNumber);
}

const NumberInput = function(){
    //const yourNumberArr = [];
    var yourNumber = readlineSync.question("Введіть число: ");
    for (let i = 0; yourNumber >= 1; i++){
        yourNumberArr[i] = yourNumber % 10;
        yourNumber = Math.floor(yourNumber / 10);
    }
    yourNumberArr.reverse();
    console.log(yourNumberArr);
}

const IsThisPlace = function(){
    bulls = 0;
    for (let i = 0; i < 4; i++){
        if (yourNumberArr[i] === ourNumber[i]){
            bulls++;
        }
    }
    return bulls;
}

const IsAnywhere = function(){
    cows = 0;
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            if (yourNumberArr[i] === ourNumber[j]){
                cows++;
            }
        }
    }
    cows = cows - bulls;
    return cows;
}

const ourNumber = [];
const yourNumberArr = [];
NumberGenerator();
const readlineSync = require('readline-sync');
var bulls = 0;
var cows = 0;
while (bulls < 4){
    NumberInput();
    console.log("Бики: " + IsThisPlace());
    console.log("Корови: " + IsAnywhere());
}
console.log("You are the best!");