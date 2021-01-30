let game1_EOS = document.querySelector("#game_1_window__levels__EOS");
let game1_BCH = document.querySelector("#game_1_window__levels__BCH");
let game1_XRP = document.querySelector("#game_1_window__levels__XRP");
let game1_LTC = document.querySelector("#game_1_window__levels__LTC");
let game1_ETH = document.querySelector("#game_1_window__levels__ETH");
let game1_BTC = document.querySelector("#game_1_window__levels__BTC");

let game1_tokens = [game1_EOS, game1_BCH, game1_XRP, game1_LTC, game1_ETH, game1_BTC];

let levelTempo = 1;
let game1FirstClickOnLevel = true;
function game_1_levelsChanger(level) {
    if(game1FirstClickOnLevel) {
        levelTempo = level - 1;
        game1FirstClickOnLevel = false;
    }
    switch(level) {
        case 1:
            game1_EOS.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_EOS.style.border = "none";
            game1_EOS.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 2:
            game1_BCH.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_BCH.style.border = "none";
            game1_BCH.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 3:
            game1_XRP.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_XRP.style.border = "none";
            game1_XRP.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 4:
            game1_LTC.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_LTC.style.border = "none";
            game1_LTC.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 5:
            game1_ETH.style.boxShadow = "0 0 7px 4px rgb(58, 235, 126)";
            game1_ETH.style.border = "none";
            game1_ETH.style.transform = "scale(1.2)";
            game1_tokens[levelTempo-1].style.boxShadow = "none";
            game1_tokens[levelTempo-1].style.border = "3px solid #1396cb";
            game1_tokens[levelTempo-1].style.transform = "none";
            break;
        case 6:
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