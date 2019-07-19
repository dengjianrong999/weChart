Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    lisT: [1, 1, 1],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    isMore: true,
    isOver: true,
    interval: 5000,
    duration: 1000
  },
  onReachBottom() {
    let _this = this;
    if (_this.data.lisT.length <= 8) {
      _this.setData({
        isMore: false,
      })
      setTimeout(function() {
        _this.setData({
          isMore: true,
          lisT: _this.data.lisT.concat(1)
        })
      }, 2000)
      console.log(_this.data.lisT)
    }else{
      _this.setData({
        isOver: false,
      })
    }
  },


  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  
  //右上角分享功能
  onShareAppMessage: function (res) {

  },
})