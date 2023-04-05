let count = document.querySelector(".count");
let reset = document.querySelector(".reset");
let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let index = document.querySelector(".index");
let answer = 0;

let changeIndexText1 = document.querySelector(".change-index-text1");
let changeIndexText2 = document.querySelector(".change-index-text2");
let changeIndexText3 = document.querySelector(".change-index-text3");

let skinny = document.querySelector(".change-index-skinny");
let middle = document.querySelector(".change-index-middle");
let fat = document.querySelector(".change-index-fat");

let theAnswer = document.querySelector("#theAnswer");
let skinnyBmi = document.querySelector("#skinny");
let middleBmi = document.querySelector("#middle");
let fatBmi = document.querySelector("#fat");
count.addEventListener("click", countBMI);
reset.addEventListener("click", resetNum);
function countBMI() {
    if (isNaN(parseFloat(height.value)) || isNaN(parseFloat(weight.value))) {
        alert("請輸入數字");
        return;
    } else if ((height.value > 232) || (height.value < 110)) {
        alert("請輸入有效身高(可能太高或是太低)");
        return;
    } else if ((weight.value > 440) || (weight.value < 30)) {
        alert("請輸入有效體重(太重或是太瘦)");
        return;
    } else {
        answer = weight.value / ((height.value / 100) * (height.value / 100));
        // `您的bmi值為:<div>${answer}</div>太瘦了喔,要多加運動才行</div>`
        if (answer < 18.5) {
            index.style.opacity = 0;
            skinny.style.opacity = 1;
            middle.style.opacity = 0;
            fat.style.opacity = 0;
            skinny.innerHTML = `您的bmi值為:<div>${answer.toFixed(2)}</div>太瘦了喔,要多加運動才行</div>`;

        } else if ((answer >= 18.5) && (answer < 24)) {
            index.style.opacity = 0;
            skinny.style.opacity = 0;
            middle.style.opacity = 1;
            fat.style.opacity = 0;
            middle.innerHTML = `您的bmi值為:<div>${answer.toFixed(2)}</div>剛剛好,繼續保持!!</div>`;

        } else {
            index.style.opacity = 0;
            skinny.style.opacity = 0;
            middle.style.opacity = 0;
            fat.style.opacity = 1;
            fat.innerHTML = `您的bmi值為:<div>${answer.toFixed(2)}</div>太胖了哦,可能要多加運動</div>`;
        }
    }
}


function resetNum() {
    height.value = "";
    weight.value = "";
}