// PC
// 轮播图js
var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
//次导航栏其他品牌
$('.js_other_brands').click(function() {
    var $brands = $(this);
    color = 'rgb(50, 190, 255)';
    $brands.find('.another').css("display", "block");
    $brands.find('span').eq(0).text($brands.find('i').text());
    $brands.find('span').click(function() {
        var spanitem = $(this);
        spanitem.parents($brands).siblings('.js_sub_list_item').find('span').css('color', '#333');
    });
});
$('.js_another').mouseleave(function() {
    var another = $(this);
    another.css('display', 'none');
});
// 次导航栏选项卡
var color = '';

$('.js_sub_list').on('click', '.js_sub_list_item', function() {
    var sub_list_item = $(this);
    color = 'rgb(50, 190, 255)';
    var indexnum = sub_list_item.index();
    var aimlist = sub_list_item.parents('.js_sub_nav').siblings('.js_home_list').find('.js_home_list_left').eq(indexnum);
    aimlist.css('display', 'inline-block');
    aimlist.siblings('.js_home_list_left').css('display', 'none');
    sub_list_item.find('span').css('color', 'rgb(50, 190, 255)');
    sub_list_item.siblings('.js_sub_list_item').find('span').css('color', '#333');
});
$('.js_sub_list a').mouseenter(function() {
    var thisa = $(this).find('span');
    color = thisa.css('color');
    if (color !== 'rgb(50, 190, 255)') {
        thisa.css('color', 'rgb(50, 190, 255)');
    }
});
$('.js_sub_list a').mouseleave(function() {
    var thisa = $(this).find('span');
    if (color !== 'rgb(50, 190, 255)') {
        thisa.css('color', '#333');
    }
});

// 次导航栏搜索框
$('.js_search_box input').focus(function() {
    var thisinput = $(this);
    thisinput.siblings('span').hide();
});
$('.js_search_box input').blur(function() {
    var thisinput = $(this);
    console.log(thisinput.val());
    if (thisinput.val() == '') {
        thisinput.siblings('span').show();
    }
});
$('.js_inputspan').click(function() {
    var inputspan = $(this);
    inputspan.hide();
    inputspan.siblings('input').focus();
});
//回到顶部
// $(window).scroll(function() { //scroll 页面滚动事件
//     var sTop = $(window).scrollTop(); //scrollTop  滚动距离
// })

$(".js_backtop").click(function() {
    $("body,html").animate({ scrollTop: 0 }, 500)
})

// 手机端
//页面层
$('.js_link').click(function() {
    layer.open({
        type: 1,
        content: `<div  style="text-align:right;padding:30px 15px 30px 0"><i class="close" style="font-style:normal;cursor: pointer">❌</i></div>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px">&#xe627;</i>智慧首页</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px">&#xe67b;</i>智家方案</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px">&#xe60c;</i>智慧家电</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px">&#xe627;</i>生活资讯</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px">&#xe66e;</i>智慧体验店</a>`,
        anim: 'up',
        scrollbar: true,
        style: 'position:fixed; right:0; top:0;width: 60%; height:100%; padding:10px 0; border:none;overflow-y: scroll;',
        end: function() {
            $('body').css('overflow', 'auto');
        },
        success: function() {
            $('body').css({ overflow: 'hidden', height: "100%" });
            $('.close').click(function() {
                layer.closeAll()
            });
        },
    });
});
//次导航栏定位
$(window).scroll(function() { //scroll 页面滚动事件
    var scrolltop = $(window).scrollTop(); //scrollTop  滚动距离
    var scrolltopvw = scrolltop / 7.5;
    if (scrolltopvw > 30) {
        var sub_list_750 = $('.sub_list_750');
        sub_list_750.css({ position: "fixed", top: 0, left: 0, "z-index": 99 });
    } else {
        var sub_list_750 = $('.sub_list_750');
        sub_list_750.css({ position: "relative", top: 0, left: 0, "z-index": 10 });
    }
})