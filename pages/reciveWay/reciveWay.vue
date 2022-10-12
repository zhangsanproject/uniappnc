<template>
    <view>
        <view class="section-1">
            <view class="view-cont">
                <view class="left"><image mode="widthFix" src="/static/pages/images/icon-nuochema.png"></image></view>
                <view class="right">
                    <text class="row1">{{ title }}</text>
                    <text class="row2">{{ content }}</text>
                    <text class="row3">原价：￥{{ old_price }}</text>
                    <text class="row4">现价：￥{{ price }}</text>
                </view>
            </view>
            <!--<view class='view-cell'>
        <view class='list'>
            <view class='col-1'>购买数量</view>
            <view class='col-2'>
                <view class='chooseNumber'>
                    <text class='btn reduce' catchtap='reduce'>-</text>
                    <input disabled="true" value='{{buyNumber}}' style='text-align:center;'/>
                    <text class='btn add' catchtap='add'>+</text>
                </view>
            </view>
        </view>
    </view>-->
        </view>

        <view class="section-2">
            <view class="view-cell view-post">
                <view class="list">
                    <view class="col-1">配送方式</view>
                    <view class="col-2">快递运输</view>
                </view>
            </view>

            <view class="view-address" @tap.stop.prevent="chooseAddress">
                <view class="noAddress" v-if="!hasAddress">请选择邮寄地址</view>
                <block v-if="hasAddress">
                    <view class="row1">
                        <text class="col-1">{{ userName }}</text>
                        <text class="col-2">{{ telNumber }}</text>
                    </view>
                    <view class="row2">{{ address }}</view>
                </block>
                <image class="icon-arrow" mode="widthFix" src="/static/pages/images/icon-arrow1.png"></image>
            </view>

            <view class="view-cell view-payway">
                <view class="list">
                    <view class="col-1">支付方式</view>
                    <view class="col-2">
                        <image class="icon-weixin" mode="widthFix" src="/static/pages/images/icon-weixin-pay.jpg"></image>
                        <text class="text">微信支付</text>
                    </view>
                </view>
            </view>

            <view class="view-cell view-payway">
                <view class="list">
                    <view class="col-1">推荐人</view>
                    <view class="col-2">
                        <text class="text">{{ pphone }}</text>
                    </view>
                </view>
            </view>
        </view>

        <!--<view class='footer-btns'>
    <text class='price'>总价：{{totalPrice}}元</text>
    <text class='btn' catchtap='createorder'>立即申请</text>
</view>-->

        <view class="footer-btns">
            <view class="price">
                <text class="price-last">总价:{{ totalPrice }}元</text>
                <text class="price-now">￥{{ old_price }}</text>
            </view>
            <view class="btn" @tap.stop.prevent="createorder">立即申请</view>
        </view>
    </view>
</template>

<script>
//获取应用实例
const app = getApp();

const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

const initPrice = 19.9;
export default {
    data() {
        return {
            buyNumber: 1,
            totalPrice: '',
            hasAddress: false,
            userName: '',
            telNumber: '',
            address: '',
            allAddressInfo: '',
            price: '',
            title: '',
            img: '',
            content: '',
            goodsid: '',
            old_price: '',
            options: '',
            isphone: false,
            pphone: ''
        };
    },
    onLoad: function (options) {
    },
    methods: {
    }
};
</script>
<style>
.section-1 {
    padding: 40rpx 40rpx 20rpx;
    background-color: #fff;
}
.section-1 .view-cont {
    display: flex;
    align-items: center;
}
.section-1 .view-cont .left {
    width: 180rpx;
    height: 180rpx;
    background-color: #e9e9e9;
}
.section-1 .view-cont .left image {
    width: 100%;
    height: 180rpx;
}
.section-1 .view-cont .right {
    flex: 1;
    margin-left: 40rpx;
}
.section-1 .view-cont .right .row1 {
    display: block;
    font-size: 40rpx;
    color: #3f270b;
}
.section-1 .view-cont .right .row2 {
    display: block;
    font-size: 32rpx;
    color: #999;
}
.section-1 .view-cont .right .row3 {
    display: block;
    font-size: 32rpx;
    color: #999;
    text-decoration: line-through;
}
.section-1 .view-cont .right .row4 {
    display: block;
    font-size: 40rpx;
    color: #f14a5e;
}

.section-1 .view-cell {
    border-top: solid 1rpx #e5e5e5;
    margin-top: 40rpx;
}
.section-1 .view-cell .list {
    padding: 30rpx 0 20rpx;
}
.chooseNumber {
    display: flex;
    align-items: stretch;
    float: right;
    margin-right: -18rpx;
    width: 250rpx;
    height: 56rpx;
    text-align: center;
}
.chooseNumber .btn {
    width: 75rpx;
}
.chooseNumber .reduce {
    font-size: 50rpx;
    line-height: 42rpx;
    color: #aaa;
}
.chooseNumber .add {
    font-size: 46rpx;
    line-height: 48rpx;
}
.chooseNumber input {
    flex: 1;
    text-align: center;
    font-size: 36rpx;
    background-color: #e9e9e9;
}

.section-2 {
    padding: 0 40rpx;
    background-color: #fff;
}
.section-2 .view-cell .list {
    padding: 30rpx 0rpx;
}
.view-post .col-2 {
    text-align: right;
}
.view-payway {
    margin-top: 0;
    border-top: solid 1rpx #eee;
}
.view-payway .col-2 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.view-payway .col-2 .icon-weixin {
    width: 50rpx;
    margin-right: 15rpx;
}

.view-address {
    position: relative;
    background-color: #fff;
    border-top: solid 1rpx #eee;
    padding: 20rpx 0rpx;
}
.view-address .row1 {
    font-size: 30rpx;
    color: #000;
}
.view-address .row1 .col-1 {
    display: inline-block;
    padding-right: 60rpx;
}
.view-address .row2 {
    font-size: 28rpx;
    color: #999;
    padding: 5rpx 30rpx 0 0;
}
.view-address .icon-arrow {
    width: 18rpx;
    position: absolute;
    right: 0rpx;
    top: 50%;
    margin: -18rpx 0 0;
}
.view-address .noAddress {
    font-size: 30rpx;
    color: #333;
    padding: 10rpx 0 20rpx;
}

.footer-btns {
    display: flex;
    align-items: stretch;
    line-height: 96rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
}
.footer-btns .price {
    flex: 1;
    display: flex;
    font-size: 23rpx;
    padding: 0 40rpx;
    background-color: #3f270b;
    color: #fff;
}
.footer-btns .btn {
    width: 40%;
    background-color: #ffd700;
    color: #000;
    font-size: 34rpx;
    text-align: center;
}
.footer-btns .price .price-last {
    flex: 1;
    display: block;
    font-size: 27rpx;
    color: #fff;
}
.footer-btns .price .price-now {
    flex: 1;
    display: block;
    font-size: 20rpx;
    color: #999;
    text-decoration: line-through;
}
</style>
