Page({
  data: {
    userInfo:'',
  },
  //授权
  Isauthorize() {
    let _this = this
    wx.showModal({
      title: '确定授权吗',
      content: '将获取你的个人信息、头像、昵称等',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
          wx.getSetting({
            success(res) {
              wx.getUserInfo({
                success(res) {
                  console.log("ppppppp", res)

                  _this.setData({
                    userInfo: res.userInfo
                  })
                  const userInfo = res.userInfo
                  const nickName = userInfo.nickName
                  const avatarUrl = userInfo.avatarUrl
                  const gender = userInfo.gender // 性别 0：未知、1：男、2：女
                  const province = userInfo.province
                  const city = userInfo.city
                  const country = userInfo.country
                }
              })
              // if (!res.authSetting['scope.record']) {
              //   wx.authorize({
              //     scope: 'scope.record',
              //     success() {
              //       // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              //     }
              //   })
              // }
            }
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }


})