<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1 ,user-scalable=no">
    <title>2017科技公园-全球首个创新科技线下首发体验嘉年华</title>
    <meta name="description" content="科技公园由AWE与极果联合主办，定位集中在新一代跨界融合科技、硬件创新及可消费的终端科技，搭建真正以消费者体验为中心的超级智慧生活展区，进一步延伸对于家庭智慧生活的前瞻与展望，真正把更丰富的智慧生活场景搬上舞台，包含智慧出行、智慧娱乐、智慧家居、智能健康、智能建筑、VR、AR、人工智能等更多领域和产业。">
    <meta name="keywords" content="极果,AWE,特斯拉,智东西,科技公园,AWE科技公园,极果科技公园,大疆,HTC,VR,AR,智慧出行,智能生活,人工智能">
    <link rel="stylesheet" href="http://cdn.jiguo.com/zdx/park/img/favicon.ico">
    <script src="http://cdn.jiguo.com/zdx/park/lib/jquery/jquery.min.js"></script>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/index.css">

    <!--[if lt IE 9]>
    <script src="http://http://cdn.jiguo.com.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://http://cdn.jiguo.com.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--倒计时-->
    <link rel="stylesheet" type="text/css" href="http://cdn.jiguo.com/zdx/park/lib/flipcountdown-master/jquery.flipcountdown.css"/>

    <script type="text/javascript" src="http://cdn.jiguo.com/zdx/park/lib/flipcountdown-master/jquery.flipcountdown.js"></script>
</head>
<body>
<div style='margin:0 auto;width:0px;height:0px;overflow:hidden;'>
    <img src="http://cdn.jiguo.com/zdx/park/img/share.png" width='700'>
</div>

<div id="loading">
    <div id="center">
        <img src="http://cdn.jiguo.com/zdx/park/img/park.png" alt="">
        <span>LOADING...</span>
    </div>
</div>
<!--nav-->
<nav class="navbar navbar-default fixed" role="navigation">
    <div class="container-fluid">
        <!--pc端导航-->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div class="logo display hidden-sm">
                <img src="http://cdn.jiguo.com/zdx/park/img/Logo.png" alt="">
            </div>
            <ul class="nav navbar-nav">
                <li class="active" id="first"><a href="#about">关于科技公园</a></li>
                <li id="second"><a href="#show">展区规划</a></li>
                <li id="third"><a href="#enroll">参与方式</a></li>
                <li id="fourth"><a href="#address">公园地址</a></li>
                <li id="fifth"><a href="#partner">合作伙伴</a></li>
                <li id="sixth"><a href="#contact">联系我们</a></li>
               <li id="seventh"><a href="http://zhidx.com/" target="_blank">2017 GTIC</a></li>
            </ul>

        </div>
        <!--手机端导航-->
        <div class="navbar-header">
            <div class="mb_logo visible-xs">
                <img src="http://cdn.jiguo.com/zdx/park/img/Logo.png" alt="">
            </div>
            <span class="glyphicon glyphicon-align-justify visible-xs" id="navBtn"></span>
            <div class="phone_nav display">
                <ul>
                    <li class="active" id="first"><a href="#about">关于科技公园</a></li>
                    <li id="second"><a href="#show">展区规划</a></li>
                    <li id="third"><a href="#enroll">参与方式</a></li>
                    <li id="fourth"><a href="#address">公园地址</a></li>
                    <li id="fifth"><a href="#partner">合作伙伴</a></li>
                    <li id="sixth"><a href="#contact">联系我们</a></li>
                    <li id="seventh"><a href="http://zhidx.com/">2017 GTIC</a></li>
                    <li id="close_nav">×</li>
                </ul>

            </div>
        </div>


    </div>
</nav>

<!--首图-->
<div class="header clearfix">
    <div class="name col-xs-12 clearfix">
<!--        pc-->
        <img src="http://cdn.jiguo.com/zdx/park/img/pc-logo.png" alt="technology park" class="hidden-xs">
<!--        m-->
        <img src="http://cdn.jiguo.com/zdx/park/img/h5-logo.png" alt="technology park" class="visible-xs">
    </div>
    <div class="logo col-xs-12 ">
        <div class="twoLogo">
            <img src="http://cdn.jiguo.com/zdx/park/img/logo_awe.png" alt="awe"></div>
        <div class="twoLogo"><img src="http://cdn.jiguo.com/zdx/park/img/logo_jiguo.png" alt="极果"></div>
        <p>上海新国际博览中心 E3馆</p>
        <p class="startTime">2017.3.9 - 3.11</p>
    </div>
    <div class="next">
        <div class="icon"></div>
    </div>

