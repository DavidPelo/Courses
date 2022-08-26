"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
let num1 = 5;
let num2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(num1, num2, printResult, resultPhrase);
console.log(result);
