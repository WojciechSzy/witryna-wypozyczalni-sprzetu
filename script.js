// godzina
function pobranieczasu (){
    var czas = new Date();
    var godzina = czas.getHours();
    if(godzina<10){
        godzina = "0" + godzina;
    }
    var minuty = czas.getMinutes();
    if(minuty<10){
        minuty = "0" + minuty;
    }
    var sekundy = czas.getSeconds();
    if(sekundy<10){
        sekundy = "0" + sekundy;
    }
    document.getElementById("godzina").innerHTML = godzina + ":" + minuty + ":" + sekundy;
    intervalGodzina;
}
pobranieczasu();
var intervalGodzina = setInterval(pobranieczasu, 1000);

// data
function pobraniedaty (){
    var dataCzas = new Date();
    var dzien = dataCzas.getDate();
    if(dzien<10){
        dzien = "0" + dzien;
    }
    var miesiac = (dataCzas.getMonth()+ 1);
    if(miesiac<10){
        miesiac = "0" + miesiac;
    }
    var rok = dataCzas.getFullYear();
    document.getElementById("data").innerHTML = dzien + "." + miesiac + "." + rok;
    intervalData;
}
pobraniedaty();
var intervalData = setInterval(pobraniedaty, 10000);

// działania dla 3100
var d3100 = document.getElementById("d3100");
d3100.addEventListener("click", fzdjecie1);
d3100.addEventListener("click", fcena1);

function fzdjecie1(){
    document.getElementById("zdjecie").src = "Grafiki/d3100.png";
}
function fcena1(){
    var d3100 = document.getElementById("cena");
    d3100.innerHTML = "20zł";
}

// działania dla 5100
var d5100 = document.getElementById("d5100");
d5100.addEventListener("click", fzdjecie2);
d5100.addEventListener("click", fcena2);

function fzdjecie2(){
    document.getElementById("zdjecie").src = "Grafiki/d5100.png";
}
function fcena2(){
    var d5100 = document.getElementById("cena");
    d5100.innerHTML = "25zł";
}

// działania dla 5300
var d5300 = document.getElementById("d5300");
d5300.addEventListener("click", fzdjecie3);
d5300.addEventListener("click", fcena3);

function fzdjecie3(){
    document.getElementById("zdjecie").src = "Grafiki/d53002.png";
}
function fcena3(){
    var d5300 = document.getElementById("cena");
    d5300.innerHTML = "30zł";
}

// działania dla 50
var d50 = document.getElementById("d50");
d50.addEventListener("click", fzdjecie4);
d50.addEventListener("click", fcena4);

function fzdjecie4(){
    document.getElementById("zdjecie").src = "Grafiki/d50.png";
}
function fcena4(){
    var d50 = document.getElementById("cena");
    d50.innerHTML = "30zł";
}

// działania dla 70s
var d70s = document.getElementById("d70s");
d70s.addEventListener("click", fzdjecie5);
d70s.addEventListener("click", fcena5);

function fzdjecie5(){
    document.getElementById("zdjecie").src = "Grafiki/d70s.png";
}
function fcena5(){
    var d70s = document.getElementById("cena");
    d70s.innerHTML = "30zł";
}

// działania dla 90
var d90 = document.getElementById("d90");
d90.addEventListener("click", fzdjecie6);
d90.addEventListener("click", fcena6);

function fzdjecie6(){
    document.getElementById("zdjecie").src = "Grafiki/d90.png";
}
function fcena6(){
    var d90 = document.getElementById("cena");
    d90.innerHTML = "35zł";
}

// działania dla 200
var d200 = document.getElementById("d200");
d200.addEventListener("click", fzdjecie7);
d200.addEventListener("click", fcena7);

function fzdjecie7(){
    document.getElementById("zdjecie").src = "Grafiki/d200.png";
}
function fcena7(){
    var d200 = document.getElementById("cena");
    d200.innerHTML = "40zł";
}

// działania dla 300
var d300 = document.getElementById("d300");
d300.addEventListener("click", fzdjecie8);
d300.addEventListener("click", fcena8);

function fzdjecie8(){
    document.getElementById("zdjecie").src = "Grafiki/d300.png";
}
function fcena8(){
    var d300 = document.getElementById("cena");
    d300.innerHTML = "45zł";
}

// działania dla 7100
var d7100 = document.getElementById("d7100");
d7100.addEventListener("click", fzdjecie9);
d7100.addEventListener("click", fcena9);

function fzdjecie9(){
    document.getElementById("zdjecie").src = "Grafiki/d7100.png";
}
function fcena9(){
    var d7100 = document.getElementById("cena");
    d7100.innerHTML = "60zł";
}

// działania dla 810
var d810 = document.getElementById("d810");
d810.addEventListener("click", fzdjecie10);
d810.addEventListener("click", fcena10);

function fzdjecie10(){
    document.getElementById("zdjecie").src = "Grafiki/d810.png";
}
function fcena10(){
    var d810 = document.getElementById("cena");
    d810.innerHTML = "90zł";
}

// działania dla 4
var d4 = document.getElementById("d4");
d4.addEventListener("click", fzdjecie11);
d4.addEventListener("click", fcena11);

function fzdjecie11(){
    document.getElementById("zdjecie").src = "Grafiki/d4.png";
}
function fcena11(){
    var d4 = document.getElementById("cena");
    d4.innerHTML = "150zł";
}

// działania dla 5
var d5 = document.getElementById("d5");
d5.addEventListener("click", fzdjecie12);
d5.addEventListener("click", fcena12);

function fzdjecie12(){
    document.getElementById("zdjecie").src = "Grafiki/d5.png";
}
function fcena12(){
    var d5 = document.getElementById("cena");
    d5.innerHTML = "300zł";
}