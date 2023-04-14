function getDom(dom) {
    return document.querySelector(dom);
}

let hamburger = getDom(".hamburger");
let navBarJoin = getDom(".nav-bar-join");
let main = getDom(".main");
let formContentBoss = getDom(".form-content-boss");
let navBarMemberJoin = getDom(".nav-bar-member-join");
let clickMenu = document.querySelectorAll(".click-menu");
let memberJoin = getDom("#member-join");
let xMark = document.querySelectorAll(".x-mark");
let submit = getDom(".submit");
let navBarJoinUs = getDom(".nav-bar-join-us");
let myForm = getDom(".my-form");
let choseYear = getDom(".chose-year");
let choseMonth = getDom(".chose-month");
let choseDay = getDom(".chose-day");
let singUpNow = getDom(".sing-up-now");
let faq = getDom(".faq");

hamburger.addEventListener("click", function () {
    console.log(this);
    navBarJoin.classList.toggle("show");
})

hamburger.addEventListener("click", function () {
    if (navBarJoin.style.display == "flex") {
        navBarJoin.style.display = "none";
    }
})

// clickMenu.addEventListener("click", function (e) {

//     navBarJoin.classList.removed("show");
// })

// --------------------註冊會員的開關--------------------------
navBarJoinUs.addEventListener("click", function (e) {
    e.preventDefault();
    if (myForm.style.display == "flex" || formContentBoss.style.display == "flex") {
        myForm.style.display = "none"
    } else {
        myForm.style.display = "flex";
        myForm.style.opacity = "1";
    }

})

// --------------------登入會員的開關--------------------------
navBarMemberJoin.addEventListener("click", function (e) {
    e.preventDefault();
    if (formContentBoss.style.display == "flex" || myForm.style.display == "flex") {
        formContentBoss.style.display = "none"
    } else {
        formContentBoss.style.display = "flex";
        formContentBoss.style.opacity = "1";
    }

})

for (i = 2; i < clickMenu.length; i++) {
    clickMenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        console.log(clickMenu);
        console.log(this);
        navBarJoin.classList.toggle('show');
    })
}

// 登入會員的xx鍵
xMark[0].addEventListener("click", function () {
    formContentBoss.style.display = "none";
})

// 加入會員的xx鍵
xMark[1].addEventListener("click", function () {
    myForm.style.display = "none";
})

// 已有帳號登入切去登入畫面的鍵
singUpNow.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("before hide:", myForm.style.display);
    myForm.style.display = "none";
    console.log("after hide:", myForm.style.display);
    console.log("before show:", formContentBoss.style.display);
    formContentBoss.style.display = "none";
    console.log("after hide:", formContentBoss.style.display);
    setTimeout(function () {
        console.log("before show:", formContentBoss.style.display);
        formContentBoss.style.display = "flex";
        console.log("after show:", formContentBoss.style.display);
    }, 300)
})

// singUpNow.addEventListener("click", function (e) {
//     e.preventDefault();
//     myForm.style.display = "none";
//     formContentBoss.style.display = "none";  // 重置 display 屬性
//     setTimeout(function () {
//         formContentBoss.style.display = "flex";
//     }, 300)
// })




// xMark.addEventListener("click", function () {
//     formContentBoss.style.opacity = "0";

//     setTimeout(function () {
//         formContentBoss.style.display = "none";
//     }, 1000)
// })


// clickMenu.addEventListener("clcik", function () {
//     e.preventDefault();
//     if (navBarJoin.style.display == "flex") {
//         navBarJoin.style.display = "none"
//     } else {
//         navBarJoin.style.display = "flex";
//     }
// })

// background-color: rgba(255, 0, 0, 0.5);

// 增加年分 月份 日期 的選項
const currentYear = new Date().getFullYear();
console.log(currentYear);
for (i = 0; i < 101; i++) {
    choseYear.innerHTML += `<option value="1992">${currentYear - i}</option>`
}
for (i = 1; i < 13; i++) {
    choseMonth.innerHTML += `<option value="1992">${i}</option>`
}
for (i = 1; i < 32; i++) {
    choseDay.innerHTML += `<option value="1992">${i}</option>`
}




// // 正則表達式 要進行正則的有 手機號碼 電子信箱  帳號 密碼
const cname = getDom(".cname")
const cellphone = getDom(".cellphone")
const email = getDom(".email")
const formPassword = getDom("#form-password")
const formPasswordTest = getDom(".form-password")

const cellphoneRegex = /^09[0-9]{8}$/
const cnameRegex = /^[a-zA-Z]+[0-9a-zA-Z]{7,11}$/
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