Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})