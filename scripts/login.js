function login() {
    setCookie('logged', 'true', {secure: true, 'max-age': 3600});
    let logBtn = document.querySelector("#logBtn");
    let nameLogin = document.querySelector("#usernameLogin");
    let passLogin = document.querySelector("#passwordLogin");
    if (nameLogin.value !== '' && passLogin.value !== '') {
        logBtn.href = 'activeLogin.html';
    }
}
function loginChecker() {
    let userLogFale = document.querySelector("#usernameLoginFale");
    let passLogFale = document.querySelector("#passwordLoginFale");
    let nameLogin = document.querySelector("#usernameLogin");
    let passLogin = document.querySelector("#passwordLogin");
    if (nameLogin.value === '') {
        userLogFale.style.visibility = "visible";
    } else {
        userLogFale.style.visibility = "hidden";
    }
    if (passLogin.value === '') {
        passLogFale.style.visibility = "visible";
    } else {
        passLogFale.style.visibility = "hidden";
    }
}