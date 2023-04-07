let textBoard = document.querySelector(".text-board");
let keyText = document.querySelector(".key-text");
let submit1 = document.querySelector(".submit");
let ol = document.querySelector(".ol");
let faXmark = document.querySelector(".fa-xmark");

let noteBook = document.querySelector(".note-book");
let note1 = document.querySelector(".note1");
let homeWork = document.querySelector(".home-work");
let hw1 = document.querySelector(".hw1");
let countDown = document.querySelector(".count-down");
let countD = document.querySelector(".countD");
let occupation = document.querySelector(".occupation");
let occ = document.querySelector(".occ");
let navbar = [
    noteBook,
    homeWork,
    countDown,
    occupation,
]
let navbarDown = [
    note1,
    hw1,
    countD,
    occ,
]
submit1.addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.innerHTML = keyText.value;
    ol.append(newLi);
    keyText.value = "";
})
keyText.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        let newLi = document.createElement("li");
        newLi.innerHTML = keyText.value;
        ol.append(newLi);
        keyText.value = "";
    }
})

faXmark.addEventListener("click", function () {
    const delLi = document.querySelectorAll('ol li');
    delLi.forEach(li => li.remove());

})

ol.addEventListener("click", function (e) {
    console.log(e.target.tagName)
    if (e.target.tagName == "LI") {
        e.target.style.textDecoration = "black solid line-through 2px";
    }
})
ol.addEventListener("dblclick", function (e) {
    console.log(e.target.tagName)
    if (e.target.tagName == "LI") {
        e.target.style.textDecoration = "none";
    }
})

for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("mouseover", function () {
        navbarDown[i].style.display = "block";
        navbar[i].addEventListener("mouseout", function () {
            navbarDown[i].style.display = "none";
        })
    })
}

// noteBook.addEventListener("mouseover", function () {
//     note1.style.display = "block";
// })
// noteBook.addEventListener("mouseout", function () {
//     note1.style.display = "none";
// })




// const deleteBtn = document.getElementById('delete-btn');
// deleteBtn.addEventListener('click', () => {
//   const liElements = document.querySelectorAll('ol li');
//   liElements.forEach(li => li.remove());
// });
