<!--登录-->
<link rel="stylesheet" type="text/css" href="login/css/index.css"/>
<script type="text/html" id="k_dialog_window_tpl">
    <div class="k_dialog_window" id="<%=k_dialog_window_id%>">
        <div class="k_dialog_mask"></div>
        <table class="k_dialog_table_base" cellpadding="0" cellspacing="0">
            <tr>
                <td class="k_dialog_table_td">
                    <div class="k_dialog_body"><%=k_dialog_window_content%></div>
                </td>
            </tr>
        </table>
    </div>
</script>
<script type="text/html" id="k_dialog_body_tpl">
    <div class="k_dialog_body_border">
        <div class="k_dialog_close"><span>×</span></div>
        <div class="k_dialog_header"><h3><%=title%></h3></div>
        <div class="k_dialog_content">
            <% if(media==1){ %>
            <!--<div class="header-desc">-->
            <!--<div class="header-text">-->
            <!--AWE科技公园在区域内板块规划上，共包括智慧娱乐、智慧出行、人工智能、智能生活、运动健康、全球首发等6大内容板块，以最好的产品为观众带来最好的体验。采用限量+审核入驻制，目前已正式开放申请。-->
            <!--</div>-->

            <!--</div>-->
            <% } %>
            <div class="inner-title">提交<% if(media==1){ %>展商<% }else{ %>媒体<% } %>信息报名:</div>
            <div class="inner-body">
                <form id="applyForm">
                    <input type="hidden" name="apply[media]" id="media" value="<%=media%>">
                    <table class="inner-table" cellpadding="0" cellspacing="0">
                        <!-- 展商 -->
                        <% if(media==1){ %>
                        <tr>
                            <td class="item-name">公司：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写公司名称" type="text" name="apply[company]" id="company">
                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写公司</span>
                                    <span class="error">公司填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">参展产品：</td>
                            <td class="item-input">
                                <input class="text" name="apply[product]" id="product" placeholder="填写参展产品" type="text">
                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写参展产品</span>
                                    <span class="error">参展产品填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">姓名：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写姓名" type="text" name="apply[name]" id="name">
                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写姓名</span>
                                    <span class="error">姓名填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">手机：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写手机号码" type="text" name="apply[phone]" id="phone">
                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写手机</span>
                                    <span class="error">手机填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">微信：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写微信号码" type="text" name="apply[weixin]" id="weixin">
                            </td>
                        </tr>
                        <% }else if(media==2){ %>
                        <tr>
                            <td class="item-name">姓名：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写姓名" type="text" name="apply[name]" id="name">
                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写姓名</span>
                                    <span class="error">姓名填写错误</span>
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td class="item-name">手机：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写手机号码" type="text" name="apply[phone]" id="phone">

                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写手机</span>
                                    <span class="error">手机填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">微信：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写微信号码" type="text" name="apply[weixin]" id="weixin">
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">公司邮箱：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写公司邮箱" type="text" name="apply[email]" id="email">

                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写公司邮箱</span>
                                    <span class="error">公司邮箱填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">媒体：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写媒体名称" type="text" name="apply[company]" id="company">

                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写公司</span>
                                    <span class="error">公司填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">职位：</td>
                            <td class="item-input">
                                <input class="text" name="apply[job]" id="job" placeholder="填写职位" type="text">

                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写职位</span>
                                    <span class="error">职位填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="item-name">署名文章：</td>
                            <td class="item-input">
                                <input class="text" placeholder="填写署名文章地址" type="text" name="apply[article]" id="article">

                                <div class="item-tips">
                                    <img src="login/images/error.png">
                                    <span class="no-data">未填写署名文章</span>
                                    <span class="error">署名文章填写错误</span>
                                </div>
                            </td>
                        </tr>
                        <% } %>
                        <tr>
                            <td class="item-name"></td>
                            <td class="submit-form">
                                <button class="btn" type="button" id="submit-data">提交</button>
                                <img class="animate-rotate none" src="login/images/loading.svg">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
</script>
<script type="text/html" id="k_dialog_success_tpl">
    <div class="k_dialog_body_border">
        <div class="k_dialog_close"><span>×</span></div>
        <div class="k_dialog_header"><h3><%=title%></h3></div>
        <div class="k_dialog_content" style="overflow:hidden;">
            <table cellpadding="0" cellspacing="0" style="width: 100%;height: 100%;">
                <tr>
                    <td>
                        <div class="success-wrap">
                            <div><img src="login/images/success.png"></div>
                            <div class="success-text">提交成功</div>
                            <div class="success-tips">您的申请已提交，我们会在1-2个工作日内联系您，<br>谢谢您的申请！</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</script>
