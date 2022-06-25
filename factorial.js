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


function getFactorial2(num2){
    let factorial2 = 1
    let i = 1
    while(i <= num2){
        factorial2 = factorial2 * i
        i++
    }
    return factorial2
}
const forFactorial2 = 10
const result2 = getFactorial2(forFactorial2)
console.log(result2) 


function getFactorial3(num3){
    let factorial = 1
    let i = num3
    while(i >= 1){
        factorial = factorial * i
        i--
    }
    return factorial
}
const forFactorial3 = 9
const result3 = getFactorial3(forFactorial3)
console.log(result3) 