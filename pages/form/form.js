// pages/details/details.js



Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    inputValue:'北京欢迎您',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.geTlist()
  },


   geTlist(){
    var that = this;
    wx.request({
      url: 'http://musicapi.leanapp.cn/search', //这个地址好像只能https的
      method: "GET",
      data: {
        keywords: that.data.inputValue,
      },
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        let lidt = res.data.result.songs;
        that.setData({
          list: lidt,
        })
        console.log(that.data.list)
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  },
  getCode(e) {
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    })
    this.geTlist();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */

  //右上角分享功能
  onShareAppMessage: function(res) {

  },
})