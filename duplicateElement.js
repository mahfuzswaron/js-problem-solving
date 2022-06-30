const arr = [1, 2, 3]
function duplicate(arr) {
    const actualLength = arr.length;
    for (let i = 0; i < actualLength; i++) {
        const element = arr[i];
        arr.push(element)
    }

}
console.log(duplicate(arr))