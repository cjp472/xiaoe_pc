<template>
    <section>
    
        <div class="m_footer">
    
            <div class="m_footerContact">
    
                <div class="m_footerContactContent">
    
                    <div class="m_footerContactContentP">客服电话：400-102-6665</div>
    
                    <div class="m_footerContactContentP">客服办公时间：<br/>周一到周日 9:00-21:30</div>
    
                    <div class="m_footerContactContentP">客服支持：<br/>xiaoekf@xiaoe-tech.com</div>
    
                    <div class="m_footerContactContentP">商务合作：<br/>support@xiaoe-tech.com</div>
    
                    <div class="m_footerContactContentP">公司地址：<br/>深圳市南山区讯美科技广场3号楼14B10</div>
    
                </div>
    
                <div id="m_footerQrCode">
    
                    <div class="m_footerQrCodeImg">
    
                        <img src="~static/images/homepage/xe_qrcode.jpg" alt="">
    
                    </div>
    
                    <div class="m_footerQrCodeIntro">
    
                        微信扫码关注小鹅通
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="m_webInfo">
    
                <div class="m_webInfoContent">Copyright © 2015-2017 深圳小鹅网络技术有限公司 ALL Rights Reserved. 粤ICP备15020529号
    
                </div>
    
            </div>
    
        </div>
    
    
    
        <div class="mobile-service-box" id="mobile-service-box">
    
            <div id="service-slider-box" class="service-slider" style="display: none">
    
                <div class="slider-item service-phone">
    
                    客服电话：<a data-baidu-event="mobile" data-event-type="底部客服" data-event-name="客服电话" href="tel:4001026665">400-102-6665</a>
    
                </div>
    
                <div data-baidu-event="mobile" data-event-type="底部客服" data-event-name="在线客服" id="mobileTargetBtn" class="slider-item online-consult">在线客服</div>
    
            </div>
    
            <div class="start-consult">
    
                立即咨询
    
            </div>
    
        </div>
    
        <div class="deepDarkFantasy" style="display: none;">
    
        </div>
    
    </section>
</template>

<script>
    export default {
    
    
    
    }
</script>

<style>
    .deepDarkFantasy {
    
        z-index: 100;
    
        background-color: #000000;
    
        position: fixed;
    
        opacity: 0.5;
    
        width: 100%;
    
        height: 100%;
    
        bottom: 0;
    
    }
    
    
    
    .mobile-service-box {
    
        position: fixed;
    
        bottom: 0rem;
    
        width: 100%;
    
        z-index: 1000;
    
    }
    
    
    
    .service-slider {
    
        bottom: 0rem;
    
        width: 100%;
    
        background-color: #fff;
    
        border-bottom: 0.04rem solid #e1e1e1;
    
    }
    
    
    
    .service-slider div.slider-item {
    
        height: 0.5rem;
    
        border-bottom: 0.01rem solid #e9e9e9;
    
        font-size: 0.16rem;
    
        text-align: center;
    
        line-height: 0.5rem;
    
    }
    
    
    
    .service-slider div.slider-item a {
    
        color: #2a75ed;
    
        ;
    
    }
    
    
    
    .start-consult {
    
        transition: linear 0.3s 0s;
    
        width: 100%;
    
        height: 0.5rem;
    
        color: #fff;
    
        background: #2a75ed;
    
        font-size: 0.16rem;
    
        text-align: center;
    
        line-height: 0.5rem;
    
    }
    
    
    
    .pickUp {
    
        color: #666;
    
        background: #fff;
    
    }
    
    
    
    .m_footer {
    
        width: 100%;
    
        margin-bottom: 0.5rem;
    
        height: auto;
    
        overflow: hidden;
    
    }
    
    
    
    .m_footerContact {
    
        width: 100%;
    
        padding: 0.15rem;
    
        box-sizing: border-box;
    
        text-align: left;
    
        background: #313954;
    
        position: relative;
    
    }
    
    
    
    .m_footerContactContent {
    
        width: 100%;
    
        border-bottom: 0.01rem solid #a1a6b5;
    
        color: #a1a6b5;
    
    }
    
    
    
    .m_footerContactContentT {
    
        color: #fff;
    
        font-size: 0.12rem;
    
        line-height: 0.18rem;
    
        margin-bottom: 0.15rem;
    
    }
    
    
    
    .m_footerContactContentP {
    
        font-size: 0.12rem;
    
        line-height: 0.18rem;
    
        margin-bottom: 0.15rem;
    
    }
    
    
    
    #m_footerQrCode {
    
        position: absolute;
    
        top: 0.6rem;
    
        right: 9%;
    
    }
    
    
    
    .m_footerQrCodeImg {
    
        width: 1rem;
    
        height: 1rem;
    
        margin-left: auto;
    
        margin-right: auto;
    
        margin-top: 0.2rem;
    
    }
    
    
    
    .m_footerQrCodeImg img {
    
        width: 100%;
    
        height: 100%;
    
    }
    
    
    
    .m_footerQrCodeIntro {
    
        width: 100%;
    
        margin-top: 0.05rem;
    
        color: #a1a6b5;
    
        font-size: 0.12rem;
    
        text-align: center;
    
    }
    
    
    
    .m_webInfo {
    
        overflow: hidden;
    
        width: 100%;
    
        height: 50px;
    
        background: #232b46;
    
        padding: 0.09rem 0 0.09rem 0;
    
        box-sizing: border-box;
    
    }
    
    
    
    .m_webInfoContent {
    
        width: 3.5rem;
    
        height: auto;
    
        line-height: 0.16rem;
    
        font-size: 0.12rem;
    
        margin-left: auto;
    
        margin-right: auto;
    
        color: #737d9f;
    
        text-align: center;
    
        position: relative;
    
    }
</style>
