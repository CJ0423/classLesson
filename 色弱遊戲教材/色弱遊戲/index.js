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

startBtn.addEventListener("click", startgame)

// 開始遊戲
function startgame() {

    startBtn.style.display = "none";
    begin = 1;
    if (begin == 1) {
        count()
        update()
    }

}

// 倒數計時
function count() {
    let zero = setInterval(function () {
        i--;
        time.innerHTML = `<div class="time">剩下時間：${i}秒</div>`
        if (i <= 0) {
            clearInterval(zero);
            victory.innerHTML = `恭喜獲得${playingScore}分`
            victory.style.display = "flex";
        }
    }, 1000)

};

// 隨機顏色
//  rgb(44, 95, 95);
//  background-color: white;
// Math.floor(Math.random() * 256);
function update() {
    let i = Math.floor(Math.random() * 255);
    let j = Math.floor(Math.random() * 255);
    let k = Math.floor(Math.random() * 255);
    console.log(i, j, k);
    special = Math.floor(Math.random() * boxCount[x]);
    for (let i = 0; i < pickItem.length; i++) {
        pickItem[i].style.backgroundColor = `rgb(${i}, ${j}, ${k})`;
    }
    pickItem[special].style.backgroundColor = `rgb(${i + 2}, ${j}, ${k})`;
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
    if (howMuchLevel > 8) {
        alert("恭喜全部通關!!")
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
    pickItem[special].style.backgroundColor = `rgb(${ii + 2}, ${jj + 50}, ${kk + 50})`;
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

