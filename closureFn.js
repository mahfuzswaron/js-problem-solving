const createBase = b => n => n + b;

const addSix = createBase(6);
const addTen = createBase(10);

console.log(addSix(5))
console.log(addTen(10))