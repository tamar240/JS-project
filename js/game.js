const cards = [
    {
        type: "1",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic1.jpg",
    },
    {
        type: "2",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic2.jpg",
    },
    {
        type: "3",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic3.jpg",
    }, {
        type: "4",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic4.jpg",
    }, {
        type: "5",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic5.jpg",
    }, {
        type: "6",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic6.jpg",
    }, {
        type: "7",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic7.jpg",
    }, {
        type: "8",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic8.jpg",
    }, {
        type: "9",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic9.jpg",
    }, {
        type: "10",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic10.jpg",
    }, {
        type: "11",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic11.jpg",
    }, {
        type: "12",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic12.jpg",
    }, {
        type: "13",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic13.jpg",
    }, {
        type: "14",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic14.jpg",
    }, {
        type: "15",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic15.jpg",
    }, {
        type: "16",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic16.jpg",
    }, {
        type: "17",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic17.jpg",
    }, {
        type: "18",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic18.jpg",
    }, {
        type: "19",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic19.jpg",
    }, {
        type: "20",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic20.jpg",
    }, {
        type: "21",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic21.jpg",
    }, {
        type: "22",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic22.jpg",
    }, {
        type: "23",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic23.jpg",
    }, {
        type: "24",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic24.jpg",
    }, {
        type: "25",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic25.jpg",
    },
    {
        type: "26",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic26.jpg",
    }, {
        type: "27",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic27.jpg",
    }, {
        type: "28",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic28.jpg",
    }, {
        type: "29",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic29.jpg",
    }, {
        type: "30",
        backpic: "../images/backpic.jpg",
        frontpic: "../images/frontpic30.jpg",
    },
];



const fCreateTable = () => {
    var tblDiv = document.getElementById("tblDiv"),
        oTable = document.createElement("TABLE"),
        oTBody = document.createElement("TBODY"),
        oTD, oTR;
    let count = 0;
    oTable.appendChild(oTBody);
    for (var i = 0; i < nrow; i++) {
        oTR = document.createElement("TR");
        for (var j = 0; j < ncol; j++) {
            oTD = document.createElement("TD");
            var img = document.createElement('img');
            const [backLink] = cards;
            img.src = backLink.backpic;
            img.classList.add("imgsClass");
            img.classList.add(`_${thisGameCards[count].type}`);
            img.classList.add(`${thisGameCards[count].frontpic}`);
            count++;
            oTD.appendChild(img);
            oTR.appendChild(oTD);
        }
        oTBody.appendChild(oTR);
    }
    tblDiv.appendChild(oTable);
}

const fullCardsArr = (arr, count) => {

    for (let i = 0; i < count; i++) {
        arr.push(cards[i]);
    }
    const copyarr = arr.concat(arr);
    return copyarr;
}


const getRandom = (min, max) => {
    return Math.floor(Math.random() * max - min + 1) + min - 1;
}


const mixArrCards = () => {

    for (let i = 0; i < thisGameCards.length; i++) {
        let randIndex = getRandom(0, thisGameCards.length - 1);
        let temp = thisGameCards[randIndex];
        thisGameCards[randIndex] = thisGameCards[i];
        thisGameCards[i] = temp;

    }
}

//המשתנים שלנו

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const nrow = new URLSearchParams(location.search).get("nrow");
const ncol = new URLSearchParams(location.search).get("ncol");
let countDiscover = 0;
let firstCarsd;
let score = 0;
let amountCards = nrow * ncol;
let maxScore = (amountCards / 2) * 10;
let thisGameCards = [];
let thistype;
let prevtype;
let timeLeft = 0;
//התחלת המשחק:
thisGameCards = fullCardsArr(thisGameCards, amountCards / 2);//הקצאת מערך של קלפים לפי קלט מהמשתמש
mixArrCards();//ערבוב הקלפים
fCreateTable(nrow, ncol);//השמה של הקלפים על המסך

const turnOffPairOpenCards = (type) => {
    // שליפת כל המפתחות של הקלפים
    const cardKeys = Object.keys(cards);

    // עבור כל אלמנט שקשור לסוג (class)
    Array.from(document.querySelectorAll("." + type)).forEach((e) => {
        // הנחה שהתמונה האחורית נמצאת באובייקט הקלפים הראשון
        e.src = cards[cardKeys[0]].backpic; // גישה לתמונה האחורית
        e.id = ""; // איפוס ה-ID
    });
}

const turnOffCards = () => {
    setTimeout(() => {

        turnOffPairOpenCards(prevtype);
        turnOffPairOpenCards(thistype);
        countDiscover = 0;
    }, 2000);
}

