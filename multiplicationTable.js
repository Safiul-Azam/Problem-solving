function multiplicationTable(number){
    
    for(let i = 1; i <= 10; i++){
        const multi = number + ' X ' + i + ' = ' + number*i
        console.log(multi) 
    }
}
const number = 3
const result = multiplicationTable(number)