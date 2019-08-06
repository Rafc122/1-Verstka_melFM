window.onscroll = function () {
    showButtonToTheTop()
};

function showButtonToTheTop() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("up-button").style.display = "block";
    } else {
        document.getElementById("up-button").style.display = "none";
    }
};

function topWebPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

var upButton = document.getElementById("up-button")

upButton.addEventListener("click", function () {
    topWebPage();
})