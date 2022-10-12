<template>
    <view>
        <view class="problemt-list">
            <view class="p-header">Q1:在线体验生成的码和寄出的码是不是同一个?</view>
            <view class="p-bodyer">不是，在线体验生成的码仅限于线上体验和打印使用，寄出的码是全新的空码，到手之后需要使用微信重新扫码绑定</view>
        </view>

        <view class="problemt-list">
            <view class="p-header">Q2:申请之后多久发货?</view>
            <view class="p-bodyer">工作日申请后第二天发货，周未及节假日申请后在下一个工作日发出。</view>
        </view>

        <view class="problemt-list">
            <view class="p-header">Q3:发货之后怎么查看我的物流信息?</view>
            <view class="p-bodyer">发货之后,可以在 我的 》》我的订单 中查询购买快递单号及快递公司相关信息</view>
        </view>

        <view class="problemt-list">
            <view class="p-header">Q4:快递一直没收到怎么办?</view>
            <view class="p-bodyer">物流信息由委托第三方物流公司寄送，如出现物流问题请致电物流客服询问，如没有回应可以联系客服。</view>
        </view>

        <view class="problemt-list">
            <view class="p-header">Q5:那车码收到后怎么用?</view>
            <view class="p-bodyer">您将收到精美挪车贴一张，收货后需要使用车主本人微信扫描绑定联络手机号和车牌号，绑定后挪车贴可贴在挡风玻璃四角或后方玻璃内的使用</view>
        </view>

        <view class="problemt-list">
            <view class="p-header">Q6:挪车贴粘贴后可以移动吗?会不会留下胶水痕迹?</view>
            <view class="p-bodyer">车贴在粘贴后可揭下重复粘贴使用，不会残留胶水印记。</view>
        </view>

        <view class="problemt-list">
            <view class="p-header">Q7:使用中会不会产生额外费用?</view>
            <view class="p-bodyer">挪车码在使用过程中没有额外费用，仅会在拨叫过程中产生拨叫人本人通话资费标准的市话费。</view>
        </view>
    </view>
</template>

<script>
const app = getApp();
export default {
    data() {
        return {};
    },
    onLoad: function () {},
    methods: {}
};
</script>
<style>
page {
    padding: 20rpx 30rpx 20rpx;
    box-sizing: border-box;
    background-color: #ffd700;
}

.problemt-list {
    background-color: #fff;
    margin-bottom: 30rpx;
    border-radius: 10rpx;
}
.problemt-list .p-header {
    color: #333;
    font-size: 28rpx;
    padding: 20rpx 30rpx;
    position: relative;
}
.problemt-list .p-bodyer {
    padding: 10rpx 30rpx 25rpx;
    font-size: 24rpx;
    color: #333;
}
</style>
