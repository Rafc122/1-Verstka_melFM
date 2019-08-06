var searchInput = document.getElementById("search-input")
searchInput.addEventListener("input", function () {
    deletCards();

    var filteredInfo = filterArray()

    makeCards(filteredInfo);
});


function filterArray() {
    coincidence = [];
    var filter = document.getElementById("search-input").value.toUpperCase();
    for (var i = 0; i < currentInfo.length; i++) {
        var infOfTheCard = currentInfo[i].aboutInf;
        if (infOfTheCard.toUpperCase().indexOf(filter) > -1) {
            coincidence.push(currentInfo[i]);
        }
    }
    return coincidence
}