const add = (n1: number, n2: number) => {
    return n1 + n2;
};

const printResult = (num: number) => {
    console.log('Result: '+ num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};

printResult(add(5,6));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(1,6));

addAndHandle(5, 9, (num) => {
    console.log(num);
});