const str = "Welcome to this Javascript Guide!";

const reverseString = string => string.split(" ").map(s => s.split("").reverse().join("")).join(" ");

console.log(reverseString(str));