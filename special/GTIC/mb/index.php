<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"
      xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scale=no,minimum-scale=1,maximum-scale=1">
    <title>「智慧进化 刷新未来」GTIC 2017全球(智慧)科技创新峰会</title>
    <link rel="stylesheet" href="http://cdn.jiguo.com/zdx/park/img/favicon.ico">
    <link rel="stylesheet" href="http://cdn.jiguo.com/special/GTIC/css/base.css">
    <link rel="stylesheet" href="http://cdn.jiguo.com/special/GTIC/mb/css/index.css">
    <link rel="stylesheet" href="http://cdn.jiguo.com/special/GTIC/lib/swiper/swiper.min.css">
    <script src="http://cdn.jiguo.com/special/GTIC/lib/jquery.min.js"></script>

    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div style='margin:0 auto;width:0px;height:0px;overflow:hidden;'>
    <img src="http://cdn.jiguo.com/special/GTIC/images/share.jpg" width='700'>
</div>
<!--loading-->
<div id="loading">
    <div class="center">
        <img src="http://cdn.jiguo.com/special/GTIC/images/loading.png" alt="" class="">
        <div class="wait">
            <span></span>
        </div>
    </div>
</div>
<!--进度条-->
<script>
    $(function () {
        (function () {
            var time = 0;
            var timer = setInterval(function () {
                time++;
                var rate = (time / 5 * 100);
                var loading = $('#loading').find('span');
                loading.animate({'width': '' + rate + '%'}, 1);
                if (time === 5) {
                    clearInterval(timer);
                }
            }, 1000)
        })()
    })
</script>

<!--导航-->
<div class="nav">
    <img src="http://cdn.jiguo.com/special/GTIC/images/GTIC.png" alt="" class="fl" data-logo>
    <div class="menu fr">
        <img src="http://cdn.jiguo.com/special/GTIC/images/menu.png" alt="" id="menu-down">
        <img src="http://cdn.jiguo.com/special/GTIC/images/nav-close.png" alt="" class="display" id="menu-close">
    </div>
    <div class="navbar display">
        <ul class="clearfix">
            <li class="active" id="first"><a href="#about">关于峰会</a></li>
            <li id="second"><a href="#guest">峰会嘉宾</a></li>
            <li id="third"><a href="#GTIC" data-self>GTIC AWARDS 2017</a></li>
            <li id="fourth"><a href="#park">科技公园</a></li>
            <li id="fifth"><a href="#enroll">峰会报名</a></li>
            <li id="sixth"><a href="#address">大会地址</a></li>
            <li id="seventh"><a href="#partner">合作伙伴</a></li>
            <li id="eighth"><a href="#contact">联系我们</a>
            </li>
        </ul>
    </div>
</div>

<!--首图-->
<header id="header" class="header">
    <div class="introduce">
        <img src="http://cdn.jiguo.com/special/GTIC/images/GTIC.png" alt="GTIC" class="head_logo">
        <img src="http://cdn.jiguo.com/special/GTIC/images/head_title.png" alt="introduce">
    </div>
    <div class="host">
        <span>主办方</span>
        <ul class="clearfix">
            <li>
                <img src="http://cdn.jiguo.com/special/GTIC/images/h-zhidx.png" alt="智东西"
                     title="智东西">
            </li>
            <li>
                <img src="http://cdn.jiguo.com/special/GTIC/images/head_awe.png" alt="AWE"
                     title="AWE">
            </li>
            <li>
                <img src="http://cdn.jiguo.com/special/GTIC/images/head_jiguo.png" alt="极果"
                     title="极果">
            </li>
            <li>
                <img src="http://cdn.jiguo.com/special/GTIC/images/head_gfk.png" alt="GFK"
                     title="GFK">
            </li>
            <li>
                <img src="http://cdn.jiguo.com/special/GTIC/images/head_qq.png" alt="腾讯科技"
                     title="腾讯科技">
            </li>
        </ul>

        <p>中国·上海卓美亚喜玛拉雅酒店</p>
        <p>2017.3.10</p>
    </div>
    <div class="next">
        <div class="icon"></div>
    </div>
