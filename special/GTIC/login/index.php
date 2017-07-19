<link rel="stylesheet" href="login/css/index.css">

<!--登录注册遮罩-->
<div class="report-item display">
    <div class="report-box display">
        <div class="errInfo"></div>
        <!--        媒体注册-->
        <div class="media-box display">
            <div class="close">X</div>
            <div class="info">
                <form id="form-media">
                    <h1>媒体注册</h1>
                    <label>
                        <span>姓名</span><input type="text" name="apply[name]" id="mediaName" required autocomplete="off">
                        <span class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>手机</span><input type="tel" name="apply[phone]" id="mediaTel" required autocomplete="off">
                        <span class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>微信</span><input type="text" name="apply[weixin]" id="mediaWeixin" autocomplete="off" required>
                        <span class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>公司邮箱</span><input type="text" name="apply[email]" id="mediaEmail" required
                                                autocomplete="off">
                        <span class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>公司</span><input type="text" name="apply[company]" id="mediaCompany"
                                              placeholder="自媒体公司提交自己的公众号" required autocomplete="off">
                        <span class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>职位</span><input type="text" name="apply[job]" id="mediaPlace" required autocomplete="off">
                        <span class="err opacity">输入错误</span>
                    </label>
                    <button type="button" data-submit>提交</button>
                </form>

            </div>
        </div>
        <!--        参会报名-->
        <div class="part-box display">
            <div class="close">X</div>
            <div class="info">
                <form id="form-part">
                    <h1 >参会报名</h1>
                    <label>
                        <span>姓名</span><input type="text" name="apply[name]" id="partName" required
                                              autocomplete="off"><span
                            class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>手机</span><input type="tel" name="apply[phone]" id="partTel" required
                                              autocomplete="off"><span class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>微信</span><input type="text" name="apply[weixin]" id="partWeixin" autocomplete="off"  required><span
                            class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>公司邮箱</span><input type="text" name="apply[email]" id="partEmail" required
                                                autocomplete="off"><span
                            class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>公司</span><input type="text" name="apply[company]" id="partCompany"
                                              placeholder="自媒体公司提交自己的公众号" required autocomplete="off">
                        <span class="err opacity">输入错误</span>
                    </label>

                    <label>
                        <span>职位</span><input name="apply[job]" type="text" id="partPlace" required
                                              autocomplete="off"><span
                            class="err opacity">输入错误</span>
                    </label>
                    <label>
                        <span>关注领域</span><input name="apply[area]" type="text" id="partArea"
                                                placeholder="后续邀请加入相应社群" autocomplete="off"><span
                            class="err opacity">输入错误</span>
                    </label>
                    <button type="button" data-submit>提交</button>
                </form>

            </div>
        </div>
        <!--        成功关注-->
        <div class="succeed display">
            <div class="close">X</div>
            <div class="pic">
                <img src="images/succeed.png" alt="">
            </div>
            <div class="flow">
                <h3>提交成功</h3>
                <p>您的申请已提交，个人信息通过审核后，组委会会尽快联系您。</p>
                <p>谢谢您的申请！</p>
            </div>
        </div>
    </div>

</div>
<script src="login/js/index.js"></script>
