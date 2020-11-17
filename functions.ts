const add2 = (n1: number, n2: number) => {
    return n1 + n2;
};

const printResult2 = (num: number) => {
    console.log('Result: '+ num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};

printResult2(add2(5,6));

let combineValues: (a: number, b: number) => number;

combineValues = add2;
// combineValues = printResult;

console.log(combineValues(1,6));

addAndHandle(5, 9, (num) => {
    console.log(num);
});