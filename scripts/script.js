function logChecker() {
    let backToMenu = document.querySelector("#backToMenu");
    if(getCookie("logged") === "true") {
        backToMenu.href = "activeLogin.html";
    }
    else {
        backToMenu.href = "index.html";
    }
}

let lang_1 = document.querySelector("#lang_1");
let lang_2 = document.querySelector("#lang_2");
let lang_3 = document.querySelector("#lang_3");
let lang_4 = document.querySelector("#lang_4");
let lang_5 = document.querySelector("#lang_5");
let dropbtn = document.querySelector("#dropbtn");

function langChanger(langNum) {
    let tempo = langNum.innerHTML;
    langNum.innerHTML = dropbtn.innerHTML;
    dropbtn.innerHTML = tempo;
}