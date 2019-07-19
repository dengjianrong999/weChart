Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userIo:[],
    IsShow:true,

    targetTime: 0,
    targetTime1: 0,
    myFormat: ['时', '分', '秒'],
    myFormat1: ['天', '时', '分', '秒'],
    status: '进行中...',
    clearTimer: false
  },
  onLoad: function () {
    let that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    });

    that.setData({
      targetTime2: new Date().getTime() + 10000
    });
  },
  bindGetUserInfo(e) {
    this.setData({
      userIo: e.detail.userInfo,
      IsShow:false,
    })
    console.log(e.detail.userInfo)
  },

  onUnload() {
    this.setData({
      clearTimer: true
    });
  },
  myLinsterner(e) {
    this.setData({
      status: '结束'
    });
  }
})