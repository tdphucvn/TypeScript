"use strict";
const combine = (input1, input2, resultCoversion) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    ;
    return result;
};
const combinedAges = combine(30, 15, 'as-number');
console.log(combinedAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
const combinedStringAges = combine('30', '26', 'as-number');
