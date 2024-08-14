// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

    banners:[
 
    {picUrl:'https://safe-img.xhscdn.com/bw1/50777beb-a4d3-4677-97f3-c007a3b10ebf?imageView2/2/w/1080/format/jpg',},
      {picUrl:'https://bkimg.cdn.bcebos.com/pic/ca1349540923dd54564e1ee62c41a4de9c82d058e2ae',},


    ]
   
  },
  // 事件处理函数
jump(){
wx.reLaunch({
  url: 'pages/mine/mine',
})

}
})
