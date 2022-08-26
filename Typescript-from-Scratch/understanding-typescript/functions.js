"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
// console.log(combineValues(8, 8));
addAndHandle(20, 40, (result) => {
    console.log(result);
});
