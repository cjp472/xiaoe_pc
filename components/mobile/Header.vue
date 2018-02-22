<template>
  <section>
      <div class="m_nav">
    <a href="/">
        <div class="m_logo">
            <img  src="~/static/images/mobile/home_logo.svg">
        </div>
    </a>
    <div id="sliderClick" class="sliderBtn">
    </div>
    <div data-baidu-event = "mobile"
         data-event-type = "顶部导航"
         data-event-name = "免费试用"
         class="m_btnBlue m_freeUse freeUse">免费试用</div>
    <div data-baidu-event = "mobile"
         data-event-type = "顶部导航"
         data-event-name = "登录"
         class="m_navBtn loginMLink">登录</div>


</div>
<div class="outer_slider" style="display: none;">
    <ul class="m_nav_slider">
        <a data-baidu-event ="mobile"
           data-event-type = "顶部导航"
           data-event-name = "首页"
           href="/">
            <li id="indexPage">首页</li>
        </a>
        <a data-baidu-event = "mobile"
           data-event-type = "顶部导航"
           data-event-name = "案例"
           href="/case">
            <li id="case">案例</li>
        </a>
        <a data-baidu-event = "mobile"
           data-event-type = "顶部导航"
           data-event-name = "功能"
           href="/function_inter">
            <li id="function_inter">功能</li>
        </a>
        <a data-baidu-event = "mobile"
           data-event-type = "顶部导航"
           data-event-name = "价格"
           href="/m_version_price">
            <li id="m_version_price">价格</li>
        </a>
        <a data-baidu-event = "mobile"
           data-event-type = "顶部导航"
           data-event-name = "关于我们"
           href="/aboutUs">
            <li id="aboutUs">关于我们</li>
        </a>
        <a data-baidu-event = "mobile"
           data-event-type = "顶部导航"
           data-event-name = "分销市场"
           href="https://h5b.xiaoe-tech.com/?channel_info=guanwang_mobile">
            <li>分销市场</li>
        </a>
    </ul>
</div>
<div class="deepDarkFantasy3" style="display: none;">
</div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
@import url("~/static/css/admin/homePageNew.css");
@import url("~/static/css/external/wechatCode.css");
@import url('~/static/css/admin/pageBase.css');
@import url('~/static/css/admin/mVersionPricePage.css');
@import url('~/static/css/admin/mobile/mobileBase.css');

/* <link type=text/css rel="stylesheet" href="//at.alicdn.com/t/font_l2d80dqhh7bq33di.css"> */
.deepDarkFantasy3{
        z-index: 9999;
        background-color: #000000;
        position: fixed;
        opacity:0.5;
        width: 100%;
        height:100%;
        bottom:0;
    }
    .m_logo img {
        width: 75%;
        height: 100%;
    }
    .m_nav{
        background: #232933;
        z-index: 10000;
    }
    .m_freeUse{
        float: right;
        width: .7rem;
        height: .27rem;
        line-height: .27rem;
        margin: .03rem 0;
    }
    .m_btnBlue{
        background: #2a75ed;
    }
    .outer_slider{
        position: fixed;
        top: 0.5rem;
        width: 100%;
        text-align: center;
        z-index: 10000;

    }
    .sliderBtn{
        width: 0.18rem;
        height:0.18rem;
        float: right;
        display: inline-block;
        /*float: right;*/
        transition:linear 0.3s 0s;
        background: url(~/static/images/mobile/icon_carte.png);
        -webkit-background-size:cover;
        background-size:cover;
        margin: 0.07rem 0 0.05rem 0.15rem;
    }
    .sliderClose{
        background: url(~/static/images/mobile/icon_call-in.png);
        -webkit-background-size:cover;
        background-size:cover;
    }
    .m_navBtn{
        float: right;
        height: .27rem;
        line-height: .27rem;
        margin: .03rem 0;
        background-color: transparent;
        cursor: pointer;
        padding: 0 .2rem;
        color: #fff;
    }
    .m_nav_slider{
        margin:0;
        padding:0;
        list-style: none;
        width: 100%;
        height: auto;
        background-color: #232933;
    }
    .m_nav_slider a{
        color: #fff;
        border: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }
    .m_nav_slider a:active{
        color: #2a75ed;
    }
    .m_nav_slider a:visited{
        color: #2a75ed;
    }
    .m_nav_slider li{
        /*-webkit-transition: linear .1s 0s;*/
        /*-moz-transition: linear .1s 0s;*/
        /*-ms-transition: linear .1s 0s;*/
        /*-o-transition: linear .1s 0s;*/
        /*transition: linear .1s 0s;*/
        height: 0.5rem;
        color: #fff;
        border-top: 0.01rem solid #384153;
        line-height: 0.5rem;
    }
    .m_nav_slider li:active{

        color:#2a75ed;
        background-color: #384153;
    }
</style>
