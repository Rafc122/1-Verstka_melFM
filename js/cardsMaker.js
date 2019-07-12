var info = [
    {
        imgBlog: "https://picsum.photos/id/1005/5760/3840",
        aboutInf: "Типичная фотография с ...",
        aboutTime: "324 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1/200/300",
        aboutInf: "Человек работает на выключенном ноутбуке",
        aboutTime: "32422 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1000/5626/3635",
        aboutInf: "Крест на горе",
        aboutTime: "34 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/103/2592/1936",
        aboutInf: "Ноги",
        aboutTime: "24 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1033/2048/1365",
        aboutInf: "Эксколаторы выглядят отлично",
        aboutTime: "3 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1038/3914/5863",
        aboutInf: "Ярмарка тщеславия в школе: конкурсы, проекты, снова конкурсы",
        aboutTime: "14 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1035/5854/3903",
        aboutInf: "6 способов помочь детям полюбить чтение",
        aboutTime: "422 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1042/3456/5184",
        aboutInf: "Когда учитель говорит девочкам 'Никогда' ",
        aboutTime: "4 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1079/4496/3000",
        aboutInf: "Человек работал на выключенном ноутбуке и прозрел",
        aboutTime: "2 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1082/5416/3611",
        aboutInf: "Крест на горе",
        aboutTime: "84 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/1084/4579/3271",
        aboutInf: "Моржи",
        aboutTime: "64 ч."
    },
    {
        imgBlog: "https://picsum.photos/id/121/1600/1067",
        aboutInf: "Красивые горы",
        aboutTime: "34 ч."
    }
];

function getInfo() {
    var tempInfo = document.getElementById('infoForCard');
    var clon = tempInfo.content.cloneNode(true);
    document.body.appendChild(clon);
}

function addInfoForCards(cardElement){
    var newTime = info[i].aboutTime;
    var newImg = info[i].imgBlog;
    var newInfo = info[i].aboutInf;
    cardElement.innerHTML=`
        <a class="img-blog">
            <img src="${newImg}" height="220px" width="100%" alt="">
        </a>
        <a class="titles">БЛОГ</a>
        <a class="info-about">${newInfo}</a>
        <a class="times-view">
            <i class="fas fa-history"></i>
            <span>${newTime}</span>
        </a>
    `
}

const numbersOfElementsToShow=5;

let startPoint=0;

function makeCard () {
    const indexToStart = startPoint
    for (i=indexToStart; i<numbersOfElementsToShow+indexToStart; i++) {
        if (i >= info.length) {
            break;
        }
        var containerToCreat=document.createElement('div');
        containerToCreat.className = "blog-card";
        var blogsList = document.getElementById('blogs-list');
        blogsList.appendChild(containerToCreat);
        addInfoForCards(containerToCreat);
        startPoint += 1
    }
    
    console.log
}

makeCard ();

button_styles.addEventListener("click", function() {
 makeCard()
});