</header>
<!--关于峰会-->
<section id="about">
    <div class="title">
        <div class="ch">智慧进化 刷新未来</div>
        <div class="en">Evolutionary Intelligence Refresh Future</div>
    </div>
    <div class="introduce">
        <p>
            万物不断形成互联，一切变得高度智能。人工智能的再次进化，大数据的爆炸式增长，推动智慧产业——继计算机、互联网与移动互联网之后，成为新一轮科技创新浪潮。因为智慧的高速进化，未来已然在被刷新。</p>
        <p>GTIC 2017全球（智慧）科技创新峰会，聚集国内外人工智能的产业力量，以行业从业者的视角，探讨这一轮科技浪潮的机遇与挑战。</p>
        <p>在这里，与创新者踏浪而行。</p>
    </div>

    <ul class="clearfix">
        <li>
            <img src="http://cdn.jiguo.com/special/GTIC/images/user.png" alt="">
            <p class="num">1000+</p>
            <p class="name">行业用户</p>
        </li>
        <li>
            <img src="http://cdn.jiguo.com/special/GTIC/images/power.png" alt="">
            <p class="num">300+</p>
            <p class="name">产品力量</p>
        </li>
        <li>
            <img src="http://cdn.jiguo.com/special/GTIC/images/video.png" alt="">
            <p class="num">100+</p>
            <p class="name">全球媒体</p>
        </li>
        <li>
            <img src="http://cdn.jiguo.com/special/GTIC/images/park.png" alt="">
            <p class="num">6000㎡</p>
            <p class="name">科技公园体验区</p>
        </li>
    </ul>
</section>

<!--峰会嘉宾-->
<section id="guest">
    <div class="title">
        <div class="ch">拟邀嘉宾</div>
        <div class="en">Invited Guests</div>
    </div>

    <div class="swiper-container swiper_box">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <ul class="clearfix">
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/00-Max%20Conze-戴森公司CEO.jpg"
                             alt="">
                        <div class="name">Max Conze</div>
                        <div class="company">戴森公司CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/01-周志华-南京大学LAMDA所长.jpg"
                             alt="">
                        <div class="name">周志华</div>
                        <div class="company">南京大学LAMDA所长</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/02-李飞飞-Google%20Cloud机器学习团队负责人.jpg"
                             alt="">
                        <div class="name">李飞飞</div>
                        <div class="company">Google Cloud机器学习团队负责人</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/03-Dave%20Limp-亚马逊硬件产品高级副总裁.jpg"
                             alt="">
                        <div class="name">Dave Limp</div>
                        <div class="company">亚马逊硬件产品高级副总裁</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/04-杨旭-英特尔全球副总裁兼中国区总裁.jpg"
                             alt="">
                        <div class="name">杨旭</div>
                        <div class="company">英特尔全球副总裁兼中国区总裁</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/05-王小川-搜狗公司CEO.jpg"
                             alt="">
                        <div class="name">王小川</div>
                        <div class="company">搜狗公司CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/06-任宇翔-特斯拉汽车全球副总裁、亚太地区负责人.jpg"
                             alt="">
                        <div class="name">任宇翔</div>
                        <div class="company">特斯拉汽车全球副总裁、亚太地区负责人</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/07-刘庆峰-科大讯飞董事长.jpg"
                             alt="">
                        <div class="name">刘庆峰</div>
                        <div class="company">科大讯飞董事长</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/08-赵明-华为荣耀总裁.png"
                             alt="">
                        <div class="name">赵明</div>
                        <div class="company">华为荣耀总裁</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/09-徐立-商汤科技CEO.jpg"
                             alt="">
                        <div class="name">徐立</div>
                        <div class="company">商汤科技CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/10-周剑-优必选创始人兼CEO.jpg"
                             alt="">
                        <div class="name">周剑</div>
                        <div class="company">优必选创始人兼CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/11-Cynthia%20Breazeal-Jibo创始人.jpg"
                             alt="">
                        <div class="name"><img src="http://cdn.jiguo.com/special/GTIC/images/Cynthia%20Breazeal@3x.png" alt=""></div>
                        <div class="company">Jibo创始人</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/12-吴甘沙-驭势科技联合创始人兼CEO.jpg"
                             alt="">
                        <div class="name">吴甘沙</div>
                        <div class="company">驭势科技联合创始人兼CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/13-顾维灏-百度L3事业部总经理.jpg"
                             alt="">
                        <div class="name">顾维灏</div>
                        <div class="company">百度L3事业部总经理</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/14-Misa-Rokid创始人兼CEO.jpg"
                             alt="">
                        <div class="name">Misa</div>
                        <div class="company">Rokid创始人兼CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/15-刘铁岩-微软亚洲研究院首席研究员.jpg"
                             alt="">
                        <div class="name">刘铁岩</div>
                        <div class="company">微软亚洲研究院首席研究员</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/16-沈海寅-奇点汽车创始人兼CEO.jpg"
                             alt="">
                        <div class="name">沈海寅</div>
                        <div class="company">奇点汽车创始人兼CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/17-夏珩-小鹏汽车CEO.jpg"
                             alt="">
                        <div class="name">夏珩</div>
                        <div class="company">小鹏汽车CEO</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/18-颜水成－360首席科学家、人工智能研究院院长.jpg"
                             alt="">
                        <div class="name">颜水成</div>
                        <div class="company">360首席科学家、人工智能研究院院长</div>
                    </li>
                    <li>
                        <img src="http://cdn.jiguo.com/special/GTIC/images/19-顾嘉唯-物灵科技联合创始人兼副总裁.jpg"
                             alt="">
                        <div class="name">顾嘉唯</div>
                        <div class="company">物灵科技联合创始人兼副总裁</div>
                    </li>

                </ul>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
