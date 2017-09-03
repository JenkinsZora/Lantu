$(function(){
    //首页透明度轮播
    var banner=$(".banner");
    var btn=$(".btn");
    var num=0;
    for (var i = 0; i < btn.length; i++) {
        btn[i].index=i;
        btn[i].onmouseover=function(){
            
        }
    };
    setInterval(move, 2000);
    function move() {
        num++;
        if (num >= banner.length) {
            num = 0;
        }
        for (var i = 0; i < banner.length; i++) {
            for (var j = 0; j < banner.length; j++) {
                banner[j].style.zIndex=0;
                btn[j].style.background="#006597";
                btn[j].style.border="0px";
            };
            banner[num].style.zIndex=1;
            btn[num].style.background="transparent";
            btn[num].style.border="2px solid #A7C31E";
        };
    }

    //移动校园第一张导航
     $(".photo").eq(0).css({"height":$(window).height()-($("nav").height())});
    window.onresize=function(){//浏览器发生变化执行的函数
        $(".photo").eq(0).css({"height":$(window).height()-($("nav").height())})
    }
    //导航点击更多
    $(".more").click(function(){
        $(".select").toggle();
    })

    // 点击按钮跳转页面
    $(".btnClick").click(function(){
        var obj;
        $(this).each(function(){
            obj=$(this).offset().top;
        })
        $("body,html").animate({scrollTop : obj+450},800);
    })

    //九大应用群透明度轮播
    var photoFiveImgs=$(".photoFiveImgs");
    var list=$(".photoFiveImgList ul li");
    var num1=0;
    for (var i = 0; i < list.length; i++) {
        list[i].index=i;
        list[i].onclick=function(){
            for(var j=0;j<list.length;j++){
                list[j].style.fontSize="20px";
                photoFiveImgs[j].style.zIndex=0;
            }
            photoFiveImgs[this.index].style.zIndex=1;
            list[this.index].style.fontSize="28px"
        }
    };
    setInterval(move1, 2000);
    function move1() {
        num1++;
        if (num1 >= photoFiveImgs.length) {
            num1 = 0;
        }
        for (var i = 0; i < photoFiveImgs.length; i++) {
            for (var j = 0; j < photoFiveImgs.length; j++) {
                photoFiveImgs[j].style.zIndex=0;
                photoFiveImgs[j].style.opacity=0;
                list[j].style.fontSize="20px";
            };
            photoFiveImgs[num1].style.zIndex=1;
            photoFiveImgs[num1].style.opacity=1;
            list[num1].style.fontSize="28px";
        };
    }
})
// var imgSize=$(".qp_q_05 .pq_05_z").length;
//     var num=0;
//     function move(){
//         num++;
//         num=num >= imgSize? num=0: num;

//         $(".qp_q_05 .pq_05_z").each(function(){
//             $(this).removeClass("qp_05_slite");
//             $(".qp_05_img li").removeClass(" qp_05_yc");
//         })
//         $(".qp_q_05 .pq_05_z").eq(num).addClass("qp_05_slite");
//         $(".qp_05_img li").eq(num).addClass(" qp_05_yc");
//     }
//     setInterval(move,3000)

// $(".qp_q_05 .pq_05_z").click(function(){
//         var index=$(this).index();
//         $(".qp_q_05 .pq_05_z").each(function(){
//             $(this).removeClass(" qp_05_slite");
//             $(".qp_05_img li").removeClass("qp_05_yc");
//         })
//         $(".qp_05_img li").eq(index).addClass("qp_05_yc");
//         $(this).addClass(" qp_05_slite");
//     })
