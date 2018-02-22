<template>
    <section>
    
        <div class="videoContent" style="display: none;">
    
            <div class="videoContentClose">×</div>
    
            <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="880" height="500" data-setup="{}">
    
                                <source class="videoSource"
    
                                        src="http://1251748120.vod2.myqcloud.com/9b137bfevodgzp1251748120/786601a69031868223226952508/bzns0JDtK8UA.mp4"
    
                                        type='video/mp4'/>
    
                                <source class="videoSource"
    
                                        src="http://1251748120.vod2.myqcloud.com/9b137bfevodgzp1251748120/786601a69031868223226952508/bzns0JDtK8UA.mp4"
    
                                        type='video/webm'/>
    
                                <source class="videoSource"
    
                                        src="http://1251748120.vod2.myqcloud.com/9b137bfevodgzp1251748120/786601a69031868223226952508/bzns0JDtK8UA.mp4"
    
                                        type='video/ogg'/>
    
                                <!--<track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track>-->
    
                                <!-- Tracks need an ending tag thanks to IE9 -->
    
                                <!--<track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track> -->
    
                                <!-- Tracks need an ending tag thanks to IE9 -->
    
                            </video>
    
        </div>
    
        <div class="picContent">
    
            <div class="header">
    
                <div class="headerDScreen animationSpeed"></div>
    
                <div class="banner">
    
                    <div class="bannerTitleBig">让您一分钟拥有自己的知识店铺</div>
    
                    <div class="bannerTitleSmall">小鹅通，专注内容付费的技术服务商</div>
    
                    <div class="btnGroup">
    
                        <div class="btnBlue openBtn loginLink btnCount">一键实现内容变现</div>
    
    
    
                        <div class="watchVideo btnCount">
    
                            <span class="playTitle">
    
                                                观看介绍视频
    
                                            </span>
    
                        </div>
    
                    </div>
    
                </div>
    
    
    
                <div class="bannerFoot">
    
                    <div class="innerBox">
    
                        <a class="btnCount" href="/function_inter#target_1">
    
                            <div class="item">
    
                                <img src="~/static/images/homepage/bannerIcon/p_1.png" alt="">
    
                                <p class="itemTitle btnText">内容付费</p>
    
                                <p class="subTitle" style="width: 110px;">多种主流形式，满足不同展示及分享需求</p>
    
                            </div>
    
                        </a>
    
                        <div class="border"></div>
    
                        <a class="btnCount" href="/function_inter#target_4">
    
                            <div class="item">
    
                                <img src="~/static/images/homepage/bannerIcon/p_2.png" alt="">
    
                                <p class="itemTitle btnText">用户管理</p>
    
                                <p class="subTitle" style="width: 98px;">沉淀并管理用户 一手掌握用户数据</p>
    
                            </div>
    
                        </a>
    
                        <div class="border"></div>
    
                        <a class="btnCount" href="/function_inter#target_3">
    
                            <div class="item">
    
                                <img src="~/static/images/homepage/bannerIcon/p_3.png" alt="">
    
                                <p class="itemTitle btnText">社群运营</p>
    
                                <p class="subTitle" style="width: 99px;">近距离、强互动 实现伴随式学习</p>
    
                            </div>
    
                        </a>
    
                        <div class="border"></div>
    
                        <a class="btnCount" href="/function_inter#target_2">
    
                            <div class="item">
    
                                <img src="~/static/images/homepage/bannerIcon/p_4.png" alt="">
    
                                <p class="itemTitle btnText">营销互动</p>
    
                                <p class="subTitle" style="width: 72px;">促进品牌传播提高成交量</p>
    
                            </div>
    
                        </a>
    
                        <div class="border"></div>
    
                        <a class="btnCount" href="/function_inter#target_4">
    
                            <div class="item">
    
                                <img src="~/static/images/homepage/bannerIcon/p_5.png" alt="">
    
                                <p class="itemTitle btnText">数据分析及财务管理</p>
    
                                <p class="subTitle" style="width: 120px;">数据化管理增长趋势 实时监测运营效果</p>
    
                            </div>
    
                        </a>
    
                        <div class="border"></div>
    
                        <a class="btnCount" href="/function_inter#target_6">
    
                            <div class="item">
    
                                <img src="~/static/images/homepage/bannerIcon/p_6.png" alt="">
    
                                <p class="itemTitle btnText">开放平台及定制服务</p>
    
                                <p class="subTitle" style="width: 110px;">开放接口、定制知识付费APP、小程序等</p>
    
                            </div>
    
                        </a>
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="content">
    
                <div class="customers" id="excellentCase">
    
                    <div class="mainContent" style="text-align: center;">
    
                        <div class="customersTitle">已有<span class="customersNum">106588</span>家机构选择我们的技术服务
    
                            <p>覆盖：自媒体、传统媒体、出版机构、教育机构、线下社群、认知盈余的个人</p>
    
                        </div>
    
                        <div class="customersTitleS">大V邀您一同开启内容变现之旅</div>
    
                        <img class="customersImage" src="~/static/images/homepage/functionPic/customers.png" alt="">
    
                        <div class="m_part_customers_bottom_text">（以上为部分小鹅通精选客户，排名不分先后）</div>
    
                    </div>
    
                </div>
    
                <div class="productFunction bc_blue" id="productFunction1">
    
                    <div class="mainContent">
    
                        <div class="pfPic pfPicLeft functionTransition">
    
                            <img class="part1" src="~/static/images/homepage/functionPic/part1.png" alt="">
    
                            <div class="swiperFirst firstBannerBox">
    
                                <div class="swiper-wrapper innerBox">
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part1_1.png"></div>
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part1_4.png"></div>
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part1_3.png"></div>
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part1_2.png"></div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                        <div class="pfContent pfContentRight functionTransition">
    
                            <div class="pfContentTitle">
    
                                知识店铺
    
                            </div>
    
                            <div class="pfContenIntro">
    
                                <p>多种主流内容变现方式，满足不同课程展示及分享需求</p>
    
                                <p>更有PC端访问支持、版权保护、内容防复制等功能</p>
    
                            </div>
    
                            <ul class="clearfix pfContentList">
    
                                <li style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAX9JREFUOBGlUrFKw1AU7XtJCWYQRXRzcnDQCoaQCOLg0MnZSUTp6tDJQcUiiIu7BX/Awc0/EBVJmiDE1R+wqFCQYiNN4rmpr8TwsEXf0HfPOffce99NC4V/Hib8SZLwRqNxDryqKMq2aZp3QhO353nlOI6rwIFlWTXGWNQv4LruLoqcUjKEN13X50qlUlOYfd/Xu93uK/AIcZzzHRSpcwJBEEzhOqKYDgpNtNvt4x7q/aLzKKLUTAxyyFNIC3Q6nSoInYjMqaDrjMDo9oyuh8DvmPC+WCyekcZhpGdsEsgdJYqivSyHAteapi3Ytr1sGMYLaRyLWUGR6WyiiMFvQZ8njHsWO7gNw/AJ+9qHlk5PE6wLg+RW8fYrGNYwzca3rsJzgi9WJ8wgPoBYlJgHUnhShcboL2qgI5eAxgcquEtsdTKnDQvTRQ6bLM1jjuM8YoIxqTqAxBNaKhZxgeBPBeBt0SdZQqPxX5olmLCGf+KNLIcKNJHwKRMz3Ecm/hF+AZ0tnH1krjOfAAAAAElFTkSuQmCC');">图文</li>
    
                                <li style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXJJREFUOBGVU7FKxTAUNWmxlHYQP8APsNLBoTg/8KGTP/EWUUFc/QcnxcXVb1Ac3t52EIXu8hYXwaWtKLb1nNiUWGnRwG1u7jnn5qa5EUu9kSRJgNCsaZopbI2wEGIBu4N7FUVRxpgeQjtZli0XRXEG0T5M6rg5I0kNu/Q87yQIgg9iKgHFeZ7fQDgxBUM+ksx9399lErVTu/OfxEzKjaihL9I03ajr+mGobMuy9oCFsC0KoXGV8Ps4oayqij9MVUKgP4A9w95hOUq3Nd5qZjaC21jo+NC8A2DS52E9lfioqxpSjsWp7UoyiajqBeAt5hXYG/zuuk0efR5hAcK6ATy5rrsZhuGrjsVxrN0fM7USH3ZYN7C+N8UtsNoRDIdawdZFBY8wfROf4Bw7jnNt27ZTluURsFNDp1yI2ZWhOhuSnKMXDvqksbWU8gLv4lDtyt5GtvmYwMTIpYYxlYA9zd5mVpZmkk2fGDn6HRD7dT3/fc5f2US5hvCSwyQAAAAASUVORK5CYII=');">音频</li>
    
                                <li style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAU1JREFUOBGlkbtOw2AMhXOBIkGGSlwGJqQOIPYk3BZ2VngBRuY+QzdGnoAJpL4FUqLMDN1Y6ASdAuqShO+EBCk/SlqEF/+2z/Fv+1jWP82OoujVdd0r3/ef4jh+K4pis6unbdvvYRhuJUlymmXZgxoUEF4ofELe5+12NaCWgZ2AXee9tyIwiT5uA+9QUKrVhKG4jV8VVoHlOM4FY+3wnCleYDNhxRGunIBO5+y/i1+ryfxwy/uE3FGdkyfugb3Ea12rvoHeDeOwBxx2IjCFEYRBA1AF5Qr6jZFu8B8miHEfPc87JD+kXghTYTXhzw3GQRDcEc+VXGBzYWkyFq68AXreM6pklBoN0wppmo5IDqir1if3DEcyfjdgrF8y5nl+DfAM0rGAtYFdTkaIQ5NcNemUsVf/1OZpupyMbQ3MvPaZslerjCbBkHFq1v8cfwGc3qa6djJsLAAAAABJRU5ErkJggg==');">视频</li>
    
                                <li style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPVJREFUOBFjZACCkydPvvr//78giE0sYGRkfG9ubi7GAtIA1CwEpJiJ1YykhwFsANC0I0BBJlIMAKr9R6J67MoZQcLAMLgD9AZJXgC6+i8wDFRgYaAANIckA4AW/gVZTqq/QXpQwAgwYD4wtPtRPI3GAccCmhiI+xeosQwYTX0gzqlTpy4DQ30GELOB+MgAIxCBGj8xMzP7wjSDFJuZmYFc4ghkvkLWDGKjG3CHhYXFwtTUdDu6QqAhx4BypkCDLiDLwQ0ASuzj5eU1NzY2vo6sAJltYmLyCOg6a6DYWmRxUFKeDPQfrvBAUQviANUyAsOlFsQGAO9wR22thaYEAAAAAElFTkSuQmCC');">专栏</li>
    
                                <li style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAWdJREFUOBG1Us9KhEAYd9Q2LYxuUXfvSatCnX2L6NClXiHoAbZ6hogu0SGo20LscQ+KkddgD73AsiwYpeaffp+oiG26lwaGb+b3bz7H4bj/HI7jPGI+tZ3Bt5FZlm1jrrVpxDYS3HsHzzG0eAdRaprmYV1s2/YeY8wlTBCEPsZrg78Bz0S02EcV6mSxHoBjtI7j+ALFKvC8wLMPPmGTyWR1Npu9AB33er0zTdPmrutaSZI81w3owtJ1feR53mYURQNwB4ZhaLyqqiE2Q6SdhmH4htaP0zS9rJtpDewKn3tEGmhPyIMu4vwvABgWhi3Ua+x3i31VCMO8BUAarvTkAaIojoH5RCw5/MLD5QG44W+0M1rSzJGWPKSvHhLA8jM6c+ra6iFJkvQQBMEGLiv/dX+l8DyfkbbkqwBFUb4QsIJ0hUjUhUE4wJdl+fNXwHQ63cHNnmOuE4laapr1A+/mHmDnM28aF+5/AATunpN9EYZ0AAAAAElFTkSuQmCC');">会员</li>
    
                            </ul>
    
                            <div class="btnBlue openBtn loginLink btnCount">创建我的店铺</div>
    
                        </div>
    
                    </div>
    
                </div>
    
                <div class="productFunction bc_Grey" id="productFunction2">
    
                    <div class="mainContent">
    
                        <div class="pfPic pfPicRight functionTransition" style="margin-right: -80px;">
    
                            <img class="part2_1" src="~/static/images/homepage/functionPic/part2_1.png" alt="">
    
                            <div class="swiperSecond secondBannerBox">
    
                                <div class="swiper-wrapper innerBox">
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_voice.png"></div>
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_video.png"></div>
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_ppt.png"></div>
    
                                    <div class="swiper-slide"><img src="~/static/images/homepage/functionPic/part2_videov.png"></div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                        <div class="pfContent pfContentLeft functionTransition" style="margin-top: 218px;">
    
                            <div class="pfContentTitle">
    
                                直播工具
    
                            </div>
    
                            <div class="pfContenIntro">
    
                                <p>4种直播形式，无人数限制，近距离、强互动地完成学习</p>
    
                                <p>附赠社群讨论、上墙、禁言等功能，方便管理课堂</p>
    
                            </div>
    
                            <div class="pfContenIntroPart">
    
                                <img src="~/static/images/homepage/functionPic/icon_voice.svg" alt=""> &nbsp;&nbsp;语音直播
    
                            </div>
    
                            <div class="pfContenIntroPart">
    
                                <img src="~/static/images/homepage/functionPic/icon_video.svg" alt=""> &nbsp;&nbsp;实时视频直播
    
                            </div>
    
                            <div class="pfContenIntroPart">
    
                                <img src="~/static/images/homepage/functionPic/icon_ppt.svg" alt=""> &nbsp;&nbsp;ppt直播
    
                            </div>
    
                            <div class="pfContenIntroPart">
    
                                <img src="~/static/images/homepage/functionPic/icon_playvideo.svg" alt=""> &nbsp;&nbsp;视频录播+语音直播
    
                            </div>
    
                            <div class="btnBlue openBtn loginLink btnCount" style="margin-top: 40px;">创建直播</div>
    
                        </div>
    
                    </div>
    
                </div>
    
                <div class="productFunction bc_blue" id="productFunction3">
    
                    <div class="mainContent">
    
                        <div class="pfPic pfPicLeft functionTransition">
    
                            <img class="part3_1" src="~/static/images/homepage/functionPic/part3_1.png" alt="">
    
                            <!-- <div class="swiper-container">
    
                                                <div class="swiper-wrapper">
    
                                                    <div class="swiper-slide swiper-pic1"></div>
    
                                                    <div class="swiper-slide swiper-pic2"></div>
    
                                                    <div class="swiper-slide swiper-pic3"></div>
    
                                                </div>
    
                                            </div> -->
    
                            <div v-swiper:mySwiper="swiperOption">
    
                                <div class="swiper-wrapper">
    
                                    <div class="swiper-slide" v-for="(banner,index) in swiper_banners" :key="index">
    
                                        <img :src="banner">
    
                                    </div>
    
                                </div>
    
                                <div class="swiper-pagination"></div>
    
                            </div>
    
                        </div>
    
                        <div class="pfContent pfContentRight functionTransition" style="margin-left: 220px;margin-top: 150px;">
    
                            <div class="CFunctionContent">
    
                                <div class="pfContentTitle">
    
                                    社群运营
    
                                </div>
    
                                <div class="pfContenIntro">
    
                                    <p>一对一或一对多形式，帮助讲师与学员多维度高频互动</p>
    
                                    <p>联通线上线下，提高成交量，实现伴随式学习</p>
    
                                </div>
    
                                <div class="CFunctionGroup">
    
                                    <div id="CF_1" class="CFunctionPart CActive" data-page="1">
    
                                        <div class="CFunctionPartImg">
    
                                            <span class="CFunctionPartImgContent CFunctionPartImg1"></span>
    
                                        </div>
    
                                        <span class="CFunctionPartTitle">小社群</span>
    
                                    </div>
    
                                    <div id="CF_2" class="CFunctionPart" data-page="2">
    
                                        <div class="CFunctionPartImg">
    
                                            <span class="CFunctionPartImgContent CFunctionPartImg2"></span>
    
                                        </div>
    
                                        <span class="CFunctionPartTitle">活动报名</span>
    
                                    </div>
    
                                    <div id="CF_3" class="CFunctionPart" data-page="3">
    
                                        <div class="CFunctionPartImg">
    
                                            <span class="CFunctionPartImgContent CFunctionPartImg3"></span>
    
                                        </div>
    
                                        <span class="CFunctionPartTitle">付费问答</span>
    
                                    </div>
    
                                </div>
    
                            </div>
    
    
    
                        </div>
    
                    </div>
    
                </div>
    
    
    
                <!-- todo:新媒体人评价轮播图 -->
    
                <div class="productFunction bc_Grey" id="productFunction4" style="height:600px; position: relative;">
    
                    <div class="mainContent">
    
                        <div class="customerBox">
    
                            <div class="customers customer_1">
    
                                <div class="contentBox">
    
                                    <p class="cContent">知识服务逐渐变成了有定价、有边界、服务非常清晰的产品。‘每天听见吴晓波’在过去短短几个月内发展到十几万付费用户，和小鹅通的使用有很大关系，它帮助我们在内容发布的过程中，完成用户的管理系统。</p>
    
                                    <p class="cName">吴晓波频道创始人&nbsp;&nbsp;&nbsp;吴晓波</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_2" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">自媒体有志于知识付费与社群运营的，小鹅通可以帮助他们获得收益与用户沉淀，使内容的价值得到良好体现。</p>
    
                                    <p class="cName">新榜创始人&nbsp;&nbsp;&nbsp;徐达内</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_3" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">小鹅通，自媒体人坚实的桥梁，连接好内容，连接好知识 。</p>
    
                                    <p class="cName">十点读书创始人&nbsp;&nbsp;&nbsp;林少</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_4" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">小鹅通团队专业又热情，帮助我们张德芬空间更专注于内容、用户服务，特别大地提升了我们的付费用户满意度。繁杂的互联网工具选择中，有小鹅通真好。</p>
    
                                    <p class="cName">张德芬空间联合创始人&nbsp;&nbsp;&nbsp;刘丹</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_5" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">与小鹅通合作后，我们的内容付费产品有了突飞猛进的发展，小鹅通让‘青音约’插上了翅膀。</p>
    
                                    <p class="cName">青音约创始人&nbsp;&nbsp;&nbsp;青音</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_6" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">很开心在2016年年底的时候遇到小鹅通，真是帮助我们解决了平台建设的大问题。在各种诱惑和压力下，创业公司其实很难做到保持定力，所以我很赞赏小鹅通团队只做工具的定位和定力！</p>
    
                                    <p class="cName">国际金融学者 / 《货币战争》作者 / 《鸿观》主讲人 &nbsp;宋鸿兵</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_7" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">小鹅通帮我们解决了锁屏听、连续播放等问题，也带来了许多便利。</p>
    
                                    <p class="cName">著名军事专家 / 局座召忠创始人 &nbsp;张召忠</p>
    
                                </div>
    
                            </div>
    
                            <div class="customers customer_8" style="display: none">
    
                                <div class="contentBox">
    
                                    <p class="cContent">小鹅通让天下知识人从容地实现商业变现，让用户安心地享用高质量内容。</p>
    
                                    <p class="cName">腾讯科技中心总监 / 企鹅智酷发起人&nbsp; 龙兵华</p>
    
                                </div>
    
                            </div>
    
                        </div>
    
                        <ul class="nailBox">
    
                            <li class="nail_1 activeNail">
    
                                <img src="~/static/images/homepage/customer/thumbnail_1.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">吴晓波频道</p>
    
                                    <p class="shop_name">吴晓波</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_2"><img src="~/static/images/homepage/customer/thumbnail_2.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">新榜</p>
    
                                    <p class="shop_name">徐达内</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_3"><img src="~/static/images/homepage/customer/thumbnail_3.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">十点读书</p>
    
                                    <p class="shop_name">林少</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_4"><img src="~/static/images/homepage/customer/thumbnail_4.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">张德芬空间</p>
    
                                    <p class="shop_name">刘丹</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_5"><img src="~/static/images/homepage/customer/thumbnail_5.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">青音约</p>
    
                                    <p class="shop_name">青音</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_6"><img src="~/static/images/homepage/customer/thumbnail_6.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">鸿学院</p>
    
                                    <p class="shop_name">宋鸿兵</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_7"><img src="~/static/images/homepage/customer/thumbnail_7.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">局座召忠</p>
    
                                    <p class="shop_name">张召忠</p>
    
                                </div>
    
                            </li>
    
                            <li class="nail_8"><img src="~/static/images/homepage/customer/thumbnail_8.png">
    
                                <div class="box_mask">
    
                                    <p class="shop_title">企鹅智酷</p>
    
                                    <p class="shop_name">龙兵华</p>
    
                                </div>
    
                            </li>
    
                        </ul>
    
                    </div>
    
                </div>
    
                <div class="productFunction footerBanner" id="productFunction5" style="height: 600px;">
    
                    <div class="mainContent">
    
                        <div class="footerBannerPic">
    
                            <img class="part5_1" src="~/static/images/homepage/functionPic/part5_1.png" alt="">
    
                        </div>
    
                        <div class="pfContent pfContentRight functionTransition footerBannerContent">
    
                            <div class="pfContentTitle ">
    
                                一分钟拥有自己的知识店铺 零门槛实现知识变现
    
                            </div>
    
                            <div class="btnBlue largeBtn loginLink btnCount" style="float: left; margin-top: 60px;">开启内容变现之旅</div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </section>
</template>

<script>
    import Vue from 'vue';
    
    if (process.browser) {
    
        const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    
        Vue.use(VueAwesomeSwiper)
    
    }
    
    export default {
        data(){
            return {
                swiperOption: {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    lazyLoading: true,
                    lazyLoadingOnTransitionStart: true
                },
                swiper_banners: ['a.jpg']
            }
        }
    }
</script>

<style>
    
</style>
