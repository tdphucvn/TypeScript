"use strict";
const add2 = (n1, n2) => {
    return n1 + n2;
};
const printResult2 = (num) => {
    console.log('Result: ' + num);
};
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
printResult2(add2(5, 6));
let combineValues;
combineValues = add2;
// combineValues = printResult;
console.log(combineValues(1, 6));
addAndHandle(5, 9, (num) => {
    console.log(num);
});
