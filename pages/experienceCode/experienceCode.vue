<template>
    <view>
        <view class="section-1">
            <view class="row2" v-if="codeType == 1">注：此挪车码仅作为体验使用</view>
            <view class="row2" v-if="codeType == 3">注：此挪车码码未激活</view>
        </view>

        <view class="section-qrcode">
            <image class="bgborder" mode="widthFix" src="/static/pages/images/bg9.png"></image>
            <image class="code" mode="widthFix" :src="codeUrl"></image>
        </view>

        <view class="btns" v-if="codeType == 1">
            <view class="btn" @tap.stop.prevent="applyPost">申请邮寄</view>
        </view>

        <!-- <view class='section-2' wx:if='{{codeType==0}}'>您将收到一套精美挪车贴，按照说明书绑定即可使用</view> -->

        <view class="btns" v-if="codeType == 1">
            <view class="btn btn0" @tap.stop.prevent="deleteCode">删除体验码</view>
        </view>

        <view class="section-carinfo" v-if="codeType == 0">
            <text>{{ licenseplate }}</text>
            <text>{{ mobile }}</text>
        </view>

        <view class="section-switch" v-if="codeType == 0">
            <switch :checked="status == 1 ? true : false" @change="switchChangeStatus" />
            <text>注：开启免打扰模式后，您将收不到电话和短信通知</text>
        </view>

        <view class="btns" v-if="codeType == 0">
            <view class="btn" @tap.stop.prevent="upcode">修改信息</view>
        </view>
        <view class="btns" v-if="authBtn == 2">
            <button class="btn btn0" open-type="openSetting" @opensetting="checkAuth">重新授权相册</button>
        </view>

        <view class="btns">
            <view class="btn btn0" @tap.stop.prevent="saveimg">保存到手机</view>
        </view>
    </view>
</template>

<script>
const app = getApp();

const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

export default {
    data() {
        return {
            //codeUrl: '../images/qrcode.png',
            codeUrl: '',
            codeType: '',
            options: '',
            carcodeid: '',
            licenseplate: '',
            mobile: '',
            status: '',
            apiurl: '',
            imgstatus: 0,
            authBtn: 1
        };
    },
    onLoad: function (options) {
    },
    methods: {
    }
};
</script>
<style>
page {
    padding: 20rpx 55rpx;
    background-color: #ffd700;
}
.section-1 {
    padding: 0 0 30rpx;
}
.section-1 .row1 {
    text-align: center;
    font-size: 36rpx;
    color: #000;
}
.section-1 .row2 {
    text-align: center;
    font-size: 28rpx;
    color: #000;
    padding: 5rpx 0;
}

.section-qrcode {
    position: relative;
    padding: 140rpx;
}
.section-qrcode .bgborder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.section-qrcode .code {
    width: 100%;
    position: relative;
    top: 30rpx;
    z-index: 2;
}

.section-2 {
    text-align: center;
    font-size: 24rpx;
    color: #3f270b;
    padding: 10rpx 0 0;
}
.section-2 .color {
    color: #f66477;
}

.btns .btn {
    height: 90rpx;
    line-height: 90rpx;
    background-color: #3f270b;
    color: #fff;
    font-size: 30rpx;
    text-align: center;
    margin-top: 30rpx;
}
.btns .btn0 {
    background-color: #fff;
    color: #000;
    margin-top: 50rpx;
}

.section-carinfo {
    text-align: center;
    padding: 30rpx 0 15px;
}
.section-carinfo text {
    display: block;
    font-size: 32rpx;
    color: #000;
}
.section-switch {
    text-align: center;
}
.section-switch text {
    display: block;
    padding-top: 10px;
    font-size: 26rpx;
    color: #777;
}

.cont-customer-telephone {
    text-align: center;
    color: #666;
    font-size: 28rpx;
    position: absolute;
    left: 0;
    bottom: 20rpx;
    width: 100%;
}
</style>
