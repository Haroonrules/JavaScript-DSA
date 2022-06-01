// If the input value is not a number it should return NaN if the value divisible by 3 it should return 3 if the value is divisible by 5 it should return buzz if the value is divisible by both 3 & 5 it should return fizzbuzz if its divisible by neither the input value itself should be returned 



function fizzBuzz(input) {
    // firt we want to check the type of input if we don't check it first the function will execute the first if statement, if one of the statements are true e.g divisible by 5 or 3 or both it would return Buzz, fizz or fizzBuzz respectively
    if (typeof input !== "number") {
       return NaN
   }
    if ((input % 3 === 0)&& (input % 5 === 0)) {
        return "fizzBuzz"
    }
     if (input % 3 === 0) {
        return "fizz"
    }
     if (input % 5 === 0) {
        return "Buzz"
    }
    else return input
}
console.log(fizzBuzz(17))