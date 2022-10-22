// isim input alır
let name = prompt("İsminiz nedir?");
let item = document.querySelector("#myName");
item.innerHTML = name;

// gün bilgisi alır
var options = { weekday: 'long' };

const myClock = document.getElementById("myClock");
//#myClock düzenlenecek
window.onload = setInterval(function showTime() {
    var xmas95 = new Date();
    var weekday = xmas95.getDay();
    let day = new Intl.DateTimeFormat('tr-TR', options).format(xmas95);
    myClock.innerHTML = xmas95.getHours() + ":" + xmas95.getMinutes() +
        ":" + xmas95.getSeconds() + " " + day;
}, 1000);