</section>
<!--GTIC AWARDS-->
<section id="GTIC">
    <div class="pic">
        <img src="http://cdn.jiguo.com/special/GTIC/images/awards.png" alt="">
    </div>
    <p>时代交错，唯智能与创新能突破平庸。</br>
        智能时代来临，从万物互联到人工智能，</br>
        智慧的再次进化，一次次打破曾经的认知，激发出更多可能性。</br>
        世界再也不是一块屏幕主导，边界在不断延伸，</br>
        新的物种进入生活，未来正在刷新。</br>
        创业者出现沉浮，新的勇敢者加入，</br>
        好奇心、创造力、对未知的渴望，让他们得以突破平庸，站上新的高度。</br>
        虽然不是所有的人，所有的技术，所有的产品，所有的公司，</br>
        都能最终改变世界，完成颠覆。</br>
        但每一次对于创新的努力，都在让不可知的未来得以接近。</br>
        2017年，我们愿意用这样的思维看待过往和将来。</br>
        我们愿意与创新者同行！</p>
    <div class="go">
        <a href="javascript:;">直达 GTIC AWARDS 2017 <i class="arrow"></i></a>
    </div>
    <div class="next">
        <div class="icon"></div>
    </div>
</section>
<!--PARK-->
<section id="park">
    <div class="pic">
        <img src="http://cdn.jiguo.com/special/GTIC/images/technology.png" alt="">
    </div>
    <p> 科技公园由AWE与极果联合主办，</br>
        定位集中在新一代跨界融合科技、硬件创新及可消费的终端科技，</br>
        搭建真正以消费者体验为中心的超级智慧生活展区，</br>
        进一步延伸对于家庭智慧生活的前瞻与展望，</br>
        真正把更丰富的智慧生活场景搬上舞台，</br>
        包含智慧出行、智慧娱乐、人工智能、智能生活、运动健康等更多领域和产业。</p>
    <div class="go">
        <a href="http://park.jiguo.com/" target="_blank">直达科技公园 <i class="arrow"></i></a>
    </div>
    <div class="next">
        <div class="icon"></div>
    </div>
</section>
<!--活动报名-->
<section id="enroll">
    <div class="title">
        <div class="ch">峰会报名</div>
        <div class="en">Sign Up</div>
    </div>
    <ul>
        <li>
            <a href="javascript:;" id="media">
                <div class="center">
                    <img src="http://cdn.jiguo.com/special/GTIC/images/media.png" alt="">
                    <div class="china">媒体注册</div>
                    <div class="english">Media Accreditation</div>
                </div>

            </a>

        </li>
        <li>
            <a href="javascript:;" id="part">
                <div class="center">
                    <img src="http://cdn.jiguo.com/special/GTIC/images/part.png" alt="">
                    <div class="china">参会报名</div>
                    <div class="english">Participants Registration</div>
                </div>

            </a>
        </li>
    </ul>