</div>
<!--倒计时-->
<div class="time">
    <h3>距离开幕</h3>
    <table style="border:0px;" id="count_down">
            <tr>
                <td style="width:50px;text-align:center;position: absolute;top: 13px;left: 32px;">天</td>
                <td style="width:50px;text-align:center;position: absolute;top: 13px;left: 100px;">时</td>
                <td style="width:50px;text-align:center;position: absolute;top: 13px;left: 170px;;">分</td>
            </tr>
            <tr>
                <td colspan="4"><span id="new_year"></span></td>
            </tr>
        </table>
</div>
<!--关于科技公园-->
<div id="about" class="clearfix">
    <div class="title">
        <span class="abstract">最性感的黑科技</span>
        <span class="circle hidden-xs"></span>
        <span class="abstract">震撼的全球首发</span>
        <span class="circle hidden-xs"></span>
        <span class="abstract">炫酷的智能潮品</span>
    </div>
    <div class="box col-xs-10 col-xs-offset-1">
          <p> 科技公园由AWE与极果联合主办，定位集中在新一代跨界融合科技、硬件创新及可消费的终端科技，搭建真正以消费者体验为中心的超级智慧生活展区，进一步延伸对于家庭智慧生活的前瞻与展望，真正把更丰富的智慧生活场景搬上舞台，包含智慧出行、智慧娱乐、智慧家居、智能健康、智能建筑、VR、AR、人工智能等更多领域和产业。</p>
        <ul class="clearfix">
            <li class="col-sm-3 col-xs-6">
                <img src="http://cdn.jiguo.com/zdx/park/img/about_1.png" alt="">
                <div class="num">6000㎡</div>
                <div class="info">全球首个科技公园</div>
            </li>
            <li class="col-sm-3 col-xs-6">
                <img src="http://cdn.jiguo.com/zdx/park/img/about_2.png" alt="">
                <div class="num">6大</div>
                <div class="info">智能产业核心板块</div>
            </li>
            <li class="col-sm-3 col-xs-6">
                <img src="http://cdn.jiguo.com/zdx/park/img/about_3_1.png" alt="">
                <div class="num">20万+</div>
                <div class="info">主流消费观众</div>
            </li>
            <li class="col-sm-3 col-xs-6">
                <img src="http://cdn.jiguo.com/zdx/park/img/about_4.png" alt="">
                <div class="num">500+</div>
                <div class="info">海内外媒体报道</div>
            </li>
        </ul>
    </div>

</div>
<!--展区规划-->
<div id="show">
    <div class="title">
        <span class="abstract">展区规划</span>
        <span class="circle"></span>
        <span class="abstract">6大板块</span>
        <h4>Exhibition Layout</h4>
    </div>
    <div class="pic clearfix">
        <ul class="clearfix col-sm-10">
            <li class="col-md-4 col-xs-6 touch">
                <img class="bg" src="http://cdn.jiguo.com/zdx/park/img/show_1-2.png" alt="">
                <div>
                    <p>国内、海外创新科技产品首发展示体验平台</p>
                </div>
            </li>
            <li class="col-md-4 col-xs-6 touch">
                <img class="bg" src="http://cdn.jiguo.com/zdx/park/img/show_2.png" alt="">
                <div>
                    <p>新能源&互联网汽车、短途代步工具</p>
                </div>
            </li>
            <li class="col-md-4 col-xs-6 touch">
                <img class="bg" src="http://cdn.jiguo.com/zdx/park/img/show_3.png" alt="">
                <div>
                    <p>智能机器人互动、无人机、前沿人工智能领域技术</p>
                </div>
            </li>
            <li class="col-md-4 col-xs-6 touch">
                <img class="bg" src="http://cdn.jiguo.com/zdx/park/img/show_4.png" alt="">
                <div>
                    <p>VR/AR设备、多领域应用体验、智能娱乐产品</p>
                </div>
            </li>
            <li class="col-md-4 col-xs-6 touch">
                <img class="bg" src="http://cdn.jiguo.com/zdx/park/img/show_5_2.png" alt="">
                <div>
                    <p>智能房产、物联网/传感器、智能家居设备</p>
                </div>
            </li>
            <li class="col-md-4 col-xs-6 touch">
                <img class="bg" src="http://cdn.jiguo.com/zdx/park/img/show_6.png" alt="">
                <div>
                    <p>穿戴设备、智能硬件、户外装备、移动医疗健康</p>
                </div>
            </li>

        </ul>
    </div>
    <div class="expreience">
        <div class="carnival col-xs-11 col-xs-offset-1">
            <img class="title_img" src="http://cdn.jiguo.com/zdx/park/img/title_img.png" alt="">
        </div>

        <ul class="clearfix">
            <li class="fl">
                <img src="http://cdn.jiguo.com/zdx/park/img/experience_1.png" alt="experience">
            </li>
            <li class="fl hidden-xs">
                <img src="http://cdn.jiguo.com/zdx/park/img/experience_2.png" alt="experience">
            </li>
            <li class="fl">
                <img src="http://cdn.jiguo.com/zdx/park/img/experience_3.png" alt="experience">
            </li>
        </ul>
    </div>
