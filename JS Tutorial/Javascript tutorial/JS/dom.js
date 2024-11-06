// DOM




    // get element by ID
//     let burnaBoy = document.getElementById("hello");
//     burnaBoy.innerHTML = "<p><span>easy</span> came in <span>LATE!</span><p>";
//     burnaBoy.style.color = "green";

//     // query selector only target the first parent in this case the first span
//     let burnaFan = burnaBoy.querySelector("span");
//     burnaFan.style.color = "red";

//     //get element by tagName
//     // are inform of arrray
//     // let icloud = document.getElementsByTagName("body")

//     /// get element by classname
//     let ayrastar = document.getElementsByClassName("baby");

//     for(let i = 0; i < ayrastar.length; i++){
//         ayrastar[i].style.color = "brown";
//         ayrastar[i].style.fontWeight = "bold";
//         ayrastar[i].style.fontSize = "1em";
//     }

//     function modupe() {
//         let ayrastar = document.getElementsByClassName("baby");
//         for(let i = 0; i < ayrastar.length; i++){
//             ayrastar[i].style.color = "green";
//             ayrastar[i].style.fontWeight = "bold";
//             ayrastar[i].style.fontSize = "3em";
//     }
//     }

//     function adam() {
//         for(let i = 0; i < ayrastar.length; i++){
//             ayrastar[i].style.color = "red";
//             ayrastar[i].style.fontWeight = "bold";
//             ayrastar[i].style.fontSize = "1em";
//     }
//     }

//     // length 

//     // var arrA = [0,1,2,3,4,5];
//     // var arrA = arrA;
//     // arrB[0] = 42;
//     // console.log(arrA)





//     let fruit = ["apple", "ogede", "agbalumo", "orumbo", "osan"];
//     console.log(fruit.length);

//     // Event 
//     // let portable = document.getElementById('portable')
//     // portable.onmouseover = function() {
//     //     alert("Dont hover ME")
//     // }

//     document.getElementById('ourdiv').onmouseout = function(){
//         alert('movement');
//     }

//     window.onunload = function(){
//     console.log('Fully loaded cashh');
// };

let colorChanger = document.getElementById("color-changer");
let button = document.getElementById("button");
let counter = 0
let colors = ["red", "yellow", "yellowgreen", "black", "blue" ];

appear = function () {
    if(yourDiv.className === "on") {
        yourDiv.className = "";
        button.innerHTML = "Show All";
        button.style.backgroundColor = "green";
    } else {
        yourDiv.className = "on";
        button.innerHTML = "Show Less";
        button.style.backgroundColor = "red"
    }
};

display = function() {
    if (counter >= colors.length){
        counter = 0;
    }

    yourDiv.style.background = colors[counter]
    counter++;
}

// Event listeners