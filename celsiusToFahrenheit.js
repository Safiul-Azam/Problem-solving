function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}
const celsius = 40
const result = celsiusToFahrenheit(celsius)
console.log(result)


function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9
    return celsius
}
const fahrenheit = 104
const celsiusResult = fahrenheitToCelsius(fahrenheit)
console.log(celsiusResult)