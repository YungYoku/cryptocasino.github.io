let game1_BCH = document.querySelector("#game_1_window__levels__BCH");
let game1_XRP = document.querySelector("#game_1_window__levels__XRP");
let game1_LTC = document.querySelector("#game_1_window__levels__LTC");
let game1_ETH = document.querySelector("#game_1_window__levels__ETH");
let game1_BTC = document.querySelector("#game_1_window__levels__BTC");

let game1_tokens = [game1_BCH, game1_XRP, game1_LTC, game1_ETH, game1_BTC];

let game_1_window__game__1 = document.querySelector("#game_1_window__game__1");
let game_1_window__game__2 = document.querySelector("#game_1_window__game__2");
let game_1_window__game__3 = document.querySelector("#game_1_window__game__3");
let game_1_window__game__4 = document.querySelector("#game_1_window__game__4");
let game_1_window__game__5 = document.querySelector("#game_1_window__game__5");
let game_1_window__game__6 = document.querySelector("#game_1_window__game__6");
let game_1_window__game = document.querySelector("#game_1_window__game");
let game_1_window__game__wrap = document.querySelector("#game_1_window__game__wrap");

let levelTempo = 1;
let game1FirstClickOnLevel = true;
function game_1_levelsChanger(level) {
    if(game1FirstClickOnLevel) {
        if(level === 1) levelTempo = 5;
        else if(level === 5) levelTempo = 1;
        game1FirstClickOnLevel = false;
    }
    switch(level) {
        case 1:
            game1_BCH.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_BCH.style.border = "none";
            game1_BCH.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";

            game_1_window__game.style.width = "300px";
            game_1_window__game.style.gridTemplate = "auto / 1fr 1fr";
            game_1_window__game.style.gridTemplateAreas = "'game_1_window__game__1 game_1_window__game__2'";
            game_1_window__game__3.style.display = "none";
            game_1_window__game__wrap.style.width = "420px";
            break;
        case 2:
            game1_XRP.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_XRP.style.border = "none";
            game1_XRP.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            
            game_1_window__game.style.width = "470px";
            game_1_window__game.style.gridTemplate = "auto / 1fr 1fr 1fr";
            game_1_window__game.style.gridTemplateAreas = "'game_1_window__game__1 game_1_window__game__2 game_1_window__game__3'";
            game_1_window__game__3.style.display = "grid";
            game_1_window__game__wrap.style.width = "570px";
            break;
        case 3:
            game1_LTC.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_LTC.style.border = "none";
            game1_LTC.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 4:
            game1_ETH.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_ETH.style.border = "none";
            game1_ETH.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 5:
            game1_BTC.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_BTC.style.border = "none";
            game1_BTC.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
    }
    levelTempo = level;
}