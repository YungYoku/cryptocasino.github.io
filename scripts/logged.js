let setting = document.querySelector("#setting");
let settingDroprown = document.querySelector("#setting-droprown");

let isDropDownShowen = false;
function dropdownShow() {
    if(!isDropDownShowen) {
        settingDroprown.style.display = "block";
        settingDroprown.style.opacity = "1";
        isDropDownShowen = true;
    } else {
        settingDroprown.style.opacity = "0";
        setTimeout(()=>{
            settingDroprown.style.display = "none";
            isDropDownShowen = false;
        }, 1000);
    }
}

document.body.addEventListener("click", (e) => {
    let target = e.target;
    if (target.id === "setting") {
        return;
    }

    settingDroprown.style.opacity = "0";
    setTimeout(()=>{
        settingDroprown.style.display = "none";
        isDropDownShowen = false;
    }, 1000);
});