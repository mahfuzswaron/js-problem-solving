let result = 1;
const getFactorial = (number) => {
    if (number < 1) {
        return result;
    }
    result = result * number;
    return getFactorial(number - 1)
}
console.log(getFactorial(9)); 