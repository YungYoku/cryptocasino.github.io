let setting = document.querySelector("#setting");
let settingDroprown = document.querySelector("#setting-droprown");

let isDropDownShowen = false;
function dropdownShow() {
    if(!isDropDownShowen) {
        settingDroprown.style.opacity = "1";
        isDropDownShowen = true;
    } else {
        settingDroprown.style.opacity = "0";
        isDropDownShowen = false;
    }
}