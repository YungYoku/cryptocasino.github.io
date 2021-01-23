let logged = false;

function login() {
    logged= true;
    let logBtn = document.querySelector("#logBtn");
    let nameLogin = document.querySelector("#usernameLogin");
    let passLogin = document.querySelector("#passwordLogin");
    if(nameLogin.value !== '' && passLogin.value !== '') {
        logBtn.href = 'index.html';
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