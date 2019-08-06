var exitLogin = document.getElementById("exit-from-login-form")

function exitFromLogin() {
    document.getElementById("login-form").style.display = "none"
}

exitLogin.addEventListener("click", function () {
    exitFromLogin()
})

var entranceInLogin = document.getElementById("entrance")

function displayLogin(e) {
    document.getElementById("login-form").style.display = "block"
    e.stopPropagation();
}

entranceInLogin.addEventListener("click", function (e) {
    displayLogin(e);
})

document.addEventListener("click", function (e) {
    var loginForm = document.getElementById('login-form');
    debugger
    var displayFormLogin = loginForm.style.display;
    if (loginForm.contains(e.target)) {
        if (exitLogin.contains(e.target)) {
            exitFromLogin()
        } else {
            displayLogin()
        }
    } else if (displayFormLogin=="block") {
        exitFromLogin()
    }
})

//displayFormLogin