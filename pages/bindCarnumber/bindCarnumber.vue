<template>
    <view>
        <view class="section-cont1">
            <view class="header">车辆信息</view>
            <view class="bodyer">
                <view class="row1">
                    <view class="province" @tap.stop.prevent="showProvince">{{ province }}</view>
                    <input placeholder="请输入车牌号" placeholder-class="placeholder" focus @input="setCarNumber" :value="carNumber" />
                </view>
                <view class="row2">手机号</view>
                <view class="row4">
                    <input class="input phonenumber" @input="setPhoneNumber" :value="phoneNumber" :disabled="true" type="number" />
                </view>
                <view class="row3"></view>
                <!--<view class='row2'>验证码</view>
        <view class='row5'>
            <input class='input' bindinput='setyanzhengma' value='' type='number' />
            <button class='codeBtn' bindtap='getVerificationCode' disabled='{{disabled}}' >{{btntext}}</button>
        </view>
        <view class='row3'></view>-->
            </view>
        </view>

        <view class="btns" v-if="!isedit">
            <view class="btn" @tap.stop.prevent="save" v-if="!isjihuo">确认生成</view>
            <view class="btn" @tap.stop.prevent="saveJihuo" v-if="isjihuo">激活挪车码</view>
        </view>
        <view class="btns" v-if="isedit">
            <view :class="btnDisabled ? 'disabled' : 'disableds'" @tap.stop.prevent="doedit" v-if="isedit">保存</view>
        </view>

        <view class="province-action" v-if="show">
            <view class="bodyer">
                <view class="list" hover-class="hover-bgcolor" :data-province="item" @tap.stop.prevent="selectProvince" v-for="(item, index) in provincename" :key="index">
                    {{ item }}
                </view>
                <text class="list list-hide" @tap.stop.prevent="hideProvince">隐藏</text>
            </view>
        </view>
    </view>
</template>

<script>
//获取应用实例
const app = getApp();

const md5 = require('../../utils/md5.js');

const common = require('../../utils/common.js');

export default {
    data() {
        return {
            show: false,
            phoneNumber: '',
            province: '京',
            carNumber: '',
            key: '',
            isjihuo: false,
            yzmcode: '',
            //用户输入的验证码
            sysyzmcode: '',
            //系统生成的验证码
            disabled: false,
            btntext: '获取验证码',
            provincename: [
            ],
            carcodeid: '',
            isedit: false,
            btnDisabled: false
        };
    },
    onLoad: function () {
        
    },
    methods: {
    }
};
</script>
<style>
page {
    background-color: #ffd700;
    padding: 25px 40rpx 0;
}

.section-cont1 {
    padding: 25rpx 60rpx 40rpx;
    background-color: #fff;
}
.section-cont1 .header {
    padding: 20rpx 0 40rpx;
    font-size: 32rpx;
}
.section-cont1 .bodyer .row1 {
    display: flex;
    align-items: center;
    padding: 0 0 32rpx;
    border-bottom: solid 1rpx #eee;
    box-sizing: border-box;
}
.section-cont1 .bodyer .row1 .province {
    width: 110rpx;
    height: 70rpx;
    line-height: 64rpx;
    background-color: #3f270b;
    color: #fff;
    font-size: 32rpx;
    margin: 0 40rpx 0 0;
    position: relative;
    text-align: center;
    padding: 0 18rpx 0 0;
}
.section-cont1 .bodyer .row1 .province::after {
    content: '';
    display: block;
    border: solid 8rpx transparent;
    border-top: solid 8rpx #fff;
    position: absolute;
    top: 30rpx;
    right: 25rpx;
}
.section-cont1 .bodyer .row1 input {
    flex: 1;
    height: 100%;
    font-size: 32rpx;
    color: #000;
}
.section-cont1 .bodyer .row1 .placeholder {
    color: #999;
}
.section-cont1 .bodyer .row2 {
    font-size: 32rpx;
    padding-top: 30rpx;
}
.section-cont1 .bodyer .row3 {
    font-size: 28rpx;
    color: #999;
    padding-top: 30rpx;
    border-top: solid 1rpx #eee;
    margin-top: 25rpx;
}
.section-cont1 .bodyer .row4 {
    display: flex;
    align-items: center;
    padding: 10rpx 0 0;
}
.section-cont1 .bodyer .row4 .input {
    font-size: 30rpx;
    color: #999;
}
.section-cont1 .bodyer .row5 {
    display: flex;
    align-items: center;
    padding: 10rpx 0 0;
}
.section-cont1 .bodyer .row5 .input {
    font-size: 30rpx;
}
.btns {
    padding: 40rpx 0;
}
.btns .btn {
    height: 96rpx;
    line-height: 96rpx;
    background-color: #3f270b;
    color: #fff;
    font-size: 30rpx;
    text-align: center;
}

.cont-customer-telephone {
    text-align: center;
    color: #666;
    font-size: 28rpx;
}

.disabled {
    height: 96rpx;
    line-height: 96rpx;
    color: #fff;
    font-size: 30rpx;
    text-align: center;
    background-color: #bbb;
}

.disableds {
    height: 96rpx;
    line-height: 96rpx;
    color: #fff;
    font-size: 30rpx;
    text-align: center;
    background-color: #3f270b;
}

.province-action {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #dadbdd;
    box-sizing: border-box;
}
.province-action .bodyer {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 20rpx 20rpx;
    box-sizing: border-box;
}
.province-action .list {
    width: 10%;
    height: 80rpx;
    line-height: 75rpx;
    margin: 20rpx 2.4% 0 0;
    background-color: #fff;
    color: #333;
    border-radius: 10rpx;
    text-align: center;
    font-size: 30rpx;
}
.province-action .list-hide {
    width: 35.3%;
    background-color: #b9c3c6;
}
.province-action .hover-bgcolor {
    background-color: #eee;
}
.row5 {
    position: relative;
    height: 80rpx;
    width: 100%;
    border-radius: 10rpx;
    background: #fff;
    margin-bottom: 20rpx;
    padding-left: 20rpx;
    box-sizing: border-box;
}
.codeBtn {
    position: absolute;
    right: 0;
    top: 0;
    color: black;
    width: 40%;
    font-size: 26rpx;
    height: 80rpx;
    line-height: 80rpx;
}
</style>
