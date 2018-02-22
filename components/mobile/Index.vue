<template>
  <section>
      <div class="mobileContent">
        <div class="videoContent" style="display: none;">
            <div class="videoContentClose">×</div>
            <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="880"
                   height="500"
                   data-setup="{}">
                <source class="videoSource"
                        src="http://1251748120.vod2.myqcloud.com/9b137bfevodgzp1251748120/786601a69031868223226952508/bzns0JDtK8UA.mp4"
                        type='video/mp4'/>
                <source class="videoSource"
                        src="http://1251748120.vod2.myqcloud.com/9b137bfevodgzp1251748120/786601a69031868223226952508/bzns0JDtK8UA.mp4"
                        type='video/webm'/>
                <source class="videoSource"
                        src="http://1251748120.vod2.myqcloud.com/9b137bfevodgzp1251748120/786601a69031868223226952508/bzns0JDtK8UA.mp4"
                        type='video/ogg'/>
            
            </video>
        </div>
        <div class="m_header">
            <div class="headerDScreen animationSpeed"></div>
            <div class="m_bigTitle">让您一分钟拥有自己的知识店铺</div>
            <div class="m_smallTitle">小鹅通，专注内容付费的技术服务商</div>
            <div class="watchVideo m_watchVideo btnCount">观看介绍视频
                <span class="btnText" style="display: none">手机端观看介绍视频</span>
            </div>
            <div class="m_registerBtn m_btnBlue freeUse btnCount">一键实现内容变现</div>
        </div>

        <div class="m_content">
            <div class="m_productFunction" id="m_excellentCase" style="height: 7rem;">
                <div class="m_partTitle">
                    <span class="customersNum" style="color: #448bff;">106588</span>家机构选择我们的技术服务
                </div>
                <div class="m_partIntro">
                    覆盖：自媒体、传统媒体、出版机构、教育机构、<br/>
                    线下培训、认知盈余的个人<br/>
                    大V邀您一同开启内容变现之旅
                </div>
                <div class="m_part_customers">
                    <img src="~/static/images/homepage/functionPic/m_customers.png" style="width:100%"/>
                </div>
                <p class="m_customers_sub">（以上为部分小鹅通精选客户，且排名不分先后）</p>

                <div data-baidu-event ="mobile"
                     data-event-type = "首页-客户案例"
                     data-event-name = "更多案例，马上试用"
                     class="freeUse m_blankBlue">
                    更多案例，马上试用
                </div>
            </div>

            <div class="m_productFunction" style="height: 7rem; background-color: #f3f6fb;">
                <div class="m_partTitle">
                    知识变现，认准小鹅通
                </div>
                <div class="m_partIntro">
                    六大核心产品功能，给您最专业的技术服务
                </div>
                <ul class="m_contentList clearfix">
                    <li>
                        <div class="img-content">
                            <img src="~/static/images/homepage/functionPic/icon_content.svg" alt="" />
                        </div>
                        <div class="title">内容付费</div>
                        <div class="info">
                            <p>多种主流形式，满足</p>
                            <p>不同展示及分享需求</p>
                        </div>
                    </li>
                    <li>
                        <div class="img-content">
                            <img src="~/static/images/homepage/functionPic/icon_userm.svg" alt="" />
                        </div>
                        <div class="title">用户管理</div>
                        <div class="info">
                            <p>沉淀并管理用户</p>
                            <p>一手掌握用户数据</p>
                        </div>
                    </li>
                    <li>
                        <div class="img-content">
                            <img src="~/static/images/homepage/functionPic/icon_community.svg" alt="" />
                        </div>
                        <div class="title">社群运营</div>
                        <div class="info">
                            <p>近距离、强互动</p>
                            <p>实现伴随式学习</p>
                        </div>
                    </li>
                    <li>
                        <div class="img-content">
                            <img src="~/static/images/homepage/functionPic/icon_sales.svg" alt="" />
                        </div>
                        <div class="title">营销互动</div>
                        <div class="info">
                            <p>促进品牌传播</p>
                            <p>提高成交量</p>
                        </div>
                    </li>
                    <li>
                        <div class="img-content">
                            <img src="~/static/images/homepage/functionPic/icon_data.svg" alt="" />
                        </div>
                        <div class="title">数据分析及财务管理</div>
                        <div class="info">
                            <p>数据化管理增长趋势</p>
                            <p>实时监测运营效果</p>
                        </div>
                    </li>
                    <li>
                        <div class="img-content">
                            <img src="~/static/images/homepage/functionPic/icon_openplatform.svg" alt="" />
                        </div>
                        <div class="title">开放平台及定制服务</div>
                        <div class="info">
                            <p>开放接口、定制知识</p>
                            <p>付费APP、小程序等</p>
                        </div>
                    </li>
                </ul>
                <div class="m_blueLink">
                    <a data-baidu-event ="mobile"
                       data-event-type = "首页-知识变现"
                       data-event-name = "立即免费试用"
                       href="https://admin.xiaoe-tech.com/login_page#/mobileRegiste">立即免费试用 <i class="arrowToRight"></i>
                    </a>
                </div>
            </div>

            <div class="m_productFunction m_mainContent" id="m_productFunction" style="height:3rem;background: #fff;padding-top: .3rem;">


                <div class="m_left_picture">
                    <div class="m_part1_1">
                        <img src="~/static/images/homepage/functionPic/m_part3_1.png"/>
                        <div class="swiperFirst secondBannerBox">
                            <div class="swiper-wrapper innerBox">
                                <div class="swiper-slide"><img src="~/static/images/mobile/banner/shop_1.png"></div>
                                <div class="swiper-slide"><img src="~/static/images/mobile/banner/shop_2.png"></div>
                                <div class="swiper-slide"><img src="~/static/images/mobile/banner/shop_3.png"></div>
                                <div class="swiper-slide"><img src="~/static/images/mobile/banner/shop_4.png"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m_right_part">
                    <div class="m_partTitle">
                        知识店铺
                    </div>
                    <div class="m_partIntro" style="text-align: left">
                        多种主流内容变现方式，满足不同课程展示及分享需求，更有PC端访问支持、版权保护、内容复制等功能
                    </div>
                    <div class="m_blueLink">
                        <a data-baidu-event ="mobile"
                           data-event-type = "首页-知识店铺"
                           data-event-name = "创建店铺"
                           href="https://admin.xiaoe-tech.com/login_page#/mobileRegiste">创建店铺 <i class="arrowToRight"></i></a>
                    </div>
                </div>



            </div>

            <div class="m_productFunction m_mainContent m_alive_bg" style="min-height: 5rem;">
                <div class="m_partTitle">
                    直播工具
                </div>
                <div class="m_partIntro">
                    4种直播形式，无人数限制，近距离、强互动地<br/>
                    完成学习附赠社群讨论、上墙、禁言等功能，<br/>
                    方便管理课堂
                </div>
                <div class="m_blueLink" style="margin:0;margin-top: 0.2rem;">
                    <a data-baidu-event ="mobile"
                       data-event-type = "首页-直播工具"
                       data-event-name = "创建直播"
                       href="https://admin.xiaoe-tech.com/login_page#/mobileRegiste">创建直播 <i class="arrowToRight"></i></a>
                </div>
                <div class="m_functionContent">
                    <div class="m_part2_2">
                        <img src="~/static/images/mobile/live_phone_img.png"/>
                        <div class="swiperSecond secondBannerBox">
                            <div class="swiper-wrapper innerBox">
                                <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_voice.png"></div>
                                <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_video.png"></div>
                                <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_ppt.png"></div>
                                <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_videov.png"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m_productFunction" id="m_productFunction" style="height: 5.3rem">
                <div class="m_partTitle">
                    社群运营
                </div>
                <div class="m_partIntro">
                    一对一或一对多形式，帮助讲师与学员多维度<br/>
                    高频互动联通线上线下，提高成交量，实现伴随<br/>
                    式学习
                </div>
                <div class="m_blueLink" style="margin:0;margin-top: 0.2rem;">
                    <a data-baidu-event ="mobile"
                       data-event-type = "首页-社群运营"
                       data-event-name = "创建社群"
                       href="https://admin.xiaoe-tech.com/login_page#/mobileRegiste">创建社群 <i class="arrowToRight"></i></a>
                </div>
                <div class="m_functionContent" style="width: 3rem;">
                    <div class="m_part3_1">
                        <img src="~/static/images/homepage/functionPic/m_part3_1.png" alt="">
                        <div class="m_social_swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide m_social_pic_1"></div>
                                <div class="swiper-slide m_social_pic_2"></div>
                                <div class="swiper-slide m_social_pic_3"></div>
                                <div class="swiper-slide m_social_pic_4"></div>
                                <div class="swiper-slide m_social_pic_5"></div>
                            </div>
                        </div>
                    </div>
                    <div class="socialBtnGroup">
                        <div id="sa_1" class="socialEvent activeEvent" data-page="1">
                            <div class="socialIcon socialEvent1"></div>
                            <div class="socialTitle">付费问答</div>
                        </div>

                        <div id="sa_2" class="socialEvent" data-page="2">
                            <div class="socialIcon socialEvent2"></div>
                            <div class="socialTitle">活动管理</div>
                        </div>

                        <div id="sa_3" class="socialEvent" data-page="3">
                            <div class="socialIcon socialEvent3"></div>
                            <div class="socialTitle">作业本</div>
                        </div>

                        <div id="sa_4" class="socialEvent" data-page="4">
                            <div class="socialIcon socialEvent4"></div>
                            <div class="socialTitle">小社群</div>
                        </div>

                        <div id="sa_5" class="socialEvent" data-page="5">
                            <div class="socialIcon socialEvent5"></div>
                            <div class="socialTitle">打 卡</div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="m_footerBanner">
                <div class="m_partTitle">
                    开启内容变现之旅
                </div>
                <div class="m_footerBannerIntro">
                    让您一分钟拥有自己的知识店铺，零门槛实现<br/>
                    知识变现
                </div>
                <div data-baidu-event ="mobile"
                     data-event-type = "首页-开启内容变现之旅"
                     data-event-name = "免费试用，立即开店"
                     class="m_registerBtn m_btnBlue freeUse">免费试用，立即开店</div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
