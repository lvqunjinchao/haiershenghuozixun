// PC
// 注意：ie不支持es6
//页面加载执行函数
// $(document).ready(function() {　
//     navlist();　
// });
$(function() {
    navlist();　
});

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
// 其他品牌下标号
var color = '';
//出现其他品牌
var anothernum = -1;
$('.js_other_brands').on('click', '.js_other', function() {
    var $brands = $(this);
    color = 'rgb(50, 190, 255)';
    $brands.siblings('.js_another').addClass("displayblock");
    $brands.siblings('.js_another').find('span').eq(0).text($brands.text());

});
// 其他品牌的点击
$('.js_another').on('click', '.js_brands', function() {
    var spanitem = $(this);
    anothernum = spanitem.index();
    spanitem.addClass('pale_blue bc_229');
    spanitem.siblings('span').removeClass('pale_blue bc_229');
    spanitem.parents(".js_other_brands").siblings('.js_sub_list_item').find('span').removeClass('pale_blue');
});
// 移动消失其他品牌
$('.js_another').mouseleave(function() {
    var another = $(this);
    another.removeClass('displayblock');
});

// 发现更多ajax封装成函数
function navlist() {
    $.ajax({
        url: "../images/details.json", //json文件位置
        type: "GET", //请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) { //请求成功完成后要执行的方法 
            let html = '';
            $.each(data.details, function(index, item) {
                // 注意！select值(value)就等于选中option的值，可以找到category_id直接赋值就行，不用转换了
                html += `<div class="item">
                <div class="item_left">
                    <a href="javasprict:;"><img src="${item.item_left_img}" alt=""></a>
                </div>
                <div class="item_right">
                    <div class="r_top">
                        <a href="javasprict:;">
                            <div>${item.item_right_title}</div>
                        </a>
                    </div>
                    <div class="r_bottom_left">
                        <a href="javasprict:;">${item.r_bottom_left_1}</a>
                        <a href="javasprict:;">${item.r_bottom_left_2}</a>
                        <a href="javasprict:;">${item.r_bottom_left_3}</a>
                    </div>
                    <div class="r_bottom_right">
                        <span>${item.r_bottom_right_1}</span>
                        <span>${item.r_bottom_right_2}</span>
                        <span>${item.r_bottom_right_3}</span>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>`
            });
            // html方法会把无弄没有，所以用append来添加，无是默认的
            $('.js_home_list_left').append(html);
        }
    })
}

// 次导航栏调取ajax
$('.js_sub_list').on('click', '.js_ajaxitem', function() {
    $('.js_home_list_left').empty();
    navlist();
});
//次导航栏颜色变化
$('.js_sub_list').on('click', '.js_sub_list_item', function() {
    var sub_list_item = $(this);
    color = 'rgb(50, 190, 255)';
    var indexnum = sub_list_item.index();
    var aimlist = sub_list_item.parents('.js_sub_nav').siblings('.js_home_list').find('.js_home_list_left').eq(indexnum);
    sub_list_item.find('span').addClass('pale_blue');
    sub_list_item.siblings('.js_sub_list_item').find('span').removeClass('pale_blue');
    sub_list_item.siblings('.other_brands').find('span').eq(anothernum).removeClass('pale_blue bc_229');
});
// 次导航栏选项卡
$('.js_sub_list a').mouseenter(function() {
    var thisa = $(this).find('span');
    color = thisa.css('color');
    if (color !== 'rgb(50, 190, 255)') {
        thisa.addClass('pale_blue');
    }
});
$('.js_sub_list a').mouseleave(function() {
    var thisa = $(this).find('span');
    if (color !== 'rgb(50, 190, 255)') {
        thisa.removeClass('pale_blue');
    }
});

//回到顶部
$('.js_righttip_box').on('click', '.js_backtop', function() {
    $('body,html').animate({ scrollTop: 0 }, 0);

});


