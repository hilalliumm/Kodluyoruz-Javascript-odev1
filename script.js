let userName = prompt("Lüften kullanıcı adınızı giriniz.")
let isim = document.querySelector("#myName").innerHTML= userName

const weekday = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let d = weekday[date.getDay()]
    
    h = h<10 ? "0"+h :h
    m = m<10 ? "0"+m :m
    s = s<10 ? "0"+s :s

    let clock = h +":"+ m +":"+ s +" "+ d 

    document.getElementById("myClock").innerText = clock
    var time = setTimeout(function () {
        showTime();
    },1000);
}
showTime();
