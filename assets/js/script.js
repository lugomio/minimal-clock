const secPointer = document.querySelector("#pointer-sec");
const minPointer = document.querySelector("#pointer-min");
const hourPointer = document.querySelector("#pointer-hour");
const weakDay = document.querySelector("#weak-day");
const monthDay = document.querySelector("#month-day");
const fullTime = document.querySelector("#full-time");

const weakDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

setInterval(updateTime, 1000);
let dayTemp = -1;
let minTemp = -1;

function updateTime() {
    const now = new Date();

    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();
    let month = now.getMonth();
    let day = now.getDay();

    secPointer.style.transform = `rotate(${sec * 6}deg)`;

    if (min != minTemp) {
        let period = "AM";

        if (hour >= 12) {
            period = "PM";
            hour = hour % 12;
        }

        minPointer.style.transform = `rotate(${min * 6}deg)`;
        hourPointer.style.transform = `rotate(${hour * 30}deg)`;

        fullTime.textContent = `${("0" + hour).slice(-2)}:${("0" + min).slice(-2)} ${period}`;

        minTemp = min;
    }

    if (day != dayTemp) {
        weakDay.textContent = weakDays[day];
        monthDay.textContent = `${day} ${months[month]}`;
        dayTemp = day;
    }
}

updateTime();