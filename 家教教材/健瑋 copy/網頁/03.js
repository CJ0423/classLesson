window.onload = function () {
    // 居家生活文字
    let main0 = document.querySelector("#main1")
    console.log(main0)

    var main1 = document.getElementById("main1")
    var main2 = document.getElementById("main2")
    var main3 = document.getElementById("main3")
    var main4 = document.getElementById("main4")
    var section2 = document.getElementById("section2")

    var number = [
        document.getElementById("number1"),
        document.getElementById("number2"),
        document.getElementById("number3"),
        document.getElementById("number4"),
        document.getElementById("number5"),
    ]
    var pic = [
        "/pic/988.jpg",
        "/pic/990.jpg",
        "/pic/982.jpg",
        "/pic/009.jpg",
    ]
    var pic1 = [
        "/pic/010.jpg",
        "/pic/011.jpg",
        "/pic/012.jpg",
        "/pic/013.jpg",
    ]
    var num = 0;

    var article4 = document.getElementById("article4")
    main1.addEventListener("mouseover", function () {

        main4.style.transform = "translate(320px, -150px)";
    })
    main1.addEventListener("mouseout", function () {
        main4.style.transform = "translate(320px, 0px)";
    })
    main2.addEventListener("mouseover", function () {
        main2.style.transform = "translate(250px, -70px)";

    })
    main2.addEventListener("mouseout", function () {
        main2.style.transform = "translate(150px, -70px)";
    })
    main3.addEventListener("mouseover", function () {
        main3.style.transform = "translate(250px, 70px)";

    })
    main3.addEventListener("mouseout", function () {
        main3.style.transform = "translate(150px, 70px)";

    })
    article4.addEventListener("mouseover", function () {
        article4.style.transform = "translate(50px, 0px)";
    })

    number[0].addEventListener("mouseover", function () {
        section2.src = "/pic/001.jpg";
        this.style.background = "grey";

    })
    number[1].addEventListener("mouseover", function () {
        section2.src = "/pic/002.jpg";
        this.style.background = "grey";
    })
    number[2].addEventListener("mouseover", function () {
        section2.src = "/pic/003.jpg";
        this.style.background = "grey";
    })
    number[3].addEventListener("mouseover", function () {
        section2.src = "/pic/004.jpg";
        this.style.background = "grey";
    })
    number[4].addEventListener("mouseover", function () {
        section2.src = "/pic/005.jpg";
        this.style.background = "grey";
    })

    number[0].addEventListener("mouseout", function () {

        this.style.background = "white";
    })
    number[1].addEventListener("mouseout", function () {

        this.style.background = "white";
    })
    number[2].addEventListener("mouseout", function () {

        this.style.background = "white";
    })
    number[3].addEventListener("mouseout", function () {

        this.style.background = "white";
    })
    number[4].addEventListener("mouseout", function () {

        this.style.background = "white";
    })

    setInterval(function () {
        num++
        main2.src = pic[num]
        main3.src = pic1[num]
        if (num >= 3) {
            num = 0;
        }

    }, 3000)


    // const images = ["pic[0]", "pic[1]"];
    // let currentImageIndex = 0;

    // setInterval(() => {
    //   const main2 = document.getElementById("main2");
    //   const main3 = document.getElementById("main3");

    //   // 更改圖像
    //   main2.src = images[currentImageIndex];
    //   main3.src = images[(currentImageIndex + 1) % images.length];

    //   // 增加索引以顯示下一張圖像
    //   currentImageIndex = (currentImageIndex + 1) % images.length;
    // }, 3000);

}