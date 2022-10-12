<template>
    <view>
        <view class="section-bg1">
            <image class="bg" mode="widthFix" src="/static/pages/images/bg5.png"></image>
            <view class="carbox">
                <image class="bg1" mode="widthFix" src="/static/pages/images/bg7.png"></image>
                <text class="text">{{ licenseplate }}</text>
            </view>
        </view>
        <view class="section-bg2">
            <image class="bg" mode="widthFix" src="/static/pages/images/bg6.png"></image>
        </view>

        <view class="section-btns" v-if="!hasjihuo">
            <!-- <view class='btn {{btnDisabled?"disabled":""}}' catchtap="nimingPhoneCall">匿名电话通知</view> -->
            <button class="btn" open-type="getPhoneNumber" @getphonenumber="nimingPhoneCall" v-if="btnDisabled == false">匿名电话通知</button>
            <view class="btn disabled" @tap.stop.prevent="noPass" v-if="btnDisabled">匿名电话通知</view>
        </view>
        <!--<view class='section-btns' wx:if='{{!hasjihuo}}'>
    <view class='btn {{btnDisabled?"disabled":""}}' catchtap="nimingmessageCall" wx:if='{{btnDisabled == false}}'>短信通知</view>
    <view class='btn {{btnDisabled?"disabled":""}}' catchtap="noPass" wx:if='{{btnDisabled}}'>短信通知</view>
</view> -->
        <view class="section-btns" v-if="!hasjihuo">
            <view class="btn" @tap.stop.prevent="nimingmessageCall" v-if="wxmsg == false">微信通知</view>
            <view class="btn disabled" @tap.stop.prevent="wxnoPass" v-if="wxmsg">微信通知</view>
        </view>
        <!-- <view class='section-btns section-jihuo' wx:if='{{hasjihuo}}'> -->
        <view class="section-btns" v-if="hasjihuo">
            <view class="section-tips">您的挪车码还未激活</view>
            <button class="btn" open-type="getPhoneNumber" @getphonenumber="jihuoCode">现在去激活吧</button>
        </view>

        <view class="section-btns buyqrcodes">
            <view class="btn buyqrcode" @tap.stop.prevent="buyqrcode">我也要挪车码</view>
        </view>

        <!--<view class='section-telephone'>
    客服电话：<text class='text' catchtap='makeKefuCall' data-phonenumber='‭(010) 5924 3995'>‭(010) 5924 3995</text>
</view>-->
    </view>
</template>

<script>
const app = getApp();

const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

export default {
    data() {
        return {
            options: '',
            authorization: '',
            status: '',
            key: '',
            licenseplate: '',
            mobile: '',
            btnDisabled: false,
            mianDarao: false,
            hasjihuo: false,
            //挪车码还未激活
            wxmsg: false,
            stainfo: '',
            wxstainfo: '',
            uid: '' //二维码拥有者的用户id
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
    height: 100%;
    background-color: #ffd700;
    padding: 50rpx 80rpx 0;
    position: relative;
}
.section-bg1 {
    position: relative;
}
.section-bg1 .bg {
    width: 100%;
}
.section-bg1 .carbox {
    width: 50%;
    position: absolute;
    top: 155rpx;
    left: 0;
    text-align: center;
}
.section-bg1 .carbox .bg1 {
    width: 100%;
    position: absolute;
    top: 0rpx;
    left: 0rpx;
}
.section-bg1 .carbox .text {
    display: block;
    margin-top: 45rpx;
    font-size: 50rpx;
    position: relative;
    z-index: 2;
}

.section-bg2 {
    width: 100%;
}
.section-bg2 .bg {
    width: 100%;
}

.section-btns {
    text-align: center;
    padding: 50rpx 0 0;
}
.buyqrcodes {
    text-align: center;
    padding: 50rpx 0 0;
}
.section-btns .btn {
    display: block;
    height: 92rpx;
    line-height: 92rpx;
    background-color: #3f270b;
    color: #fff;
    border-radius: 200rpx;
    font-size: 36rpx;
}
.section-btns .disabled {
    background-color: #bbb;
}
.section-btns .buyqrcode {
    background-color: black;
}
.section-btns .section-tips {
    color: #3f270b;
    font-size: 30rpx;
    padding: 0 0 30rpx;
}

.section-telephone {
    text-align: center;
    color: #666;
    font-size: 28rpx;
    position: absolute;
    left: 0;
    bottom: 30rpx;
    width: 100%;
}
</style>
