
$(function () {
    var count = $(".page").length;//获取屏数
    var index = 0;//定义变量，用来判断
    //    微信端查看：取消滑动时的多余。touchstart手机的点击事件
    $("body").on("touchmove touchstart", function (abc) {
        abc.preventDefault();
    })
    //    滑动
    //target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。touch成员变量
    touch.on(".container", "swipedown", function (abc) {//下 .closes祖先元素
        var page = $(abc.target).closest(".page");
        index = $(".page").index(page);
        if (index > 0) {//.prev前一个同胞元素
            page.addClass("pageDown").prev(".page").removeClass("pageUp");
            page.find(".box").addClass("hide");
            page.prev(".page").find(".hide").removeClass("hide")
        }
    })
    touch.on(".container", "swipeup", function (abc) {
        //        closest返回祖先元素
        var page = $(abc.target).closest(".page");
        index = $(".page").index(page);
        if (index < (count - 1)) {
            page.addClass("pageUp").next(".page").removeClass("pageDown");
            page.find(".box").addClass("hide");
            page.next(".page").find(".hide").removeClass("hide")
        }
    })
    // 类名 或者 ID ； 动作  ； function     touchstart手机的点击事件
    //  paused暂停  audio.play();播放
    touch.on(".music", "touchstart", function () {
        var audio = document.querySelector("audio");
        var mu = document.querySelector(".music")
        if (audio.paused) {
            audio.play();
            //            播放
            mu.style.animationPlayState = "running";
            //          CSS中的暂停语法  animation-play-state: paused|running;
            $(this).find("img").removeClass("hide");
            //            针对音乐脚标的
        } else {
            audio.pause();
            //            暂停
            mu.style.animationPlayState = "paused";
            $(this).find("img").addClass("hide");
        }
    })
    $(".a_1").tap(function () {
        window.location.href = "../ceshi/index.html";
    })
    $(".a_2").tap(function () {
        window.location.href = "../../pc/zuoye/zoye/index.html";
    })
    $(".a_3").tap(function () {
        window.location.href = "../banjiyuansu/index.html";
    })
    $(".a_4").tap(function () {
        window.location.href = "http://www.lonewolf521.com/";
    })
})
$(function () {
    $(".container").addClass("hide");
    $(".saosao").tap(function () {
        $(".tu1").addClass("saodong");
        setTimeout(function () {
            $(".saosao").remove();
            $(".container").removeClass("hide");
        }, 2000);
    })
    /*扫码*/
    //例如;<a href=”javascript:phone('+phone+') ”>拨打电话</a>
    $(".a_5").tap(function () {
        var date = 13084537023;
        window.location.href = 'tel://' + date;
    })
   
})