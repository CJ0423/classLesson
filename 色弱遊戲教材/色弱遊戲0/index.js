function getDom(dom, a = 0) {
    if (a == 2) {
        return Array.from(document.querySelectorAll(dom));
    }
    return document.querySelector(dom);
};
let special = 0;
let level = 0;
let startBtn = getDom(".start-btn");
let time = getDom(".time");
let i = 60;
let victory = getDom(".victory");
let victoryScore = 0;
let score = getDom(".score");
let playingScore = 0;
let pickItem = getDom(".pick-item", 2);
let boxCount = [4, 9, 16, 25, 36, 49, 64, 81];
let boxCountForWidth = [2, 3, 4, 5, 6, 7, 8, 9];
let box = getDom(".box");
let levelText = getDom(".level-text");
let begin = 0;
let x = 0;
let howMuchLevel = 1;
let again = getDom(".again");
let game = getDom(".game");

startBtn.addEventListener("click", startgame)

// 開始遊戲
function startgame() {
    startBtn.style.display = "none";
    begin = 1;
    i = 60;
    if (begin == 1) {
        count()
        update()
    }

}
// 重製遊戲----
again.addEventListener("click", reset);

function reset() {

    again.style.display = "none";
    victory.style.display = "none";
    startBtn.style.display = "flex";
    box.innerHTML = "";
    playingScore = 0;
    begin = 1;
    i = 60;
    time.innerHTML = `<div class="time">剩下時間：60秒</div>`;
    score.innerHTML = `<div class="score">目前分數:0</div>`;
    x = 0;
    howMuchLevel = 1;
    levelText.innerHTML = `level:${howMuchLevel}`
    let ii = Math.floor(Math.random() * 255);
    let jj = Math.floor(Math.random() * 255);
    let kk = Math.floor(Math.random() * 255);
    for (let i = 0; i < boxCount[x]; i++) {
        box.innerHTML += `<div style="width:${100 / (boxCountForWidth[x])}%; height:${100 / boxCountForWidth[x]}%;background-color:white"class="pick-item"></div>`
    }
    pickItem = Array.from(document.querySelectorAll(".pick-item"));
    pickItem[special].style.backgroundColor = `rgb(${ii + 20}, ${jj + 20}, ${kk + 20})`;

    startBtn.addEventListener("click", startgame);

}

// 倒數計時
function count() {
    let zero = setInterval(function () {
        i--;
        time.innerHTML = `<div class="time">剩下時間：${i}秒</div>`
        if (i <= 0 || playingScore >= 24) {
            clearInterval(zero);
            victory.innerHTML = `恭喜獲得${playingScore}分`
            victory.style.display = "flex";
            again.style.display = "block";
            game.style.backgroundColor = "black";
        }
    }, 1000)

};

// 隨機顏色
//  rgb(44, 95, 95);
//  background-color: white;
// Math.floor(Math.random() * 256);
function update() {
    let iii = Math.floor(Math.random() * 255);
    let jjj = Math.floor(Math.random() * 255);
    let kkk = Math.floor(Math.random() * 255);
    let specialI = 0;
    let specialJ = 0;
    let specialK = 0;
    console.log(iii, jjj, kkk);
    special = Math.floor(Math.random() * boxCount[x]);

    for (let i = 0; i < pickItem.length; i++) {
        pickItem[i].style.backgroundColor = `rgb(${iii}, ${jjj}, ${kkk})`;
        specialI = iii;
        specialJ = jjj;
        specialK = kkk;
    }
    pickItem[special].style.backgroundColor = `rgb(${specialI + 20}, ${specialJ + 20}, ${specialK + 20})`;
}


// 點擊判斷是否正確
box.addEventListener("click", function (e) {
    if ((e.target == pickItem[special]) && i && begin) {
        console.log("正確")
        playingScore++
        score.innerHTML = `目前分數:${playingScore}`
        update()
        if (playingScore % 3 == 0) {
            createDiv()
        }
    }


})

// 創造div
function createDiv() {
    box.innerHTML = "";
    x++;
    howMuchLevel++;
    levelText.innerHTML = `level:${howMuchLevel}`
    let ii = Math.floor(Math.random() * 255);
    let jj = Math.floor(Math.random() * 255);
    let kk = Math.floor(Math.random() * 255);
    for (let i = 0; i < boxCount[x]; i++) {
        box.innerHTML += `<div style="width:${100 / (boxCountForWidth[x])}%; height:${100 / boxCountForWidth[x]}%;background-color:rgb(${ii}, ${jj}, ${kk})"class="pick-item"></div>`
    }
    pickItem = Array.from(document.querySelectorAll(".pick-item"));
    pickItem[special].style.backgroundColor = `rgb(${ii + 20}, ${jj + 20}, ${kk + 20})`;
}


/*    if (parseInt(playingScore) % 3 == 0 && i && begin) {
        box.innerHTML = "";
        x++;
        howMuchLevel++;
        levelText.innerHTML = `level:${howMuchLevel}`
        let ii = Math.floor(Math.random() * 255);
        let jj = Math.floor(Math.random() * 255);
        let kk = Math.floor(Math.random() * 255);
        let whichOne = Math.floor(Math.random() * boxCount[x]);
        for (let i = 0; i < boxCount[x]; i++) {
            box.innerHTML += `<div style="width:${100 / (boxCountForWidth[x])}%; height:${100 / boxCountForWidth[x]}%;background-color:rgb(${ii}, ${jj}, ${kk})"class="pick-item"></div>`

        }
        // console.log(whichOne)
        pickItem = Array.from(document.querySelectorAll(".pick-item"));
        // console.log(pickItem[whichOne])
        pickItem[whichOne].style.backgroundColor = `rgb(${ii + 50}, ${jj + 50}, ${kk + 50})`
        if (e.target == pickItem[whichOne]) {
            console.log("正確")
            playingScore++
            score.innerHTML = `目前分數:${playingScore}`
        }
    }*/


// <div style="width: 50%; height: 50%; border: 1px solid black; background-color: white;">Content goes here</div>
