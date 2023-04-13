function getDom(dom) {
    return document.querySelector(dom)
}

const choseYear = getDom(".chose-year")
console.log(choseYear)
const choseMonth = getDom(".chose-month")
console.log(choseMonth)
const choseDay = getDom(".chose-day")
console.log(choseDay)

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
// const text= Date()
// console.log(text)

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1
const currentDate = new Date().getDate()
const currentDay = new Date().getDay()

console.log(currentYear)
console.log(currentMonth)
console.log(currentDate)
console.log(currentDay)

// 兩大基本技術都有了之後我們就可以 利用for迴圈來做點我們想做的事情了
const yearOption = []

for (let i = 0; i < 100; i++) {
    choseYear.innerHTML += `<option>${currentYear - i}</option>`
}
for (let i = 1; i < 13; i++) {
    choseMonth.innerHTML += `<option>${i}</option>`
}
for (let i = 1; i < 32; i++) {
    choseDay.innerHTML += `<option>${i}</option>`
}
// for (let i = 0; i < 100; i++) {
//     yearOption[i] = document.createElement("option")
//     yearOption[i].textContent = currentYear - i
//     yearOption[i].value = currentYear - i
//     choseYear.appendChild(yearOption[i])
// }
// // 正則表達式 要進行正則的有 手機號碼 電子信箱 姓名
const cname = getDom(".cname")
const cellphone = getDom(".cellphone")
const email = getDom(".email")
const formPassword = getDom("#form-password")
const formPasswordTest = getDom(".form-password")

const cellphoneRegex = /^09[0-9]{8}$/
const cnameRegex = /^[^0-9a-zA-Z]{2,4}$/
const emailRegex = /^[0-9a-zA-Z._\-]+@[A-Za-z0-9.\-]+\.[a-zA-Z]{2,}(\.[a-zA-Z])*$/
// const emailRegex = /^[0-9a-zA-Z._\-]+@[A-Za-z0-9.\-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/

const passwordRegex = /^[0-9a-zA-Z]{6,12}$/;
// const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
console.log(cname)
console.log(cellphone)
console.log(email)

// -----------------------------------密碼正則
formPassword.addEventListener("input", isPasswordFUnction)


const passwordText = getDom(".password-text")
let isPassword = false;
function isPasswordFUnction() {
    // isEmail = emailRegex.test(emailText.value)
    // console.log(isPhone)
    isPassword = passwordRegex.test(formPassword.value);
    if (passwordRegex.test(formPassword.value)) {
        passwordText.style.display = "none"

    }
    else {
        passwordText.style.display = "block"
    }
}
// -----------------------------------密碼驗證
formPasswordTest.addEventListener("input", isPasswordTestFUnction)


const passwordTestText = getDom(".password-test-text")
let isPasswordTest = false;
function isPasswordTestFUnction() {
    // isEmail = emailRegex.test(emailText.value)
    // console.log(isPhone)
    isPasswordTest = (formPassword.value == formPasswordTest.value);
    if (formPassword.value == formPasswordTest.value) {
        passwordTestText.style.display = "none"

    }
    else {
        passwordTestText.style.display = "block"
    }
}
// -----------------------------------信箱正則
email.addEventListener("input", isEmailFUnction)
let isEmail = false

const emailText = getDom(".email-text")
function isEmailFUnction() {
    isEmail = emailRegex.test(email.value)
    // console.log(isPhone)

    if (emailRegex.test(email.value)) {
        emailText.style.display = "none"

    }
    else {
        emailText.style.display = "block"
    }
}

// -----------------------------------姓名正則
cname.addEventListener("input", isNameFUnction)
let isName = false

const nameText = getDom(".name-text")
function isNameFUnction() {
    isName = cnameRegex.test(cname.value)
    // console.log(isPhone)

    if (cnameRegex.test(cname.value)) {
        nameText.style.display = "none"

    }
    else {
        nameText.style.display = "block"
    }
}
// -----------------------------------手機正則

cellphone.addEventListener("input", isPhoneFUnction)//當有人改變它
let isPhone = false

const phoneText = getDom(".phone-text")

function isPhoneFUnction() {
    isPhone = cellphoneRegex.test(cellphone.value)
    // console.log(isPhone)

    if (isPhone) {
        phoneText.style.display = "none"

    }
    else {
        phoneText.style.display = "block"
    }
}

// 現在我們要在表單處上鎖，避免用戶一樣可以上傳錯誤的資料到後台服務器中

const formSubmit = getDom(".form-submit")

formSubmit.addEventListener("click", checkFrom)

function checkFrom(e) {
    console.log(this)
    e.preventDefault() //取消事件

    if (isPhone && isName && isEmail && isPassword && isPasswordTest) {
        const formAll = getDom(".form-all")
        formAll.submit()
    }
    else {
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