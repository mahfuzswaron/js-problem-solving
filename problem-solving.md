# PROBLEM SOLVING

### 1. Create a function that allows you to do this:

```
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```


### solution:

```
const createBase = b => n => n + b;
const addSix = createBase(6);

console.log(addSix(3)) // 9

```

### 2. Check if a number is integer.

solution:
```
const isInt = n => n % 1 === 0;

console.log(isInt(5.3))
```
or

```
function isInt(n){
    return n % 1 === 0;
}

console.log(isInt(4))
```

### 3. Duplicate the array element once.
Like this:
```
duplicate([1, 2, 3]); // [1,2,3,4,5,1,2,3]
```
solution:
```
const arr = [1, 2, 3]
function duplicate(arr) {
    const actualLength = arr.length;
    for (let i = 0; i < actualLength; i++) {
        const element = arr[i];
        arr.push(element)
    }

}
console.log(duplicate(arr))
```
### 4. Given a string, reverse each word in the sentence

For example `Welcome to this Javascript Guide!` should be become `emocleW ot siht tpircsavaJ !ediuG`;

solution:
```
const str = "Welcome to this Javascript Guide!";

const reverseString = string => string.split(" ").map(s => s.split("").reverse().join("")).join(" ");

console.log(reverseString(str));

```

### 5. Write a "mul" function which will properly when invoked as below syntax

```
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
```
solution:

```
const mul = x => y => z => x * y * z;

or,

function multi(x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}


console.log(mul(2)(3)(4)) // 24

console.log(multi(2)(3)(4)) //24
```
