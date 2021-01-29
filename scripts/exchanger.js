'use strict';

let tempo = document.querySelector("#coin_11");
function coinChanger(coin) {
    tempo.style.boxShadow = "0 0 7px 1px #1396cb";
    coin.style.boxShadow = "0 0 7px 2px #3aeb7e";
    tempo = coin;
}

let tempo2 = document.querySelector("#coin_21");
function coinChanger2(coin) {
    tempo2.style.boxShadow = "0 0 7px 1px #1396cb";
    coin.style.boxShadow = "0 0 7px 2px #3aeb7e";
    tempo2 = coin;
}

let refresh = document.querySelector("#walletNExchanger__wallet__wrap__refresh");
function refreshRotate() {
    refresh.style.transition = "all 1s";
    refresh.style.transform = "translate(10px, 15px) rotate(360deg)";
    setTimeout(() => {
        refresh.style.transition = "none";
        refresh.style.transform = "translate(10px, 15px)";
    }, 1000);
}







// function Get(Url){
//     let Httpreq = new XMLHttpRequest();
//     Httpreq.open("GET", Url, false);
//     Httpreq.send(null);
//     return Httpreq.responseText;          
// }

// let json_obj = JSON.parse(Get("http://api.bitcoincharts.com/v1/markets.json"));
// console.log(json_obj);