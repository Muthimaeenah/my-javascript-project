// Arrays are capable of holding valuable data. 
// Arrays are capable of holding multiple values.
// Rep of array is a [], you can also have an object in an array.
[{}, {}, {}] // object been stored in an array.

//Square method/bracket
let firstNames = ["Jenkins", "Hadiza", "Suleiman", "Easy"]
firstNames[2] = "Omoyemi";
console.log(firstNames.length);
// firstNames.push("David");
// console.log(firstNames);
// firstNames.pop();

let newFirstNames = firstNames = firstNames.toString();
console.log(firstNames);
// console.log(firstNames);
//console.log(firstNames[2]);
let protocol = firstNames[2]
// console.log(protocol +);
//firstNames.at 



//Array Constructor
let lastName = new Array("Uwagbai", "Nasiru", "Abdulsalam", "Wealth")
// console.log(lastName);
lastName[2] = "Omotobi"
// console.log(lastName[2]);
let protocol1 = lastName[2];


// Empty bracket

let nickNames = []

nickNames[0] = "baby 2";
nickNames[1] = "classic";
nickNames[2] = "protocol";
nickNames[3] = "baby 1";

nickNames[2] = "Moscatii"
// console.log(nickNames);
console.log(nickNames[2]);
let protocol2 = nickNames[2];
console.log(protocol + " " + protocol1 + " " + protocol2);


let info =[
   {
    name: "Jenkins",
    age: 20,
   }, 
   {
    name: "Hadiza",
    age: 21,
   },
   {
    name: "Suleiman",
    age: 22,
   },
   {
    name: "Easy",
    age: 23,
   }
];
// console.log(info);


//sort and reverse

let soap = ["Eva", "Detol", "Dudu Osun", "Premier", "Ariel"];

let numb = [3, 20, 5, 10];
// numb.sort(function (x, y){
//    return x - y;
// });
let numbList = numb.sort();
console.log(numbList)