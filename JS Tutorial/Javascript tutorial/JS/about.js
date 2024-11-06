//Javascript is a high level scripting programming language, it allows you create dynamic content, multimedia, form validation, also used to create an engaging website. Javascript creates interactivity. 
// WHAT JS OFFERS WEB APPLICATIONS
// DOM Manipulation (Document Object Model): used to change anything on a webpage
// Event Handling: Responds to a users action or input e.g (onClick)
// Asychronus Javascript and XML (AJAX): this enables a communication with servers with the likes of searching an API. It helps send and recive data from servers using XML doing all this without reloading the entire page. 
// Client Side Validation: This checks what users have inputed before submitting to the server. Also sends an instant feedback to the user. 
// Automation using JS
// Framework & libaries
// API (browser API): PROVIDES ACCESS TO A LOT OF BROWESER API E.G GEOLOCATION. API means Application Programming Interface e.g Web API: HTTP(s), Libary API: Framework, Operating System API, Hardware API


// OPERATORS IN PROGRAMMING this is going to allow you prerform operation on data

// Assignment operattor =
let tinubu = 80 // = assignment operator
document.write((tinubu -= 3));

// Arithmetic operator + - * / 
let petobi = 30 + 38
document.write((petobi));
document.write((petobi += 1));

// comparison operator == loose equality operator changes because they are not of the same value but  doesn't check if they are of the same data type
let portable = (20 == "20");
document.write((portable));

// comparison operator === strict equality operator going to check thier data type of
let wizkid = 20 === "20";
document.write((wizkid));

// not equal
let jazzy = 10 != "10"; //not  
document.write(jazzy);

// strict non equal !==
let wande = 40 !== "40"; // checks both the left and rrightt values if they are identtiical
document.write(wande);

// logical Operators
// && and + both conditions as to be met before it could be true
let spyro = true && false 
document.write(spyro);

// || logical OR  one conditions has to be met foro it to be true
let bille = true || false;
document.write(bille);

// type operators
let spider = typeof "man"; // this checks the data type of a variable is it string, number etc
document.write(spider);

let omoyemi = true
document.write(typeof omoyemi);

// terarary operator
let kema = (5 > 3) ? "true" : "false";
console.log(kema);

// typeOf is used to check thhe data type of a variable
let b = 32;
console.log (typeof b);

let c = "let's make it simple";
console.log (typeof c);

let d = true;
console.log (typeof d);

let e = null;
console.log(typeof e);

// let f =       //undefined
// console.log(typeof f);

let g = {age: 20, state: "lagos"}; //an object
console.log (typeof g);

let h = function(){};
console.log (typeof h);

//MEthod in JS

//object methods
//Built in methods
//strings methods
//array methods
//math methods
//defining methods
//object literals


// STRING MEHTODS

let cash = "hello, world";
console.log(cash.toUpperCase());
console.log(cash.length);
console.log(cash.charAt(2)); //location of the charater
console.log(cash.at(1)); //allows the use of a negative value


let easyca = "are you there?";
console.log(easyca.slice(3, 8)); //takes two argument and the are caled the start index and the end index. Accepts a negative number

let establish = "hello world"
console.log(establish.substring(7, 12)); // doesn't allow a negative value

console.log('hello "nope" then continue');
console.log(`hello isn't ${easyca} then continue`);




//NaN /exponential
let str12 = 0 / 0;
console.log(str12);

// toString is converting a number to a string

let str13 = 45;
let str14 = str13.toString();
console.log(str14);


//toExponential
let str15 = 4556678;
console.log(str15.toExponential(2));


//toFixed specifes to a fixed number of decimals
let str16 = 48.52;
console.log(str16.toFixed());

//toPrecision formats to a specified length
let str17 = 48.12676;
console.log(str17.toPrecision(10));

//valueOf
let str18 = new Number(234)
console.log(str18.valueOf());

//Number
console.log(Number("456"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));

//parseFloat
console.log(parseFloat("45.67gh"));

//parseInt doesnt deal with fraction
console.log(parseInt('67.87fj'));

//isNaN
console.log(isNaN("go"));

//math round
let str19 = 56.679;
console.log(Math.round(str19));

//math ceil
let str20 = 47.145738;
console.log(Math.ceil(str20)); 

//math floor
let str21 = 40.93212;
console.log(Math.floor(str21));

//math trunc
let str22 = 45.6756;
console.log(Math.trunc(str22));

//math sqrt square root
let str23 = 5;
let str24 = Math.sqrt(str23);
let str25 = Math.floor(str24)
let str26 = Math.ceil(str24);
console.log(str26);

//math abs means absolute value
let str27 = 567.98765;
console.log(Math.abs(str27));

//math sin
console.log(Math.sin(45));

//math cos
console.log(Math.cos(45));

//min
let str28 = [5, 6, 7, 8, 9];
console.log(Math.min(...str28));

//max
console.log(Math.max(...str28));

