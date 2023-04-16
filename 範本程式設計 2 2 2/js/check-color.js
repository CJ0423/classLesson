function getDom(dom){
    return document.querySelector(dom)
}

const test=getDom(".test")
const test1=getDom(".test1")
const test3=getDom(".test3")
const testBoss=getDom(".test-boss")

test.addEventListener("click",testFunction)
test1.addEventListener("click",testFunction1)
test3.addEventListener("click",testFunction3)
testBoss.addEventListener("click",testBossFunction)

function testFunction(e){
    // 大部分情況都是如此
    console.log("這是0產生的") 
   console.log(this) 
   console.log(e.target)
}
function testFunction1(e){
        // 大部分情況都是如此

    console.log("這是1產生的") 
   console.log(this) 
   console.log(e.target)
   console.log(e.target.value)

}
function testFunction3(e){
            // 因為事件冒泡產生的不同結果

    console.log("這是3產生的") 
   console.log(this) 
   console.log( e.target) //追蹤到真正被點擊的
   console.log(e.target.value)

}
function testBossFunction(e){
    console.log("這是boss產生的") 

   console.log(this) 
   console.log(e.target)
   console.log(e.target.value)
}