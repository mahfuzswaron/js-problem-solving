const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];
let count = 0;
let duplicates = [];
const length = arr.length;
for (let i = 0; i < length; i++) {
    const e = arr.shift();
    const matched = arr.filter(a => a === e);
    console.log(matched)
    if (matched.length) {
        duplicates.push(matched.toString(''));
        count = duplicates.length;
    }
}
console.log(count);