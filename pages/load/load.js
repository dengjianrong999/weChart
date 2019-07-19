// pages/ceshi/ceshi.js
var url = "http://www.imooc.com/course/ajaxlist";
var page = 0;
var page_size = 5;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;

// 请求数据
var loadMore = function(that) {
  wx.request({
    url: url,
    data: {
      page: page,
      page_size: page_size,
      sort: sort,
      is_easy: is_easy,
      lange_id: lange_id,
      pos_id: pos_id,
      unlearn: unlearn
    },
    success: function(res) {

      var list = that.data.list;
      console.info("list数据长度：" + list.length);
      for (var i = 0; i < res.data.list.length; i++) {
        list.push(res.data.list[i]);
      }
      if (that.data.list.length <= 60) {
        that.setData({
          isMore: false
        });
        setTimeout(function () {
          that.setData({
            list:list
          })
        }, 0)
      } else {
        that.setData({
          isMore: true,
          isOver: false,
        });
      }
    }
  });
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isMore: true,
    isOver: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    inputValue:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //   这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
        console.log("设备高度scrollHeight==" + res);

      }

    });

    loadMore(that);

  },
  //页面滑动到底部

  onReachBottom: function() {
    var that = this;
    loadMore(that);
  },
  scroll: function(event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
    console.log("滚动时触发scrollTop==" + event.detail.scrollTop);
  },
  onPullDownRefresh: function(event) {
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    page = 0;
    this.setData({
      list: [],
      scrollTop: 0
    });
    loadMore(this);
    console.log("重新加载");
  },


  // 获取input的值

  getCode(e){
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},
  /**
  
  /**

   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})