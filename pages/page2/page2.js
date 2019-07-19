Page({
  data: {
    clickId: 0,
    textLeftAnimation: {},
    reason: ['不需要服务了', '买错了', '服务质量不满意', '想购买其他服务项目', '其他原因'],
    markers: [{
      iconPath: "",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    list: [{
        id: "0",
        name: "一级图片",
        open: true,
        child: [{
            id: "1-1",
            title: "方法和金卡好久",
            child: [{
              text: "差UN发ifhi哦吼金额后进生日二号机窘好囧让几位韩"
            }],
          },
          {
            id: "1-2",
            title: "交付给个为更好玩个偶尔会给我换个个",
            child: [{
              text: "差UN发ifhi哦fee各位给我个尔"
            }],
          },
          {
            id: "1-3",
            title: "第五期对全国服务各个",
            child: [{
              text: "我好QUI回去玩会返回去芜湖分行"
            }],
          },
        ]
      },
      {
        id: "1",
        name: "一级图片",
        open: false,
        child: [{
            title: "方法和金卡好久"
          },
          {
            title: "方法和金卡好久"
          },
          {
            title: "方法和金卡好久"
          },
        ]
      },
      {
        id: "2",
        name: "一级图片",
        open: false,
        child: [{
            title: "方法和金卡好久"
          },
          {
            title: "方法和金卡好久"
          },
          {
            title: "方法和金卡好久"
          },
        ]
      }
    ],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  selectBtn(event) {
    var text = event.currentTarget.dataset.text;
    this.setData({
      clickId: event.currentTarget.id,
    })
  },
  // 排他
  clickOne(e) {
    var listV = this.data.list;
    var currentid = e.currentTarget.dataset.id;
    for (let i = 0; i < listV.length; i++) {
      if (listV[i].id === currentid) {
        listV[i].open = !listV[i].open;
      } else {
        listV[i].open = false;
      }
    }
    this.setData({
      list: listV
    })
  },
  // 进入页面
  linkTo(e) {
    var currentid = e.currentTarget.dataset.curid;
    var child = e.currentTarget.dataset.child;
    wx.navigateTo({
      url: '../details/details?objCur='+JSON.stringify(child),
    })
  },
  //右上角分享功能
  onShareAppMessage: function (res) {
     return{
       title: '我的小目标',
     }
  },
})