// SHOW MENU
const navMenu = document.getElementById("nav_menu"),
      navShow = document.getElementById("nav_listIcon"),
      navClose = document.getElementById("nav_close")


/*Menu SHOW*/
if(navShow){
    navShow.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*Menu Hidden*/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// CLOCK
const hour = document.getElementById("hour_hand"),
     minutes = document.getElementById("minute_hand");

const clock = () =>{
    // we get the Date object
    let date = new Date()
    //we get the hours and minutes
    // (current time)/ 12(hours) * 360(circle deg)
    // (current minute) / 60(minutes) * 360 (circle deg)
    
    let hh = date.getHours() / 12 * 360
         mm = date.getMinutes() / 60 * 360

    //we add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
}
setInterval(clock,1000) // (updates every 1s) 1000 = 1s
// Time And Date
let clockDayWeek = document.getElementById("clock_day_week")
   dateMonth = document.getElementById("date_month"),
   dateDay = document.getElementById("date_day"),
   dateYear = document.getElementById("date_year"),
   textHour =  document.getElementById("text_hour"),
   textMinutes = document.getElementById("text_minutes"),
   textSeconds = document.getElementById("text_seconds"),
   textAmpm = document.getElementById("text_ampm");

let clockText = () =>{
     // to get the date object by saying
     let date = new Date();

     // to get the time and date
     let dayWeek = date.getDay(),
         month = date.getMonth(),
         day = date.getDate(),
         year = date.getFullYear(),
         hh = date.getHours(),
         mm = date.getMinutes(),
         ss = date.getSeconds(),
         ampm 

     // to get the days of the weeksand the months.(first day of the week sunday)  
     let daysweek = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
     let monthsyear = ['January', 'Febrauary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

     // adding corresponding dates
     clockDayWeek.innerHTML =`${daysweek[dayWeek]}`
     dateMonth.innerHTML = `${monthsyear[month]}`
     dateDay.innerHTML = `${day}`
     dateYear.innerHTML = `${year}`

     // Adding corresponding time
     // if hours > 12(afternoon), we subtract -12, so it will start from 1
     if(hh >= 12){
          hh = hh - 12
          ampm = 'PM'
     } else{
          ampm = 'AM'
     }
     textAmpm.innerHTML = ampm
     // when it is 0 hours (early morning), we tell it to change to 12 hours
     if(hh == 0){hh = 12 }

     // if hours is less than 10, add a 0 (01, 02, 03 ... 09)
     if(hh < 10){hh = `0${hh}`}
     textHour.innerHTML = `${hh}:`
     textMinutes.innerHTML = `${mm}:`
     textSeconds.innerHTML = `${ss}`

     // if minutes is less than 10, add a 0 (01, 02, 03 ... 09)
     if(mm < 10){mm = `0${mm}`}

     // if seconds is less than 10, add a 0 (01, 02, 03 ... 09)
     if(ss < 10){ss = ` 0${ss}`}
}
setInterval(clockText, 1000)  // update every 1s

     
