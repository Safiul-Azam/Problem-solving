function getFactorial(num){
    let factorial = 1
    for(let i = 1; i <= num; i++){
        factorial = factorial * i
    }
    return factorial
}
const forFactorial = 10
const result = getFactorial(forFactorial)
console.log(result) 