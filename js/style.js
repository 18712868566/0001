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
    //分屏
    var swiper = new Swiper('.swiper-container-v', {
        pagination: null,
        direction: 'vertical',
        onInit: function(swiper) {
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            $('.tab_list li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
        }
    });

    var swiperH = new Swiper('.swiper-container-h', {
        // pagination: '.swiper-pagination-h',
        // paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        spaceBetween: 300
    });

    function swiper_tab(ele) {
        $(ele).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            console.log(index)
            swiper.slideTo(index, 1000, false); //切换到第一个slide，速度为1秒
        })
    }

    swiper_tab('.tab_list li')




})