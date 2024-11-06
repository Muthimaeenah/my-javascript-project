// Adding Dom (Document) declaration with javascript
const step1 = document.querySelector(".step1"),
    step2 = document.querySelector(".step2"),
    step3 = document.querySelector(".step3"),
    emailAddress = document.getElementById("email"),
    verifyEmail = document.getElementById("verifyEmail"),
    inputs = document.querySelectorAll(".otp_group input"),
    nextbtn = document.querySelector(".nextbtn"),
    verifybtn = document.querySelector(".verifyBtn");
//console.log(step1)
let OTP = "";
window.addEventListener("load", () =>{
    emailjs.init ("tvD7Ld9PblWPq7E7C");
    step2.style.display = "none";
    step3.style.display = "none";
    nextbtn.classList.add("disable");
    verifybtn.classList.add("disable");
});

const validateEmail = (email) =>{
    let e = /\s+@\s+\.\s=/;
    if(e.test(email)){
        nextbtn.classList.remove("disable");
    } else {
        nextbtn.classList.add("disable");
    }
}

const generateOTP = ()=>{
    return Math.floor(1000 + Math.random() * 9000);//Math.random will create any value btw 0 to 9000
};// 1000 was addeded to give us our otp in 4 digit
//console.log(generateOTP());

// to allow one character into the input box instead of the multiple default
inputs.forEach((input) => {
    input.addEventListener ("keyup", function (e){
        if(this.value.length >= 1){
            e.target.value = e.target.value.substr(0,1);
        }

        if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && inputs[3].value != ""){
            verifybtn.classList.remove("disable");
        } else {
          verifybtn.classList.add("disable");
        }    
    });
})

nextbtn.addEventListener("click",() =>{
    OTP = generateOTP();
    nextbtn.innerHTML = "&#9889; sending...";
    let templateParameter ={
        from_name: "MM's Dev Community",
        OTP: OTP,
        message: "Input this OTP to login on our dashboard",
        reply_to: emailAddress.value,
    }
    emailjs.send("service_te7ofhm","template_rpbhb69", templateParameter).then(
        (res) =>{
            console.log(res);
            nextbtn.innerHTML = "Next &rarr;";
            step1.style.display = "none";
            step2.style.display = "block";
            step3.style.display = "none";
        },
        (err) => {
        console.log(err);
    }
  ); 
}) 
verifybtn.addEventListener("click", () =>{
    let values ="";
    inputs.forEach((input)=>{
     //console.log(input.value);
        values += input.value;
    });
    if(OTP == values){
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";     
    } else{
        verifybtn.classList.add("error-shake");
    }
    setTimeout(() => {
        verifybtn.classList.add("error-shake");
    }, 1000);
}) 

function changeMyEmail(){
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";  
}