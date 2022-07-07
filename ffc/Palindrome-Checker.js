function palindrome(str) {

    /**
      STEPS
    * make array
    * loop and remove numbers, special characters and space
    * convert to string
    * reverse the string
    * compare them
    * return the boolean
     */

    const strArr = str.toLowerCase().split("");
    const pureStrArr = strArr.filter(s => s.match(/^[0-9A-Za-z]+$/) !== null)
    const pureStr = pureStrArr.join("");
    const reversedStr = pureStrArr.reverse().join("");

    // return [pureStr, reversedStr];
    return pureStr === reversedStr
}

console.log(palindrome("1 eye for of 1 eye."));