</div>
<!--参与方式-->
<div id="enroll">
    <div class="title">
        <span class="abstract">立即参与</span>
        <h4>Sign Up</h4>
    </div>
    <ul class="sign clearfix">
        <li class="col-md-4 col-sm-12">
            <a href="javascript:;" id="k_dialog_table_window1">
                <div class="icon"></div>
                <div class="ch">展商入驻</div>
                <div class="en">Exhibitor</div>
                <img class="arrow" src="http://cdn.jiguo.com/zdx/park/img/arrow.png" alt="arrow">
            </a>
        </li>
        <li class="col-md-4 col-sm-12">
            <a href="javascript:;" id="k_dialog_table_window2">
                <div class="icon"></div>
                <div class="ch">媒体注册</div>
                <div class="en">Media</div>
                <img class="arrow" src="http://cdn.jiguo.com/zdx/park/img/arrow.png" alt="arrow">
            </a>
        </li>
        <li class="col-md-4 col-sm-12 hidden-xs">
            <a href="http://218.241.146.250:8080/AWEvisitor/" target="_blank">
                <div class="icon"></div>
                <div class="ch">观众报名</div>
                <div class="en">Visitor</div>
                <img class="arrow" src="http://cdn.jiguo.com/zdx/park/img/arrow.png" alt="arrow">
            </a>
        </li>
    </ul>
</div>
<!--大会地址-->
<div id="address">
    <div class="pc_map hidden-xs">
        <div style="position:absolute;width: 100%;height: 100%;left: 0;top:0;opacity: 0;z-index: 1"></div>
        <div id="dituContent"></div>
        <div class="shade"></div>
        <div class="white hidden-xs">
            <img class="location" src="http://cdn.jiguo.com/zdx/park/img/location.png" alt="">
            <div class="info">
                <div class="location_title ">公园地址
                    <span class="english">Location</span>
                </div>
                <div class="hotel">
                    <span class="ch">上海新国际展览中心 · E3馆</span>
                    <span class="en">SHANGHAI New International Expo Centre</span>
                </div>
                <div class="location_info">
                    地铁7号线到花木路站, 步行约240米, 到达上海新国际博览中心；大桥五线、大桥六线、东川线、申庆线、杨祝线、方川线、沪施线、申江线等公交线路均可直达展馆。
                </div>
            </div>
            <div class="border">
            </div>
        </div>
        <div class="map visible-lg">
            <img src="http://cdn.jiguo.com/zdx/park/img/map_1.png" alt="地图1">
            <img src="http://cdn.jiguo.com/zdx/park/img/map_2.png" alt="地图2">
            <img src="http://cdn.jiguo.com/zdx/park/img/map_3.png" alt="地图3">
        </div>
    </div>
    <div class="ditu visible-xs">
                <img src="http://cdn.jiguo.com/zdx/park/img/ditu.jpg" alt="上海地图">
        <div class="ditu_mask"></div>
            </div>
    <div class="mb_map visible-xs">
        <div class="info">
            <div class="location_title ">公园地址
                <span class="english">_______  Location</span>
            </div>
            <div class="hotel">
                <span class="ch">上海新国际博览中心 · E3馆</span>
                <span class="en">SHANGHAI New International Expo Centre</span>
            </div>
            <div class="location_info">
                地铁7号线到花木路站, 步行约240米, 到达上海新国际博览中心；大桥五线、大桥六线、东川线、申庆线、杨祝线、方川线、沪施线、申江线等公交线路均可直达展馆。
            </div>
        </div>
    </div>

</div>

