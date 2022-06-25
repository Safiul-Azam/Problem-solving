function inchToFeet(inch){
    const foot = inch / 12
    return foot
}
const result = parseInt(inchToFeet(5).toFixed(2))
console.log(result)