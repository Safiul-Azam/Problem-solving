function inchToFeet(inch){
    const foot = inch / 12
    return foot
}
const number = inchToFeet(124)
const result = parseFloat(number.toFixed(2))
console.log(result)