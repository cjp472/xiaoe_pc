<template>
    <section class="container">
        <section v-if="!is_mobile">
            <Header></Header>
            <PcIndex v-if="!is_mobile"></PcIndex>
            <Footer></Footer>
        </section>
        <section v-else>
            <MobileHeader></MobileHeader>
            <MobileIndex></MobileIndex>
            <MobileFooter></MobileFooter>
        </section>
    </section>
</template>

<script>
    import PcIndex from '~/components/pc/Index.vue';
    import MobileIndex from '~/components/mobile/Index.vue';
    import Header from '~/components/pc/Header.vue';
    import MobileHeader from '~/components/mobile/Header.vue';
    import Footer from '~/components/pc/Footer.vue';
    import MobileFooter from '~/components/mobile/Footer.vue';
    export default {
        asyncData({
            store,
            route,
            is_mobile
        }) {
            return {
                is_mobile
            }
        },
        data() {
    
        },
        created() {
            //console.log('user:'+this.is_mobile);
        },
        methods: {
            contentAnimation() {
                var functionH = $('#productFunction1').height();
                // console.log(topDistance('#productFunction'));
                if (-1.9 * functionH < topDistance('#productFunction1') && topDistance('#productFunction1') < -10 && functionLooked1 == 0) {
                    // console.log("到达productFunction1");
                    functionLooked1 = 1;
                    $("#productFunction1 .pfPicLeft").addClass('moveRight');
                    $("#productFunction1 .pfContentRight").addClass('moveLeft');
                }
                if (-1.9 * functionH < topDistance('#productFunction2') && topDistance('#productFunction2') < -10 && functionLooked2 == 0) {
                    // console.log("到达productFunction2");
                    functionLooked2 = 1;
                    $("#productFunction2 .pfPicRight").addClass('moveLeft');
                    $("#productFunction2 .pfContentLeft").addClass('moveRight');
                }
                if (-1.9 * functionH < topDistance('#productFunction3') && topDistance('#productFunction3') < -10 && functionLooked3 == 0) {
                    // console.log("到达productFunction3");
                    functionLooked3 = 1;
                    $("#productFunction3 .pfPicLeft").addClass('moveRight');
                    $("#productFunction3 .pfContentRight").addClass('moveLeft');
                }
                if (-1.9 * functionH < topDistance('#productFunction5') && topDistance('#productFunction5') < -10 && functionLooked5 == 0) {
                    // console.log("到达productFunction5");
                    functionLooked5 = 1;
                    $("#productFunction5 .pfPicLeft").addClass('moveRight');
                    $("#productFunction5 .pfContentRight").addClass('moveLeft');
                }
                if (-1.9 * functionH < topDistance('#excellentCase') && topDistance('#excellentCase') < -10 && caseLooked == 0) {
                    console.log("到达excellentCase");
                    caseLooked = 1;
    
                    var count = $('.customersNum').text();
                    numIncrease(1500, count, 1000);
                }
            },
            numIncrease(initNum, lastNum, timeDuration) {
                $.get('/getCount', function(data) {
                    var currentCount = data.data;
    
                    var nowNum = initNum;
                    var distance = currentCount - initNum;
    
                    var timer = setInterval(function() {
                        // console.log('timer is running');
                        if (nowNum < currentCount) {
                            nowNum += 1131;
                            // console.log('nowNum is :'+nowNum);
                            $('.customersNum').text(nowNum);
                        } else {
                            clearInterval(timer);
                        }
                    }, timeDuration / distance);
                });
            }
        },
        components: {
            Header,
            MobileHeader,
            Footer,
            PcIndex,
            MobileIndex,
            MobileFooter
        }
    }
</script>

<style>
    
</style>
