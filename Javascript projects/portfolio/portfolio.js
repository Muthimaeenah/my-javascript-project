/************** HEADER ***********/
let navMenu = document.getElementById("nav_content"),
      navShow = document.getElementById("nav_toggle"),
      navClose = document.getElementById("nav_close")

/* Menu SHOW*/  
if(navShow){
    navShow.addEventListener('click',() =>{
        navMenu.classList.toggle.display = "none"
        navClose.classList.toggle.display = "block"
        navMenu.classList.add('show-menu')
        /* console.log(navShow) */
    })
}
/*Menu Hidden*/ 
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
        console.log(navClose)
    })
}  
 
/**************SCROLL SECTION ACTIVE LINK***********/
/* let sections = document.querySelectorAll("section[id]");

let scrollActive =() => {
    let scrollDown = window.scrollY

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id'),
             sectionsclass = document.querySelector('nav_content a[href*= ', sectionId + ']')

       if(scrollDown > scrollTop && scrollDown <= sectionTop + sectionHeight){
            sectionsclass.classList.add('active_link')
        } else{
            sectionsclass.classList.remove('active_link') 
        }
    });
        
} 
window.addEventListener('scroll', scrollActive) */



/**************EMAIL JS***********/
let form = document.querySelector("form") ,
    fullname = document.getElementById("name"),
    email = document.getElementById("email"),
    message = document.getElementById("Message");
    errorMsg = document.getElementsByClassName("error") 

let sendEmail = () => {
    //serviceID - templateID - #form - publicKey
    emailjs.send('service_21n38hk','template_oe6yi1u', '.form', 'tvD7Ld9PblWPq7E7C' )
    .then(() => {
        // show sent message
        message.textContent = 'Your message sent successfully &#9989'
    
        // remove message after 5 seconds 
        setTimeout(() => {
            message.textContent = ''
        }, 5000)

        // clear input field
        form.reset()
    }, () => {
        // show error message
        message.textContent = 'message not sent successfully'

    })
}
/* console.log(sendEmail); */

let checkInput = () =>{
    let items = document.querySelectorAll('.item');

    for (let item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        /* if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener('keyup', () =>{
            checkEmail();
        });
 */
        item.addEventListener('keyup', () => {
            if(item.value !== ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");  
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
/* let checkEmail = () => {
    let emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error"); 
    } else{
        email.classList.remove("error");
        email.parentElement.remove("error");
    }
} */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("default prevented");
    checkInput();

    /* if(!fullname.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error") ){
      console.log("Ok");
    } */
    sendEmail();
});


/************** SCROLL REVEAL ANIMATION***********/

