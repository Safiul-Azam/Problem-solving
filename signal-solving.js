

function signal(color){
    if(color === 'red'){
        return "please stand up! it will be risk for you. don't cross the street"
    }else if(color === 'yellow'){
        return 'please stop up! you should stop now you are in danger '
    }else if(color === 'green'){
        return 'cross the street! now you are safe'
    }
}
const color = 'red'
const result = signal(color)
console.log(result)