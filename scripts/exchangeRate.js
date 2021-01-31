let crypto_11 = document.querySelector("#crypto_11");
let crypto_12 = document.querySelector("#crypto_12");
let crypto_13 = document.querySelector("#crypto_13");
let crypto_14 = document.querySelector("#crypto_14");
let crypto_15 = document.querySelector("#crypto_15");
let crypto_16 = document.querySelector("#crypto_16");
let crypto_17 = document.querySelector("#crypto_17");
let cryptoDropbtn = document.querySelector("#cryptoRate__TradeInfo__Pick__dropbtn");

let crypto_21 = document.querySelector("#crypto_21");
let crypto_22 = document.querySelector("#crypto_22");
let crypto_23 = document.querySelector("#crypto_23");
let crypto_24 = document.querySelector("#crypto_24");
let crypto_25 = document.querySelector("#crypto_25");
let crypto_26 = document.querySelector("#crypto_26");
let crypto_27 = document.querySelector("#crypto_27");
let cryptoDropbtn2 = document.querySelector("#cryptoRate__TradeInfo__Pick__dropbtn2");

function cryptoChanger(cryptoNum) {
    let tempo = cryptoNum.innerHTML;
    cryptoNum.innerHTML = cryptoDropbtn.innerHTML;
    cryptoDropbtn.innerHTML = tempo;
}

function cryptoChanger2(cryptoNum) {
    let tempo = cryptoNum.innerHTML;
    cryptoNum.innerHTML = cryptoDropbtn2.innerHTML;
    cryptoDropbtn2.innerHTML = tempo;
}