// Conditional Statement
//if statment
//else if means having multiple condiitions
let easy = 5

if(easy > 10){
    console.log('Easy is truly greaterthan 3');
} else {
    console.log('Easy is not greater than 3');
}


let age = 75;

if(age < 18){
    console.log('You not old enough to vote');

} else if (age > 18 > 75){
    console.log('You are old enough to vote');

} else if (age >= 75) {
    console.log('you are old');

} else {
    console.log('Uou are 18 years old and eligible to vote')
}

let beer = 26;

if(beer === 25 || beer <= 28 && beer < 18 ){
    console.log('You are not old enough to drink');
} else {
    console.log('You are old enough to drink')
}

//&& both wing as to be true
//|| only one wing needs to be true

//switch statements are used to perform different acctions

let rice = "ofada"

switch (rice){
    case "basmati": //this can be a number, string, case 1-4 or a conditional statment
        console.log(rice + " is the best rice");
        break;

    case 'ofada':
        console.log(rice + ' is thh best rice');
        break;
    case "aroso":
        console.log(rice + " is the best rice");
        break;
        default:
        console.log(rice + "I dont know what rice is");
}

//Ternary operator
let wc = 11

let flush = ( wc > 20) ? 'flush' : 'not flush';
console.log(flush);
// flush = varable
//wc > 20 = condition
//"flush" = true
// "not flush " = false

// Function
let jay = "i live in lag"; // global varible 
// types
// functions expression
let thompson = function() {
    let ben = "my name is nwa"; // local variable
    console.log("Good Evening")
}

// arrow function
let thom = () => {
    console.log ("Good afternoon")
}

// iife (immediately invoked function expression)
(function(){
    console.log("good morning")
})()

// argument & parameters

function add(j,t){
    return j + t
}

// rest parameters
function jt(...numbers){
    return numbers.reduce()
}