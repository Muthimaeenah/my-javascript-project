// let form = document.getElementById("form");
//let fullname = document.getElementById("fullname");
/* let errorMsg = document.getElementsByClassName("error");*/
let id = (id) => document.getElementById("id");
let classes = (classes) => document.getElementById("classes")

let fullname = id("fullname");
 email = id("email");
 phonenumber = id("phonenumber");
 course = id("course");
 form = document.getElementById("form");

let errorMsg = classes("error")

let formValidation = (id, serial, message) => {
 if (id.value.trim() === ""){
   errorMsg[serial].innerHTML = message;
 } else {
  errorMsg[serial].innerHTML = "";
}
};

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();// anytime we have a form we must prevent default behavior
  formValidation(fullname, 0, "fullname cant be empty");
  formValidation(phonenumber, 1, "phonenumber cant be empty");
  formValidation(email, 2, "input your email");
  errorMsg[3].innerHTML = "input preffered course";
  resetInput();
}); 

let resetInput = () => {
  if(fullname.value !== "" && phonenumber.value !== "" && email.value !== ""){
    fullname.value = "";
    phonenumber.value = "";
    email.value = "";
  }
}