<!--合作伙伴-->
<div id="partner">
    <div class="box">
        <div class="title">
            <span class="abstract">主办方</span>
            <h4>Sponsor</h4>
        </div>
        <ul>
            <li>
                <img src="http://cdn.jiguo.com/zdx/park/img/logo_awe.png"
                     alt="awe">
            </li>
            <li>
                <img src="http://cdn.jiguo.com/zdx/park/img/logo_jiguo2.png"
                     alt="极果">
            </li>
            <li>
                <img src="http://cdn.jiguo.com/zdx/park/img/zhidx.jpg"
                     alt="极果">
            </li>
        </ul>
    </div>
    <div class="box clearfix">
        <div class="title">
            <span class="abstract">合作媒体</span>
            <h4>Media Partners</h4>
        </div>
        <ul class="col-md-10 col-md-offset-1">
            <li class="col-md-2 col-sm-1-5  col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/01.CCTV-1.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5  col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/02.CCTV-2_财经.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/03.CCTV-13新闻.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/04.第一财经.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/05.上海电视台.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/06.东方卫视.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/07.北京卫视.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/08.浙江卫视.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/09.江苏卫视.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/10.广东卫视.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/11.中国日报.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/12.环球时报.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/13.南方都市报.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/14.21世纪经济报道.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/15.中国新闻社.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/16.凤凰科技.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/17.腾讯数码.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/18.网易科技.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/19.搜狐科技.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/20.极客公园.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/21.界面.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/22.虎嗅.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/23.中关村在线.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/24.澎湃.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/25.蓝鲸.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/26.经济日报.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/27.科技日报.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/28.创业家.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/29.新浪.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/30.新华网.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/31.人民网.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/32.光明网.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/33.雷科技.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/34.IT168.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/35.it耳朵.jpg" alt="">
                       </li>
                       <li class="col-md-2 col-sm-1-5 col-xs-3">
                           <img src="http://cdn.jiguo.com/zdx/park/img/36.威腾网.jpg" alt="">
                       </li>
        </ul>
    </div>

</div>
<!--联系我们-->
<div id="contact">

    <div class="title">
        <span class="abstract">联系我们</span>
        <h4>Contact Us</h4>
    </div>
    <div class="link col-sm-offset-1 col-sm-10 clearfix">
        <div class="event col-md-3 col-xs-6">
            <div class="detailed">赞助合作</div>
            <div class="name">Lariver</div>
            <div class="mail">Lariver@jiguo.com</div>
        </div>
        <div class="event col-md-3 col-xs-6">
            <div class="detailed">参展合作</div>
            <div class="name">亿伊</div>
            <div class="mail">yiyi@jiguo.com</div>
        </div>
        <div class="event  col-md-3 col-xs-6">
            <div class="detailed">媒体合作</div>
            <div class="name">冯超</div>
            <div class="mail">kame@jiguo.com</div>
        </div>
        <div class="event col-md-3 col-xs-6">
            <div class="detailed">其他事宜</div>
            <div class="name">冯超</div>
            <div class="mail">kame@jiguo.com</div>
        </div>
    </div>


</div>

<!--footer-->
<div id="footer">
    <div class="up col-xs-10 col-xs-offset-1">
        <div class="jiguo col-sm-4 col-sm-offset-1">
            <img src="http://cdn.jiguo.com/zdx/park/img/foot_logo.png?1" alt="" id="footerLogo">
        </div>
        <div class="jiguo_info col-sm-5">
                全球好物消费推荐平台。致力为玩家、消费者提供全球范围内最值得入手的新奇酷玩和品质尖儿货导购，及最有品质产品的第一时间线上线下免费试用服务，为产品的潜在购买者提供最具价值的决策参考。
        </div>
    </div>
    <div class="copyright col-xs-10 col-xs-offset-1">
    Copyright © 2016 极果 All rights reserved
    </div>

</div>

<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?key=&v=1.1&services=true"></script>
<script src="js/index.js"></script>
<script src="login/js/base.js"></script>

<?php include dirname(__FILE__).'/login/index.php';?>

<script>
    var root = $('html,body');
    root.css({
        overflow: 'hidden',
        height: '100%'
    });
    //loading
    var img=new Image();
    img.onload=function () {
        $('#loading').addClass('display');
        root.css({
            overflow: 'auto',
            height: 'auto'
        });
        if(timer){
            clearTimeout(timer);
        }
    };
    img.src='http://cdn.jiguo.com/zdx/park/img/pc-logo.png';
    // PC http://park.jiguo.com/img/bg.jpg
    // MB http://park.jiguo.com/img/banner_bg_mb.png
    var timer = setTimeout(function () {
        root.css({
            overflow: 'auto',
            height: 'auto'
        });
    },10000);

</script>

</body>
</html>