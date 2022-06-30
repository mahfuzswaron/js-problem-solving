const mul = x => y => z => x * y * z;

function multi(x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}

console.log(multi(2)(3)(4))