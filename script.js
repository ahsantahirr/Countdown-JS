var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minnutes");
var seconds = document.getElementById("seconds");

setInterval(function () {
    var now = new Date();
var bakraEid = new Date("6/17/2024");  //mm/dd/yyyy
var milleseconds = now.getTime();
var bakraEidMillseconds = bakraEid.getTime();
var diff = bakraEidMillseconds - milleseconds;

var inDays = Math.round(diff/1000/60/60/24);
var inHours = Math.round(diff/1000/60/60);
var inMinutes = Math.round(diff/1000/60);
var inSeconds = Math.round(diff/1000)

days.innerHTML = inDays;
hours.innerHTML = inHours;
minutes.innerHTML = inMinutes;
seconds.innerHTML = inSeconds;
}, 1000);






    // let now = new Date();
    // hours.innerText = now.getHours();
    // minutes.innerText = now.getMinutes();
    // seconds.innerText = now.getSeconds();

    // if (now.getHours() >= 12) {
    //     am_pm.innerText = "PM";
    // } else {
    //     am_pm.innerText = "AM";
    // }
    // if (now.getHours() <= 9) {
    //     hours.innerText = "0" + now.getHours();
    // }
    // if (now.getMinutes() <= 9) {
    //     minutes.innerText = "0" + now.getMinutes()
    // }
    // if (now.getSeconds() <= 9) {
    //     seconds.innerText = "0" + now.getSeconds()
    // }

    // var dayNames = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // date.innerText = now.getDate()
    // day.innerText = dayNames[now.getDay()]

    // var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // month.innerText = monthNames[now.getMonth()];
    
    // year.innerText = now.getFullYear();




// var now = new Date();
// var bakraEid = new Date("6/17/1997");  //mm/dd/yyyy
// var milleseconds = now.getTime();
// var bakraEidMillseconds = bd.getTime();
// var diff = milleseconds - bakraEidMillseconds;
// console.log("milleseconds=>", diff);
// console.log("seconds=>", Math.round(diff / 1000));
// console.log("minutes=>", Math.round(diff / 1000 / 60));
// console.log("hours=>", Math.round(diff / 1000 / 60 / 60));
// console.log("day=>", Math.round(diff / 1000 / 60 / 60 / 24));
// console.log("months=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30));
// console.log("years=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12));