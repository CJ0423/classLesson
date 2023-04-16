function getDom(dom, all) {
    if (all == 2) { return Array.from(document.querySelectorAll(dom))}
    
    return document.querySelector(dom)
}

let level = 0
let howMuchBoxWidth = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
let howMuchBox = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let box = getDom(".box")
let startBtn=getDom(".start-btn")
let time=getDom(".time")
let timeNumber=60;
let levelText=getDom(".level-text")
let specal=0
let theTime=0
function isOver(gameOver){
if(gameOver){
    level=0
    return true
}
return false
}
function startGame() {
    if(isOver()){
        clearInterval(theTime)//不要在倒數了。
        timeNumber=60;
        startBtn.style.display="block"
        console.log("你輸了")
        return
    }
    if (isWin()) {
        startBtn.style.display="block"
        timeNumber=60;
        console.log("恭喜過關")
        return
    }
    else {
        level++
        levelText.textContent=`level:${level}`
    }
    if(level==1){
        startBtn.style.display="none"
        timer()
    }
    update()
    addSomething()
}
function isWin() {
    if (level >= 25) {
        level=0
        clearInterval(theTime)
        return true
    }
    else {
        return false
    }
}
function update() {
    let i = Math.round(level / 3)
    specal = Math.round(Math.random() * (howMuchBoxWidth[i]-1))
    box.innerHTML = ``
    console.log(i)
    console.log(specal)
    let r=Math.floor(Math.random()*235)
    let g=Math.floor(Math.random()*235)
    let b=Math.floor(Math.random()*235)

    let color= ` background-color:rgb(${r},${g},${b});`
    let specialColor= ` background-color:rgb(${r+10},${g+10},${b+10});`
    for (let j = 0; j < howMuchBoxWidth[i]; j++) {
        if(j==specal){
            console.log("有進來嗎")
            box.innerHTML += `<div style='${specialColor} width:${100 / howMuchBox[i]}%;height:${100 / howMuchBox[i]}%;'  class="pick-item">
            </div>`
        }
        else{
        box.innerHTML += `<div style='${color} width:${100 / howMuchBox[i]}%;height:${100 / howMuchBox[i]}%;'  class="pick-item">
        </div>`
        }
    }
}
function timer(){
   theTime= setInterval(()=>{
        timeNumber--
        time.textContent=`剩下時間：${timeNumber}秒`    },1000)
}
function  addSomething(){
    let pickItem = getDom(".pick-item", 2)
    // pickItem=Array.from(pickItem)

    pickItem.forEach((element,index) => {
        if(index==specal){
            element.addEventListener("click",startGame)
        }
        else{
        element.addEventListener("click",wrong)}
    });
}
function wrong(){
    console.log("答錯了")
}
startBtn.addEventListener("click",startGame)
