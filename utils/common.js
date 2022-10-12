function common() {
    let time = new Date().getTime() / 1000;
    let request_time = time.toString().replace(/\.\d{0,}/g, '');
    let uid = uni.getStorageSync('userid');
    this.apiurl = ''; //接口域名地址 域名+/addons/mycar 例如 https://www.xxxxxxx.com/addons/mycar

    this.app_token = ''; //需要与插件后台自定义接口密钥配置一致

    this.data = {
        url: '',
        request_time: request_time
    };
    this.userinfo = {
        uid: uid
    };

    this.ajax = function (param, success, fail, complete, type = 'POST') {
        let that = this;
        uni.request({
            url: param.url,
            data: param,
            method: type,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (result) {
                if (result.statusCode == 200 && result.data.code == 3003) {
                    that.authorization();
                    return false;
                }

                success(result);
            },
            fail: function () {
                fail();
            },
            complete: function () {
                complete();
                uni.navloading('close');
            }
        });
    }; //封装登陆方法

    this.checklogin = function () {
        const that = this;
        let uid = uni.getStorageSync('userid');
        let contenttext = uni.getStorageSync('contenttext');
        console.log(contenttext);
        uni.request({
            url: that.apiurl + '?action=car.check_sessionkey',
            data: {
                uid: uid
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (result) {
                let datainfo = result.data;

                if (datainfo.error.errorCode == 0) {
                } else {
                    //session已经过期
                    uni.loading();
                    uni.login({
                        success: function (res) {
                            if (res.code) {
                                uni.request({
                                    url: that.apiurl + '?action=car.get_auth_info',
                                    data: {
                                        js_code: res.code
                                    },
                                    method: 'POST',
                                    header: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    success: function (result) {
                                        let datainfo = result.data;

                                        if (datainfo.error.errorCode == 0) {
                                            uni.setStorageSync('userid', datainfo.data.uid);
                                        }
                                    },
                                    complete: function () {
                                        uni.loading('close');
                                    }
                                });
                            }
                        }
                    });
                }
            },
            complete: function () {
                uni.loading('close');
            }
        });
    }; //封装登陆方法

    this.newchecklogin = function () {
        const that = this;
        uni.login({
            success: function (res) {
                if (res.code) {
                    uni.request({
                        url: that.apiurl + '?action=car.get_auth_info',
                        data: {
                            js_code: res.code
                        },
                        method: 'POST',
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function (result) {
                            let datainfo = result.data;

                            if (datainfo.error.errorCode == 0) {
                                uni.setStorageSync('userid', datainfo.data.uid);
                            } else {
                            }
                        },
                        complete: function () {}
                    });
                }
            }
        });
    };
}

module.exports = common;