</section>
<!--大会地点-->
<section id="address">
    <div class="map">
        <img src="http://cdn.jiguo.com/special/GTIC/images/address.png" alt="">
    </div>
    <div class="info">
        <div class="location ">大会地点
            <span class="english">Location</span>
        </div>
        <div class="hotel">
            <p>中国·上海卓美亚喜玛拉雅酒店</p>
            <p class="en">Jumeirah Himalayas Hotel, Shanghai, China</p>
        </div>
        <div class="detail">
            上海浦东新区梅花路1108号（近花木路），上海新国际博览中心对面，位于7号线花木路地铁站3号出口正上方。
        </div>
    </div>
</section>

<!--合作伙伴-->
<section id="partner">
    <div class="title">
        <div class="ch">合作媒体</div>
        <div class="en">Media</div>
    </div>
    <ul>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/cctv.jpg"
                 alt="CCTV"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/东方卫视.jpg"
                 alt="东方卫视"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/浙江卫视.jpg"
                 alt="浙江卫视"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/北京卫视.png"
                 alt="北京卫视"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/搜狐科技.jpg"
                 alt="搜狐科技"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/凤凰科技.jpg"
                 alt="凤凰科技"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/腾讯数码.jpg"
                 alt="腾讯科技"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/网易科技.jpg"
                 alt="网易科技"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/极客公园.jpg"
                 alt="极客公园"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/界面.jpg"
                 alt="界面"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/虎嗅.jpg"
                 alt="虎嗅"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/澎湃.jpg"
                 alt="澎湃"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/中国日报.jpg"
                 alt="中国日报"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/南方都市报.jpg"
                 alt="南方都市报"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/21世纪经济报道.jpg"
                 alt="21世纪经济报道"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/创业家.jpg"
                 alt="创业家"></li>
        <li><img src="http://cdn.jiguo.com/special/GTIC/images/第一财经.png"
                 alt="第一财经"></li>
    </ul>

</section>

<!--联系我们-->
<section id="contact">
    <div class="title">
        <div class="ch">联系我们</div>
        <div class="en">Contact Us</div>
    </div>

    <div class="event">
        <div class="shadow">招商事宜</div>
        <div class="name">龚伦常</div>
        <div class="email">gong@zhidx.com</div>
    </div>
    <div class="event">
        <div class="shadow">参会事宜</div>
        <div class="name">何峰</div>
        <div class="email">habenhe@zhidx.com</div>
    </div>
    <div class="event">
        <div class="shadow">媒体事宜</div>
        <div class="name">冯超</div>
        <div class="email">kame@jiguo.com</div>
    </div>
</section>

<!--footer-->
<footer id="footer">

    <div class="logo">
        <img src="http://cdn.jiguo.com/special/GTIC/images/zhidx.png" alt="">
    </div>

    <div class="word">
        智东西，智能行业第一媒体，是以商业报道、行研报告、线上社群、线下活动为核心，多端多平台、线上线下联动的智能行业服务型媒体，专注于AI、智能出行、VR/AR、智能家居、穿戴医疗五大领域，助力智能+时代的创业和产业升级。
    </div>

    <div class="bottom"><img src="http://cdn.jiguo.com/special/GTIC/images/footer.png" alt=""></div>
</footer>


<?php include dirname(__FILE__) . '/login/index.php'; ?>
<!--loading-->
<script>
    var root = $('html,body');
    root.css({
        overflow: 'hidden',
        height: '100%'
    });
    //loading
    var img = new Image();
    img.onload = function () {
        $('#loading').addClass('display');
        root.css({
            overflow: 'auto',
            height: 'auto'
        });
        if (timer) {
            clearTimeout(timer);
        }
    };
    img.src = 'http://cdn.jiguo.com/special/GTIC/images/header_mb.png';
    var timer = setTimeout(function () {
        root.css({
            overflow: 'auto',
            height: 'auto'
        });
    }, 10000);

</script>
<script src="http://cdn.jiguo.com/special/GTIC/lib/swiper/swiper.min.js"></script>
<script src="http://cdn.jiguo.com/special/GTIC/mb/js/index.js"></script>

</body>
</html>