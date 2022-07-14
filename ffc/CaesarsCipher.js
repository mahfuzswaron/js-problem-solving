function rot13(str) {
    const strArr = str.split("");
    const transformedStrArr = [];

    const first13 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const last13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < strArr.length; i++) {

        const el = strArr[i];

        if (/^[a-zA-Z]+$/.test(el)) {

            const elIndexFirst = first13.indexOf(el);
            const elIndexSecond = last13.indexOf(el);

            if (elIndexFirst !== -1) { // A - M
                transformedStrArr.push(last13[elIndexFirst])
            }
            else if (elIndexSecond !== -1) { // N -Z
                transformedStrArr.push(first13[elIndexSecond])
            }
        }
        else {
            transformedStrArr.push(el);
        }
    }

    return transformedStrArr.join("");

}

console.log(rot13("SERR CVMMN!"));