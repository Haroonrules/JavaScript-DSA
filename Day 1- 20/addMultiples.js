//function that returns the sum of multipes of 3 and 5

const returnSumOfMultiples = limit => {
    //initialising a variable to 0 which will later store the sum of multiples of 3, and 5
    let sum = 0;
    // A for loop to iterate over all the numbers upto the limit
    for (let i = 0; i <= limit; i++) 
    // if i is divisble by 3 or 5 (which makes the multiples of 3 and 5. add those numbers to sum)
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
    //finally returning the sum 
    return sum

}

console.log(returnSumOfMultiples(33));