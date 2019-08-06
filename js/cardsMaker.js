//удаление карточек

function deletCards() {
    var deletedLastArray = document.getElementById("blogs-list");
    while (deletedLastArray.firstChild) {
        deletedLastArray.removeChild(deletedLastArray.firstChild);
        document.getElementById("button-add-more-cards").style.display = "flex";
        startPoint = 0;
    }
}

//кнопка для добавления новых карточек

var buttonAddMoreCards = document.getElementById("button-add-more-cards")
buttonAddMoreCards.addEventListener("click", function () {
    if (searchInput === NaN) {
        makeCards(currentInfo);
    } else {
        makeCards(filterArray());
    }
});

//добавление информации

function addInfoForCards(cardElement, data) {
    var newTime = data.aboutTime;
    var newImg = data.imgBlog;
    var newInfo = data.aboutInf;
    var tempInfo = document.getElementsByTagName("template")[0];//какого-то хера template работает только с id-никами
    var cloneTempInfo = tempInfo.content.cloneNode(true);
    cloneTempInfo.getElementById("image").src = `${newImg}`;
    cloneTempInfo.getElementById("info-about").innerHTML = `${newInfo}`;
    cloneTempInfo.getElementById("time").innerHTML = `${newTime}`;
    cardElement.appendChild(cloneTempInfo);
};

//начальные значения для создания карточек

const numbersOfElementsToShow = 5;

let startPoint = 0;

//создание карточек

function makeCards(data) {
    if (data.length == 0) {
        document.getElementById("button-add-more-cards").style.display = "none";
        return;
    }
    const indexToStart = startPoint
    for (var i = indexToStart; i < numbersOfElementsToShow + indexToStart; i++) {
        var containerToCreat = document.createElement('div');
        containerToCreat.id = "blog-card";
        var blogsList = document.getElementById('blogs-list');
        blogsList.appendChild(containerToCreat);
        addInfoForCards(containerToCreat, data[i]);
        startPoint += 1;
        if (i == data.length - 1) {
            document.getElementById("button-add-more-cards").style.display = "none";
            break;
        }
    }
};

makeCards(currentInfo);