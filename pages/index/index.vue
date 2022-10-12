<template>
    <view>
        <view class="section-bg0"><image mode="widthFix" src="/static/pages/images/bg0.png"></image></view>

        <view class="section-btns">
            <view class="btn btn-lingqu" @tap.stop.prevent="linkReciveWay">
                <text class="text">{{ content }}</text>
                <image class="icon-arrow" mode="widthFix" src="/static/pages/images/icon-arrow3.png"></image>
            </view>
            <view class="btn btn-tiyan" @tap.stop.prevent="linkBindCarnumber">
                <text class="text">线上体验</text>
                <image class="icon-arrow" mode="widthFix" src="/static/pages/images/icon-arrow2.png"></image>
            </view>
        </view>

        <view class="section-bg1"><image mode="widthFix" src="/static/pages/images/bg1.png"></image></view>
    </view>
</template>

<script>
const app = getApp();

const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

export default {
    data() {
        return {
            timeout: 0,
            content: '领取挪车码'
        };
    },
    onLoad: function (options) {
        uni.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        });
        let newcommon = new common();
        newcommon.checklogin();
    },
    methods: {
        /* 跳转绑定车牌号 */
        linkBindCarnumber: function () {
            uni.navigateTo({
                url: '../bindCarnumber/bindCarnumber'
            });
        },
        /* 跳转商品页 */
        linkReciveWay: function () {
            uni.navigateTo({
                url: '../reciveWay/reciveWay'
            });
        }
    }
};
</script>
<style>
page {
    background-color: #ffd700;
}
.section-bg0 image {
    width: 100%;
}

.section-bg1 {
    box-sizing: border-box;
    text-align: center;
}
.section-bg1 image {
    width: 100%;
}

.section-btns {
    margin: -180rpx 0 -70rpx;
    text-align: center;
}
.section-btns .btn {
    display: inline-block;
    width: 80%;
    height: 92rpx;
    line-height: 90rpx;
    margin-top: 26rpx;
    border-radius: 50rpx;
    position: relative;
}
.section-btns .btn-lingqu {
    font-size: 40rpx;
    background-color: #3f270b;
    color: #f8e71c;
}
.section-btns .btn-tiyan {
    font-size: 36rpx;
    background-color: #fff;
    color: #3f270b;
}
.section-btns .icon-arrow {
    display: block;
    width: 40rpx;
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translate(0, -50%);
}

.section-step {
    margin-top: -80rpx;
}
.section-step .img2 {
    text-align: center;
}
.section-step .img2 image {
    width: 85%;
}
.section-step .msg {
    text-align: center;
    color: #666;
    font-size: 28rpx;
}
.section-step .telephone {
    text-align: center;
    color: #666;
    font-size: 28rpx;
    padding: 5rpx 0 40rpx;
}
</style>
