function sortByAlphabet(dataToSort) {
    function compareWords(a, b) {
        if (a.aboutInf < b.aboutInf) {
            return -1;
        }
        if (a.aboutInf > b.aboutInf) {
            return 1;
        }
        return 0;
    }
    return dataToSort.sort(compareWords);
};

function sortByNumber(dataToSort) {
    function compareTime(timeA, timeB) {
        return timeB.aboutTime - timeA.aboutTime;
    };

    return dataToSort.sort(compareTime);
};

function sortByDefault(dataToSort) {
    function compareDefault(obj1, obj2) {
        const indexInDefault1 = info.findIndex((elem) => elem.aboutInf === obj1.aboutInf);
        const indexInDefault2 = info.findIndex((elem) => elem.aboutInf === obj2.aboutInf);
        return indexInDefault1 - indexInDefault2;
    };
    return dataToSort.sort(compareDefault);
};

var select = document.getElementById('select-sort');

select.addEventListener("change", function () {
    var option = select.options[select.selectedIndex].value;
    deletCards()
    if (option === "value1") {
        currentInfo = sortByNumber(currentInfo);
    }
    if (option === "value2") {
        currentInfo = sortByAlphabet(currentInfo);
    }
    if (option === "value3") {
        currentInfo = sortByDefault(currentInfo)
    }
    makeCards(currentInfo)
});