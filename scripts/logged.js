'use strict';

let setting = document.querySelector("#setting");
let settingDroprown = document.querySelector("#setting-droprown");

let isDropDownShowen = false;
let canShow = true;
function dropdownShow() {
    if(canShow) {
        canShow = false;
        if(!isDropDownShowen) {
            settingDroprown.style.display = "block";
            setTimeout(()=>{
                settingDroprown.style.opacity = "1";
                isDropDownShowen = true;
                setTimeout(()=>{
                    canShow = true;
                }, 300);
            }, 100);
        } else {
            settingDroprown.style.opacity = "0";
            setTimeout(()=>{
                settingDroprown.style.display = "none";
                isDropDownShowen = false;
                canShow = true;
            }, 400);
        } 
    }
}

document.body.addEventListener("click", (e) => {
    if(canShow) {
        canShow = false;
        let target = e.target;
        if (target.id === "setting") {
            return;
        }

        settingDroprown.style.opacity = "0";
        setTimeout(()=>{
            settingDroprown.style.display = "none";
            isDropDownShowen = false;
            canShow = true;
        }, 400);
    }
});