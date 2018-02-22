<template>
  <section>
      <div class="navHeader">
    <div class="indexLogo">
        <a href="/">
        <img class="logoLight" src="~static/images/homepage/logo.svg" style="display: none">
        <img class="logoDark" src="~static/images/homepage/logo_black.svg" style="display: none">
        </a>
    </div>
    <div class="nav">
        <div class="navContent" id="_navContentWrapper">
            <div class="navPart homePageNav" >首页</div>
            <div class="navPart functionInter" >功能</div>
            <div class="navPart versionPrice" >价格</div>
            <div class="navPart partIntro" >关于我们</div>
            <a class="navPart chosen_shop" href="https://h5b.xiaoe-tech.com/?channel_info=guanwang_pc" target="_blank">分销市场</a>
        </div>
    </div>
    <div class="loginWrite loginTop">登录</div>
    <div class="btnBlue loginBtn loginLink">免费试用</div>
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

/* @import url("~/static/css/external/video-js.css"); */

@import url("~/static/css/external/swiper-3.4.2.min.css");
@import url('~/static/css/admin/pageBase.css');
.customer-service-box {
            position: fixed;
            z-index: 100;
            display: block;
            /*width: 50px;*/
            height: auto;
            font-size: 14px;
            color: #fff;
            bottom: 30px;
            right: 10px;
            text-align: center;
            width: 30px;
            background-color: #5194ff;
            box-shadow: 0 2px 4px 0 rgba(47, 80, 133, 0.2);
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .customer-service_btn {
            display: block;
            margin: 0;
            padding: 0;
            width: 30px;
            height: 30px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 14px;
        }

        .customer-service_btn.phone-number {
            background-image: url("/images/service/icon_phone.png");
            border-radius: 0 2px 0 0;
        }
        .customer-service_btn.online {
            background-image: url("/images/service/icon_online.png");
            border-radius: 0 0 2px 0;
        }
        .customer-service_btn.to-top {
            background-image: url("/images/service/icon_backtop.png");
            border-radius: 0 0 2px 2px;
        }
        .customer-service-item .customer-service_txt {
            display: none;
            position: absolute;
            top: 0;
            right: 50px;
            height: 50px;
            background-color: #276fe0;
            line-height: 50px;
            border-radius: 2px 0 0 2px;
        }
        .customer-service-item:hover .customer-service_btn {
            background-color: #276fe0;
        }
        .customer-service-item .divider{
            width: 100%;
            height: 1px;
            background-color: #276fe0;
        }
        .sidebar_text{
            /*width:30px;*/
            padding: 0 8px;
            line-height: 12px;
            font-size:12px;
            margin-bottom:10px;
            word-wrap: break-word;
        }
        .sidebar_box{
            overflow: hidden;
            position: relative;
            width: 320px;
            border-radius: 2px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
            border: solid 1px #ececec;
        }

        .sidbar_box_wrapper{
            display: none;
            position: absolute;
            right:30px;
            bottom:0;
            padding-right: 20px;
        }

        .sidebar_item{
            font-size:16px;
            color:#353535;
            width:100%;
            padding: 10px 20px 20px;
            text-align:left;
            display: block;
        }
        .sidebar_item:hover{
            background:#f9f9f9;
        }
        .sidebar_item.grey_back{
            background:#f9f9f9;
        }
        .sidebar_item img{
            width:24px;
            float: left;
            margin: 16px 0;
        }
        .sidebar_item p,.sidebar_item a{
            padding-left:40px;
        }
        .sidebar_cont{
            font-size: 14px;
            line-height: 1.43;
            text-align: left;
            color: #b2b2b2;
            margin-bottom: 0;
        }
        .close_sidebar{
            width: 17px;
            position: absolute;
            right:15px;
            top:15px;
            z-index: 10;
        }
        .sidebar_title{
            color:#353535;
            font-size:16px;
        }
        .sidebar_title:hover{
            color:#353535;
        }
</style>
