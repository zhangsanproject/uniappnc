<script>
let app = getApp();

let common = require('./utils/common.js');

uni.navloading = function (type) {
    if (type == 'close') {
        uni.hideNavigationBarLoading();
    } else {
        uni.showNavigationBarLoading();
    }
};

uni.loading = function (param) {
    if (param == 'close') {
        uni.hideLoading();
    } else {
        uni.showLoading({
            mask: true,
            title: param ? param.title : ''
        });
    }
};

export default {
    data() {
        return {};
    },
    globalData: {
        userid: '',
        authorization: '',
        plusOrderNumber: 0,
        common: function () {}
    },
    onLaunch: function () {}
};
</script>
<style>
page,
view,
text {
    box-sizing: border-box;
}
page {
    background-color: #efeff4;
}
button::after {
    display: none;
}

/* 左右删格列表 */
.view-cell {
    background-color: #fff;
    margin-top: 30rpx;
}
.view-cell .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 22rpx 30rpx;
    position: relative;
}
.view-cell .list.align-top {
    align-items: flex-start;
    padding-bottom: 25rpx;
}
.view-cell .list::after {
    content: '';
    display: block;
    position: absolute;
    left: 30rpx;
    right: 0;
    bottom: 0;
    border-top: solid 1rpx #eee;
}
.view-cell .list:nth-last-child(1)::after {
    border-top: 0;
}
.view-cell .list .col-icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.view-cell .list .col-icon image {
    width: 60rpx;
}
.view-cell .list .col-1 {
    font-size: 30rpx;
    margin-right: 40rpx;
}
.view-cell .list .col-2 {
    flex: 1;
    font-size: 30rpx;
}
.view-cell .list .col-2 input {
    width: 100%;
    height: 56rpx;
    text-align: right;
    font-size: 30rpx;
    color: #000;
}
.view-cell .list .col-2 .inputtext {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: right;
    font-size: 30rpx;
    color: #000;
}
.view-cell .list .col-2 .placeholder {
    color: #bbb;
}
.view-cell .list .col-2 .align-left {
    text-align: left;
}
.view-cell .list .arrow {
    padding-right: 30rpx;
}
.view-cell .list .icon-arrow {
    position: absolute;
    top: 50%;
    right: 30rpx;
    margin-top: -16rpx;
    width: 18rpx;
    filter: invert(70%);
}
</style>
