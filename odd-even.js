function isEven(number){
    if(number % 2 === 0 ){
        return true
    }
    return false
}
const number = 24
const isEvenNumber = isEven(number)
console.log( number,'is even number',isEvenNumber)


function isOdd(number2){
    if(number2 % 2 !== 0 ){
        return true
    }
    return false
}
const number2 = 34
const isOddNumber = isOdd(number2)
console.log( number2,'is odd number',isOddNumber)