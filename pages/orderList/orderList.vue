<template>
    <view>
        <view class="order-list" v-for="(item, index) in list" :key="item.unique">
            <view class="v-header">
                <text class="col-2">{{ item.addtime }}</text>
                <text class="col-3 color1" v-if="item.pay_status == 1">未支付</text>
                <text class="col-3 color1" v-if="item.pay_status == 2">已支付 待发货</text>
                <text class="col-3 color1" v-if="item.pay_status == 3">已发货</text>
            </view>

            <view class="v-bodyer">
                <view class="row">
                    <text class="col-1">订单编号</text>
                    <text class="col-2">{{ item.order_num }}</text>
                </view>
                <view class="row">
                    <text class="col-1">订单金额</text>
                    <text class="col-2">{{ item.sum_price }}元</text>
                </view>
                <view class="row">
                    <text class="col-1">购买数量</text>
                    <text class="col-2">{{ item.num }}套</text>
                </view>
                <view class="row">
                    <text class="col-1">客户姓名</text>
                    <text class="col-2">{{ item.uname }}</text>
                </view>
                <view class="row">
                    <text class="col-1">联系电话</text>
                    <text class="col-2">{{ item.phone }}</text>
                </view>
                <view class="row">
                    <text class="col-1">邮寄地址</text>
                    <text class="col-2">{{ item.sheng }}{{ item.shi }}{{ item.qu }}{{ item.address }}</text>
                </view>
                <view class="row row-wuliu" v-if="item.pay_status > 2">
                    <text class="col-1">快递公司</text>
                    <text class="col-2">{{ item.logistics }}</text>
                </view>
                <view class="row" v-if="item.pay_status > 2">
                    <text class="col-1">快递单号</text>
                    <text class="col-2" :selectable="true">{{ item.tracknumber }}</text>
                </view>
                <button class="gopay" @tap.stop.prevent="gopay" :data-orderid="item.order_num" v-if="item.pay_status == 1">去支付</button>
            </view>
        </view>

        <view :class="'nodata ' + (nodata ? 'show' : '')">您还没有订单！</view>
    </view>
</template>

<script>
const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

export default {
    data() {
        return {
            list: [],
            nodata: false
        };
    },
    onLoad: function () {
    },
    methods: {
    }
};
</script>
<style>
.order-list {
    background-color: #fff;
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    padding: 0 0 0 30rpx;
}
.order-list .v-header {
    display: flex;
    align-items: center;
    padding: 20rpx 30rpx 20rpx 0;
    border-bottom: solid 1rpx #eee;
}
.order-list .v-header .col-2 {
    color: #000;
    font-size: 30rpx;
    flex: 1;
}
.order-list .v-header .col-3 {
    font-size: 30rpx;
}
.order-list .v-header .col-3.color1 {
    color: #f14a5e;
}
.order-list .v-header .col-3.color2 {
    color: #1075c1;
}
.order-list .v-header .col-3.color3 {
    color: #35ca71;
}
.order-list .v-bodyer {
    padding: 20rpx 0;
    position: relative;
}
.order-list .v-bodyer .row {
    display: flex;
    align-items: center;
    padding: 12rpx 30rpx 12rpx 0;
    font-size: 28rpx;
}
.order-list .v-bodyer .row-wuliu {
    border-top: solid 1rpx #eee;
    margin-top: 14rpx;
    padding-top: 22rpx;
}
.order-list .v-bodyer .col-1 {
    color: #030303;
    margin-right: 40rpx;
}
.order-list .v-bodyer .col-2 {
    color: #999;
    flex: 1;
}
.order-list .v-bodyer .delete {
    position: absolute;
    top: 30rpx;
    right: 30rpx;
    width: 40rpx;
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
