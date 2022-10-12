<template>
    <view>
        <view class="cont-list" :data-carcodeid="item.id" @tap.stop.prevent="linkExperienceCode" v-for="(item, index) in codeList" :key="item.unique">
            <view class="list">
                <view class="col-1"><image mode="widthFix" :src="item.imgurl"></image></view>
                <view class="col-2">
                    <view class="row1">
                        <text class="s1">{{ item.car_number }}</text>
                        <text class="s2" v-if="item.is_test == 1">体验码</text>
                        <text class="s2" v-if="item.is_test == 0">正式码</text>
                        <text class="s2" v-if="item.is_test == 3">未激活码</text>
                    </view>
                    <view class="row2">绑定手机： {{ item.phone_number }}</view>
                </view>
                <view class="col-3"><image mode="widthFix" src="/static/pages/images/icon-arrow1.png"></image></view>
            </view>
        </view>
        <view :class="'nodata ' + (nodata ? 'show' : '')">您还没有挪车码！</view>
    </view>
</template>

<script>
const app = getApp();

const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

export default {
    data() {
        return {
            codeList: [],
            nodata: false,
            apiurl: ''
        };
    },
    onLoad: function () {
    },
    methods: {
    }
};
</script>
<style>
.cont-list {
    background-color: #fff;
    border-top: solid 1rpx #eee;
}
.cont-list .list {
    display: flex;
    align-items: center;
    padding: 40rpx 40rpx;
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
    width: 90rpx;
    height: 90rpx;
}
.cont-list .list .col-2 {
    flex: 1;
}
.cont-list .list .col-2 .row1 .s1 {
    color: #111;
    font-size: 42rpx;
}
.cont-list .list .col-2 .row1 .s2 {
    display: inline-block;
    padding: 0 20rpx;
    line-height: 32rpx;
    font-size: 20rpx;
    background-color: #f14a5e;
    color: #fff;
    border-radius: 6rpx;
    vertical-align: top;
    margin: 16rpx 0 0 30rpx;
}
.cont-list .list .col-2 .row2 {
    color: #555;
    font-size: 26rpx;
}
.cont-list .list .col-3 image {
    width: 20rpx;
}

.nodata {
    display: none;
    width: 100%;
    text-align: center;
    font-size: 32rpx;
    color: #ff0000;
    position: absolute;
    left: 0;
    top: 40%;
    transform: translate(0, -50%);
}
.nodata.show {
    display: block;
}
</style>
