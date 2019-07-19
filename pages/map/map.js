// map.js
Page({
  data:{
    latitude: 23.099994,
    longitude: 113.324520,
    markers : [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        width:30,
        height:45,
        iconPath: '../../images/dibiaoshui.png',
        callout:{
          content:"放假罗\n我的",
          bgColor:"#ffffff",
          color:"#3385ff",
          display:"BYCLICK",
          padding:"10",
          borderRadius:5,
        }
      },
      {
        id: 2,
        latitude: 23.098804,
        longitude: 113.32420,
        width: 30,
        height: 45,
        iconPath: '../../images/dibiaoshui.png',
        callout: {
          content: "dsd",
          bgColor: "#ffffff",
          color: "#3385ff",
          display: "BYCLICK",
          padding: "10",
          borderRadius: 5,
        }
      },
    ]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap');
  
  },
})