const statusCards = (e) => {
    let clickedElementClass;
    let prevE;
    if (countDiscover == 0) {
        //   console.log(e.currentTarget.classList);
        prevtype = (Array.from(e.currentTarget.classList))[1];
        countDiscover++;
    }
    else {
        countDiscover++;
        //  console.log(e.currentTarget.classList[1]);
        thistype = (Array.from(e.currentTarget.classList))[1];//.substring(1);
        if (thistype == prevtype) {

            score += 10;
            document.querySelector("#counterScore").innerHTML = score;
            document.querySelector("#singleWin").play();
            setTimeout(() => {
                Array.from(document.querySelectorAll(`.${thistype}`)).forEach(e => { e.remove() });
                countDiscover = 0;
                isWin();

            }, 2 * SECOND);//ולבנות פונקציה שבודקת ניצחון וצריכה להסיר את הקלפים הזהים

        }
        else {

            turnOffCards();
            setTimeout(() => document.querySelector("#notSame").play(), 500);
        }
    }
}



//הופך את התמונה 
const images = document.querySelectorAll(".imgsClass");
images.forEach(image => {//סריקה של התמונות ע"מ למצוא אירוע לחיצה
    image.addEventListener("click", func = (e) => {
        if (countDiscover < 2 && timeLeft > 0) {
            if (!(e.currentTarget.id == "open")) {
                document.querySelector("#bip").play();
                const srcImgFromClass = e.currentTarget.classList[2];
                e.currentTarget.src = srcImgFromClass;
                // console.log(e);
                e.currentTarget.id = "open";
                statusCards(e);
            }
        }
    });
});

if (JSON.parse(localStorage.getItem("maxScores")) == null) {
    let maxScoresArr = [];
    let jsonMaxScoresArr = JSON.stringify(maxScoresArr);
    localStorage.setItem("maxScores", jsonMaxScoresArr);
}
const designfinal = (element) => {

    element.style.fontSize = "300px"; // גודל אותיות גדול
    element.style.fontWeight = "bolder"; // הפונט יהיה עבה
    element.style.backgroundColor = "rgba(240, 240, 240, 0.7)"; // צבע רקע אפור
    element.style.textAlign = "center"; // טקסט במרכז
    element.style.textAlign = "center"; // טקסט במרכז
    element.style.position = "absolute"; // מיקום מוחלט
    element.style.top = "100px"; // מיקום אנכי
    element.style.left = "50px"; // מיקום אופקי
}
const isWin = () => {
    if (score == maxScore) {

        score += timeLeft;
        document.querySelector("#finalWin").play();
        let arr = JSON.parse(localStorage.getItem("maxScores")); // אם אין ערך, נתחיל עם מערך ריק
        arr.push(score);
        arr.sort((a1, a2) => a2 - a1); // נמיין את המערך של הניקוד מהגדול לקטן כדי שהמקום הראשון יהיה הדרוג הגבוהה ביותר
        alert(`Your rating on our champions list is ${arr.indexOf(score) + 1} !!!!!!!`);
        localStorage.setItem("maxScores", JSON.stringify(arr));
        const element = document.querySelector("#fainalGame");
        element.innerHTML = "you win:)";
        designfinal(element);
        clearInterval(showCountDown);
    } else if (timeLeft == 0) {

        document.querySelector("#gameOver").play();
        element = document.querySelector("#fainalGame");
        element.innerHTML = "failed:(";
        designfinal(element);
    }
}

document.querySelector("#newGame").addEventListener("click", () => { location.href = location.href });
document.querySelector("#changAmountCards").addEventListener("click", () => { location.href = "../home.html" });
document.querySelector("#startGame").addEventListener("click", () => {
    timeLeft = ((amountCards / 2) * 20);//להחליט כמה זמן לכל משחק 
    const showCountDown = setInterval(() => {
        let countDown = document.querySelector("#countDown");
        countDown.innerHTML = timeLeft;
        if (timeLeft == 0) {
            isWin();
            clearInterval(showCountDown);
        }
        else if (timeLeft < 10) {
            //countDown.;//לשנות את הצבע של הספרות לצבע אדום
            document.querySelector("#timeLeft").play();
        }
        timeLeft--;
    }, 1000);

});

[...document.querySelectorAll(".btnsGame")].map(e => {
    e.addEventListener("mouseover", () => {
        e.style.backgroundColor = " rgb(154, 143, 143)";
    })
    e.addEventListener("mouseout", () => {
        e.style.backgroundColor = "aliceblue";
    })
})

