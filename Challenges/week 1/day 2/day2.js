
//bronze
var fb = 15

if (fb % 3 === 0 && fb % 5 === 0) { 
    console.log('Fizz Buzz')
} else if (fb % 3 === 0) {
    console.log('Fizz')
} else if (fb % 5 === 0) {
    console.log('Buzz')
} else {
    console.log(`${fb} is not Fizz Buzz`)
};

//silver

fb % 3 === 0 && fb % 5 === 0 ? console.log('Fizz Buzz') :
fb % 3 === 0 ? console.log('Fizz') :
fb % 5 === 0 ? console.log('Buzz'):
console.log(`${fb} is not Fizz Buzz`);

//gold

    switch(true){
        case fb % 3 === 0 && fb % 5 === 0:
            console.log('fizz buzz');
            break;
        case fb % 3 === 0:
            console.log('fizz');
            break;
        case fb % 5 === 0:
            console.log('buzz');
            break;
        default:
            console.log('na');

    }
    


//challenge 1

let a = 15;
let b = 9;

if (a % b  === 0) { 
    console.log(`Value of ${a} is divisible by ${b} .`)
} else { 
    let letters = a / b
    console.log(`${letters} is the remaining value`)
}

let letters = a / b

a % b === 0 ?  console.log(`Value of ${a} is divisible by ${b} .`) :
console.log(`${letters} is the remaining value`);

switch(true){
    case a % b === 0:
        console.log(`Value of ${a} is divisible by ${b} .`);
        break;
    case 'else': 
        console.log(`${letters} is the remaining value`);
        break;
}
 

myString = "stuffing and gravy ", "academy", "eleven fifty";


if (myString.length === 0) {
    console.log('please type something')
} else if (myString.length > 10) {
    console.log('please type less')
} else {
    console.log(myString)
}

