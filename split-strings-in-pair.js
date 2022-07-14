function solution(str) {

    /***
     * steps
     * make array
     * loop and push pair char in another array
     * return that array
     */

    const strArr = str.split("");
    const pairedStrArr = [];
    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i];
        const nextElement = strArr[++i];
        if (!nextElement) {
            pairedStrArr.push(element + "_")
        }
        else {
            pairedStrArr.push(element + nextElement)
        }
    }

    return pairedStrArr;

};

console.log(solution('abcdefgh'));