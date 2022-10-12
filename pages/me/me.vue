<template>
    <view class="cont-list">
        <view class="list" @tap.stop.prevent="linkOrderlist">
            <view class="col-1"><image mode="widthFix" src="/static/pages/images/icon-order.png"></image></view>
            <view class="col-2"><button class="col-4">我的订单</button></view>
            <view class="col-3"><image mode="widthFix" src="/static/pages/images/icon-arrow1.png"></image></view>
        </view>
        <view class="list" @tap.stop.prevent="linkCodelist">
            <view class="col-1"><image mode="widthFix" src="/static/pages/images/icon-nuochema.png"></image></view>
            <view class="col-2"><button class="col-4">我的挪车码</button></view>
            <view class="col-3"><image mode="widthFix" src="/static/pages/images/icon-arrow1.png"></image></view>
        </view>
        <view class="list" @tap.stop.prevent="linkProblemList">
            <view class="col-1"><image mode="widthFix" src="/static/pages/images/icon-wenti.png"></image></view>
            <view class="col-2"><button class="col-4">常见问题</button></view>
            <view class="col-3"><image mode="widthFix" src="/static/pages/images/icon-arrow1.png"></image></view>
        </view>
        <view class="list">
            <view class="col-1"><image mode="widthFix" src="/static/pages/images/icon-kefu.png"></image></view>
            <view class="col-2"><button class="col-4" open-type="contact" @contact="handleContact">联系客服</button></view>
            <view class="col-3"><image mode="widthFix" src="/static/pages/images/icon-arrow1.png"></image></view>
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
            ordernum: 0,
            carcodenum: 0
        };
    },
    onLoad: function () {
        let newcommon = new common();
        newcommon.checklogin();
    },
    methods: {
        /* 跳转订单列表 */
        linkOrderlist: function () {
            uni.navigateTo({
                url: '../orderList/orderList'
            });
        },

        /* 跳转挪车码列表 */
        linkCodelist: function () {
            uni.navigateTo({
                url: '../codeList/codeList'
            });
        },

        /* 跳转常见问题 */
        linkProblemList: function () {
            uni.navigateTo({
                url: '../problemList/problemList'
            });
        },

        handleContact(e) {}
    }
};
</script>
<style>
.section-bg {
    height: 320rpx;
    text-align: center;
    padding-top: 40rpx;
    position: relative;
    background-color: #ffd700;
}
.section-bg .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
.section-img image {
    width: 100%;
}

.avatar-box {
    display: inline-block;
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    z-index: 2;
}
.avatar {
    display: block;
    width: 100%;
    height: 100%;
}
.nickName {
    display: block;
    color: #fff;
    font-size: 32rpx;
    padding-top: 20rpx;
    position: relative;
    z-index: 2;
}

.section-1 {
    margin-top: -70rpx;
    padding: 0 75rpx;
    position: relative;
    z-index: 2;
}
.section-1 .cont {
    display: flex;
    border: solid 1rpx #ddd;
    border-radius: 12rpx;
    overflow: hidden;
}
.section-1 .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 145rpx;
    background-color: #fff;
}
.section-1 .item .icon {
    width: 54rpx;
    margin-right: 20rpx;
}
.section-1 .item .unit {
    color: #3f270b;
    font-size: 32rpx;
}

.cont-list {
    background-color: #fff;
    margin-top: 50rpx;
}
.cont-list .list {
    display: flex;
    align-items: center;
    padding: 30rpx 30rpx;
    position: relative;
}
.cont-list .list::after {
    content: '';
    display: block;
    position: absolute;
    left: 30rpx;
    right: 0;
    bottom: 0;
    border-top: solid 1rpx #eee;
}
.cont-list .list:nth-last-child(1)::after {
    border-top: 0;
}
.cont-list .list .col-1 {
    margin-right: 20rpx;
    display: flex;
    align-items: center;
}
.cont-list .list .col-1 image {
    width: 54rpx;
}
.cont-list .list .col-2 {
    flex: 1;
    color: #000;
    font-size: 32rpx;
}
.cont-list .list .col-3 image {
    width: 18rpx;
}
.cont-list .list .col-4 {
    color: #000;
    font-size: 32rpx;
    text-align: left;
    margin-left: 0rpx;
    padding-left: 0rpx;
    background-color: #fff;
}
</style>
