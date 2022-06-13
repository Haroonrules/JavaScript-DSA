function countTruthy (arr) {
    let count = 0;
    for (let index of arr) {
        if (index) {
            count++
        }
    }
    return count



    
}
const arr = [21, 0, "sa", null, NaN, false, true]
console.log(countTruthy(arr))