// 手机端
//页面层
$('.js_link').click(function() {
    layer.open({
        type: 1,
        content: `<div  style="text-align:right;padding:30px 15px 30px 0"><span class="close iconfont" style="color:rgb(197,197,197);cursor: pointer">&#xe608;</span></div>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px;color:rgb(201,201,201);width:20px;height:20px">&#xe627;</i>智慧首页</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px;color:rgb(201,201,201);width:20px;height:20px">&#xe67b;</i>智家方案</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px;color:rgb(201,201,201);width:20px;height:20px">&#xe60c;</i>智慧家电</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px;color:rgb(201,201,201);width:20px;height:20px">&#xe627;</i>生活资讯</a>
        <a style="display: block;font-size: 14px;border-bottom: 1px solid #e5e5e5;width: 90%;float: right;padding: 15px 0;"><i class="iconfont" style="padding-right:10px;color:rgb(201,201,201);width:20px;height:20px">&#xe66e;</i>智慧体验店</a>`,
        anim: 'right',
        scrollbar: true,
        className: 'layui-m-anim-bottom',
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
var Topscroll = 0;
$(window).scroll(function() { //scroll 页面滚动事件
        var scrolltop = $(window).scrollTop(); //scrollTop  滚动距离
        Topscroll = scrolltop;
        var scrolltopvw = scrolltop / 7.5;
        if (scrolltopvw > 30) {
            var sub_list_750 = $('.sub_list_750');
            sub_list_750.css({ position: "fixed", top: 0, left: 0, "z-index": 99 });
        } else {
            var sub_list_750 = $('.sub_list_750');
            sub_list_750.css({ position: "relative", top: 0, left: 0, "z-index": 10 });
        }
    })
    //模态框表单验证
$(".demoform").Validform({
    // 提示信息的位置
    tiptype: 3,
    showAllError: true,
});
$('.js_modal_bcakground').on('click', '.js_advice_modal_close', function() {
    var advice_modal_close = $(this);
    advice_modal_close.parents('.js_modal_bcakground').addClass('displaynone');
    $(".demoform").Validform().resetForm();
    $(".Validform_checktip").html("");
});
$('.js_righttip_box').on('click', '.js_advice', function() {
    var advice = $(this);
    advice.parents('.js_righttip_box').siblings('.js_modal_bcakground').find('.js_advice_modal').css('top', Topscroll + 'px');
    advice.parents('.js_righttip_box').siblings('.js_modal_bcakground').removeClass('displaynone');
});
//扫描二维码
$('.bottom_right').on('mouseenter', '.js_wechat', function() {
    var sweep_code = $(this);
    // 获取当前的屏幕宽度
    var width = window.innerWidth;
    if (width > 750 && width < 1200) {
        sweep_code.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('right0');
    } else {
        sweep_code.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('right0');

    }
    sweep_code.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('displayblock');
});
$('.bottom_right').on('mouseleave', '.js_wechat', function() {
        var sweep_code = $(this);
        sweep_code.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('displayblock');
    })
    // 获取历史记录
function history() {
    var html4 = '';
    var html5 = '';
    var gethistory = $.cookie('history').split(',');
    // 有个bug，只要获得焦点就会不断生成历史记录框
    if (count == 0) { return; } else {
        let html4 = '<div class="js_his_container"><div class="his_box clearfix js_his_box">历史搜索<span class="clearhis js_clearhis"><i></i>清除</span></div><ul class="his_ul js_his_ul">'
        gethistory.forEach(function(item, index) {
            // 注意！select值(value)就等于选中option的值，可以找到category_id直接赋值就行，不用转换了
            html5 += '<li><a href="javascript:;">' + item + '</a></li>'
        });
        html4 = html4 + html5 + '</ul>'
        $('.js_test').append(html4);
    }
    // 将更新后的cookie赋值给暂存变量
    contentunchange = content;
}
// 获取热门推荐封装成函数

function hot() {
    $('.js_test').empty();
    $.ajax({
        url: "../images/history_hot.json", //json文件位置
        type: "GET", //请求方式为get
        dataType: "json", //返回数据格式为json
        success: function({ hot }) { //请求成功完成后要执行的方法 
            let html1 = '';
            let html7 = '<div class="his_hot_tit">热门搜索</div><div class="hot_box js_hot_box">'
                // let html2 = '';
            $.each(hot, function(index, item) {
                // 注意！select值(value)就等于选中option的值，可以找到category_id直接赋值就行，不用转换了
                html1 += `<span>${item.hot_name}</span>`
            });
            html1 = html7 + html1 + '</div>';
            $('.js_test').append(html1);
            // 当请求ajax完成之后，回调函数中使用所需要进行的方法
            history();
        }
    })
}





//pc端点击加载更多
$('.js_home_list_left_box').on('click', '.js_findmore', function() {
    navlist();
});
//移动端加载更多
$(window).scroll(function() {
    if ($(document).scrollTop() + $(window).height() > $(document).height() - 10) {
        navlist();
    }
});

// cookie保留搜索记录和清除
var content = '';
$.cookie('history', content);
// 声明一个变量暂存cookie
var contentunchange = '';
var count = 0;
// var count2 = 0;
// 注意：cookie在编译和查询的时候会自动解码和编码
// 点击搜索的时候将内容添加到历史记录中,但是要判断输入值是否为空
$('.js_input_i').on('click', function() {
    var input_i = $(this);
    content = input_i.siblings('.js_search').val();
    if (content === '') {
        return;
    }
    count++;
    content = content + ',';
    content = content + contentunchange;
    if (count == 1) {
        content = content.slice(0, length - 1);
    }
    $.cookie('history', content);
    input_i.siblings('.js_search').blur();
    input_i.siblings('.js_inputspan').removeClass('displaynone');
    input_i.siblings('.js_search').val('');
});
// 次导航栏搜索框
$('.js_search_box').on('focus', 'input', function() {
    var thisinput = $(this);
    thisinput.siblings('span').addClass('displaynone');
    thisinput.parents('.js_input_box').siblings('.js_history_hot_box').addClass('displayblock');
    //  获取热门推荐
    hot();
});
$('.js_history_hot_box').on('mouseleave', function() {
    var history_hot_box = $(this);
    if (history_hot_box.siblings('.js_input_box').find('.js_search').val() !== '') {
        return;
    }
    history_hot_box.siblings('.js_input_box').find('.js_inputspan').removeClass('displaynone');
    history_hot_box.siblings('.js_input_box').find('.js_search').blur();
    history_hot_box.removeClass('displayblock');
});
$('.js_search_box').on('click', '.js_inputspan', function() {
    var inputspan = $(this);
    inputspan.addClass('displaynone');
    inputspan.siblings('input').focus();
    inputspan.parents('.js_input_box').siblings('.js_history_hot_box').addClass('displayblock');
});

// 清除cookie
$('.js_history_hot_box').on('click', '.js_clearhis', function() {
    $.cookie('history', '');
    // console.log($.cookie('history'));
    console.log($.cookie('history'));
    var thiss = $(this);
    thiss.parents('.js_history_hot_box').siblings('.js_input_box').find('.js_inputspan').removeClass('displaynone');
    thiss.parents('.js_history_hot_box').siblings('.js_input_box').find('.js_search').blur();
    count = 0;
    // count2 = 0;
    contentunchange = '';
    thiss.parents('.js_test').empty();
    // thiss.parents('.js_history_hot_box').removeClass('displayblock');
});