let logged = false;

function registration() {
    logged = true;
    export{logged};
    let regBtn = document.querySelector("#regBtn");
    let email = document.querySelector("#emailReg");
    let nameReg = document.querySelector("#usernameReg");
    let passReg = document.querySelector("#passwordReg");
    let passRepeatReg = document.querySelector("#passwordRepeatReg");
    if(email.value !== '' && nameReg.value !== '' && passReg.value !== '' && passRepeatReg.value !== ''&& passReg.value === passRepeatReg.value) {
        regBtn.href = 'index.html';
    }
}
function registrationChecker() {
    let usernameRegFale = document.querySelector("#usernameRegFale");
    let emailRegFale = document.querySelector("#emailRegFale");
    let passwordRegFale = document.querySelector("#passwordRegFale");
    let passwordRepeatRegFale = document.querySelector("#passwordRepeatRegFale");
    let email = document.querySelector("#emailReg");
    let nameReg = document.querySelector("#usernameReg");
    let passReg = document.querySelector("#passwordReg");
    let passRepeatReg = document.querySelector("#passwordRepeatReg");
    if (email.value == '') {
        emailRegFale.style.visibility = "visible";
    } else {
        emailRegFale.style.visibility = "hidden";
    }
    if (nameReg.value == '') {
        usernameRegFale.style.visibility = "visible";
    }else {
        usernameRegFale.style.visibility = "hidden";
    }
    if (passReg.value == '') {
        passwordRegFale.innerHTML = "Введите пароль";
        passwordRegFale.style.visibility = "visible";
    } else {
        passwordRegFale.style.visibility = "hidden";
    }
    if (passRepeatReg.value == '') {
        passwordRepeatRegFale.innerHTML = "Подтвердите пароль";
        passwordRepeatRegFale.style.visibility = "visible";
    } else {
        passwordRepeatRegFale.style.visibility = "hidden";
    }
    if(passReg.value !== '' && passRepeatReg.value !== '') {

    }
    if(passReg.value !== passRepeatReg.value) {
        passwordRegFale.innerHTML = "Пароли не совпадают";
        passwordRepeatRegFale.innerHTML = "Пароли не совпадают";
        passwordRegFale.style.visibility = "visible";
        passwordRepeatRegFale.style.visibility = "visible";
    }
}