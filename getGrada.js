function getGrade(number){
    if(number >= 80){
        return 'A+'
    }else if(number >= 70){
        return 'A-'
    }else if(number >=60){
        return 'A'
    }else if(number >= 50){
        return 'B'
    }else if(number >= 33){
        return 'C'
    }else{
        return 'Fail'
    }
}
const examNumber = 97
const result = getGrade(examNumber)
console.log(result)
