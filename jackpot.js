let jackpotAmount = document.querySelector("#jackpotMoney");

let jackpotNum1 = document.querySelector("#jackpotMoney_num1");
let jackpotNum2 = document.querySelector("#jackpotMoney_num2");
let jackpotNum3 = document.querySelector("#jackpotMoney_num3");

jackpotAmountTempo1 = 0;
jackpotAmountTempo2 = 0;
jackpotAmountTempo3 = 0;

jackpotNum1.style.animation = "numGolo 5s infinite";
jackpotNum2.style.animation = "none";
jackpotNum3.style.animation = "none";

function jackpotAmountCounter() {
    jackpotNum1.style.animation = "numGolo 5s infinite";
    jackpotAmountTempo1++;
    if(jackpotAmountTempo1 == 10) {
        jackpotAmountTempo1 = 0;
        jackpotAmountTempo2++;
        jackpotNum2.style.animation = "numGoloAnother 5s infinite";
        setTimeout(() => {
            jackpotNum2.style.animation = "none";
        }, 5000);
    }
    if(jackpotAmountTempo2 == 10) {
        jackpotAmountTempo2 = 0;
        jackpotAmountTempo3++;
        jackpotNum3.style.animation = "numGoloAnother 5s infinite";
        setTimeout(() => {
            jackpotNum3.style.animation = "none";
        }, 5000);
    }
    jackpotNum1.innerHTML = jackpotAmountTempo1;
    jackpotNum2.innerHTML = jackpotAmountTempo2;
    jackpotNum3.innerHTML = jackpotAmountTempo3;
    setTimeout(() => {
        jackpotNum1.style.animation = "none";
    }, 5000);
    setTimeout(jackpotAmountCounter, 5000);
}
setTimeout(jackpotAmountCounter, 5000);