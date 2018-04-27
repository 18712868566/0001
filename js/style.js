/* rem */
$(window).on("load resize", function() {
    refreshRem();
});

function refreshRem() {
    var width = $(window).width();
    // 按照640比例可以直接用设计图尺寸除100
    if (width > 640) {
        width = 640;
        $("body,#wrap").css("max-width", "750px");
    };
    if (width < 320) width = 320;
    var rem = Math.floor(width / 750 * 100);
    $("html").css("font-size", rem);
}

$(function() {
    // 横版-卡牌
    var swiperH = new Swiper('.swiper-container-h', {
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        spaceBetween: 300,
        onInit: function(swiperH) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiperH); //隐藏动画元素
            swiperAnimate(swiperH); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiperH) {
            swiperAnimate(swiperH); //每个slide切换结束时也运行当前slide动画
        }
    });
    //分屏-竖版
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: null,
        direction: 'vertical',
        onInit: function(swiperV) {
            // swiperAnimateCache(swiperV); //隐藏动画元素
            // swiperAnimate(swiperV); //初始化完成开始动画
            // alert(swiperV.activeIndex); //提示Swiper的当前索引
        },
        onSlideChangeEnd: function(swiperV) {
            // swiperAnimate(swiperV); //每个slide切换结束时也运行当前slide动画
            // alert(swiperV.activeIndex) //切换结束时，告诉我现在是第几个slide
            $('.tab_list li').eq(swiperV.activeIndex).addClass('active').siblings().removeClass('active');

            if (swiperV.activeIndex == 2) {
                //alert('aa')
            }
        }
    });



    function swiper_tab(ele) {
        $(ele).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            console.log(index)
            swiperV.slideTo(index, 1000, false); //切换到第一个slide，速度为1秒
        })
    }

    swiper_tab('.tab_list li')



})