function getDom(dom){
    return document.querySelector(dom)
}

const choseYear=getDom(".chose-year")
console.log(choseYear)

// 在用appendchild之前你需要先創造一個，因此
// const optionYear1=document.createElement("option")
// const optionYear2=document.createElement("option")
// optionYear1.textContent=1993
// optionYear1.value=1993

// optionYear2.textContent=1993
// optionYear2.value=1992
// choseYear.appendChild(optionYear1)
// choseYear.appendChild(optionYear2)

// 取得日期的方法
const text= Date()
console.log(text)

const currentYear =new Date().getFullYear()
const currentMonth =new Date().getMonth()+1
const currentDate =new Date().getDate()
const currentDay =new Date().getDay()

console.log(currentYear)
console.log(currentMonth)
console.log(currentDate)
console.log(currentDay)

// 兩大基本技術都有了之後我們就可以 利用for迴圈來做點我們想做的事情了
const yearOption=[]

for(let i=0;i<100;i++){
    choseYear.innerHTML+=`<option>${currentYear-i}</option>`
}
for(let i=0;i<100;i++){
    yearOption[i]=document.createElement("option")
    yearOption[i].textContent=currentYear-i
    yearOption[i].value=currentYear-i
    choseYear.appendChild(yearOption[i])
}
// // 正則表達式 要進行正則的有 手機號碼 電子信箱 姓名
const cname=getDom(".cname")
const cellphone=getDom(".cellphone")
const email=getDom(".email")

const cellphoneRegex=/^09[0-9]{8}$/ 

console.log(cname)
console.log(cellphone)
console.log(email)

cellphone.addEventListener("input",isPhoneFUnction)//當有人改變它
let isPhone=false

const phoneText=getDom(".phone-text")

function isPhoneFUnction(){
isPhone=cellphoneRegex.test(cellphone.value)
// console.log(isPhone)

if(isPhone){
    phoneText.style.display="none"

}
else{
    phoneText.style.display="block"
}
}

// 現在我們要在表單處上鎖，避免用戶一樣可以上傳錯誤的資料到後台服務器中

const formSubmit=getDom(".form-submit")

formSubmit.addEventListener("click",checkFrom)

function checkFrom(e){
console.log(this)
e.preventDefault() //取消事件

if(isPhone){
    const formAll=getDom(".form-all")
    formAll.submit()
}
else{
    alert("請不要輸入錯誤的資訊喔")
}

}
// 關於＋=
// let a=1
// let b=2
// a+=1
// a=a+1
// a+=b;
// console.log(a)