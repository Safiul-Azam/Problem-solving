function calculateLeapYear(year){
   if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true
   }
   return false
}
const year = 1800
const isLeapYear = calculateLeapYear(year)
console.log(year ,'is leap year', isLeapYear)