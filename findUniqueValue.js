// find unique value from an sorted array:

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
const sortedArr = arr.sort((a, b) => a - b);
const unique = sortedArr.filter((item, i) => sortedArr.indexOf(item) === i);
console.log(unique);