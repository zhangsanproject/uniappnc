<template>
    <view>
        <view class="section-1">
            <view class="view-cont">
                <view class="left"><image mode="widthFix" src="/static/pages/images/address.png"></image></view>
                <view class="right">
                    <text class="row1">{{ user_name }}{{ phone }}</text>
                    <text class="row1">{{ sheng }}{{ shi }}{{ qu }}{{ address }}</text>
                </view>
            </view>
            <view class="view-cell">
                <view class="list">
                    <view class="col-1">订单号</view>
                    <view class="col-2">
                        {{ ordernum }}
                    </view>
                </view>
            </view>
        </view>

        <view class="section-2">
            <view class="view-cell view-post">
                <view class="list">
                    <view class="col-1">商品价格</view>
                    <view class="col-2">{{ price }}元</view>
                </view>
            </view>

            <view class="view-cell view-num">
                <view class="list">
                    <view class="col-1">数量</view>
                    <view class="col-2">{{ num }}</view>
                </view>
            </view>

            <view class="view-cell view-payway">
                <view class="list">
                    <view class="col-1">邮费</view>
                    <view class="col-2">{{ shipping }}元(下单后三天内发货)</view>
                </view>
            </view>
        </view>

        <!--<view class='footer-btns'>
    <text class='price'>总价：{{totalPrice}}元</text>
    <text class='btn' catchtap='createorder'>立即申请</text>
</view>-->

        <view class="footer-btns">
            <view class="price">
                <text class="price-last">合计:{{ allprice }}元</text>
                <text class="price-now">挪车码:{{ price }}+邮费:{{ shipping }}</text>
            </view>
            <view class="btn" @tap.stop.prevent="prePay">确认支付</view>
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
            user_name: '',

            //收货人姓名
            shipping: '',

            //邮费
            sheng: '',

            //省
            shi: '',

            //市
            qu: '',

            //区县
            address: '',

            //详细地址
            phone: '',

            //电话号码
            price: '',

            //商品价格
            ordernum: '',

            //订单号
            allprice: '',

            //总价
            num: '',

            //数量
            options: '',

            totalPrice: '',
            hasAddress: false,
            allAddressInfo: '',
            userName: '',
            telNumber: ''
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
    width: 50rpx;
    height: 50rpx;
}
.section-1 .view-cont .left image {
    width: 100%;
}
.section-1 .view-cont .right {
    flex: 1;
    margin-left: 40rpx;
}
.section-1 .view-cont .right .row1 {
    display: block;
    font-size: 30rpx;
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
.section-1 .view-cell .list .col-2 {
    text-align: right;
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

.view-num {
    margin-top: 0;
    border-top: solid 1rpx #eee;
}
.view-num .col-2 {
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
    writing-mode: vertical-lr;
    line-height: 42rpx;
}
.footer-btns .btn {
    width: 40%;
    background-color: #ffd700;
    color: #000;
    font-size: 34rpx;
    text-align: center;
    line-height: 96rpx;
}
.footer-btns .price .price-last {
    font-size: 27rpx;
    color: #fff;
    writing-mode: horizontal-tb;
    margin-top: 10rpx;
}
.footer-btns .price .price-now {
    font-size: 20rpx;
    color: #999;
    writing-mode: horizontal-tb;
}
</style>
