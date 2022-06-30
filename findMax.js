const arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const copyArr = [];

for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

        for (let j = 0; j < arr[i].length; j++) {

            if (Array.isArray(arr[i])) {

                if (Array.isArray(arr[i][j])) {
                    for (let k = 0; k < arr[i][j].length; k++) {
                        copyArr.push(arr[i][j][k])

                    }
                }
                else {
                    copyArr.push(arr[i][j])
                }
            }
        }
    }
    else {
        copyArr.push(arr[i])
    }
}
let max = copyArr[0];
for (let index = 0; index < copyArr.length; index++) {
    const element = copyArr[index];
    if (element > max) {
        max = element;
    }
}

console.log('max: ', max); 