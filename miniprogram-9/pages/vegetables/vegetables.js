// pages/vegetables/vegetables.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    vegetable:"白菜",
    hidden:true,
    imgUrl:'https://img95.699pic.com/xsj/1c/kz/be.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

 set(){
   //随机生成菜品种类
    var a=Math.floor(Math.random()*(5))+1
   //switch case实现不同的输出
    switch(a)
    {
   case 1 : this.setData({vegetable:"花菜",imgUrl:'https://img0.baidu.com/it/u=1992282180,3065986053&fm=253&fmt=auto&app=120&f=JPEG?w=1024&h=625'});break;
   case 2 : this.setData({vegetable:"生菜",imgUrl:'https://img0.baidu.com/it/u=2638918252,1530118343&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'});break;;
   case 3 : this.setData({vegetable:"紫菜",imgUrl:'https://img0.baidu.com/it/u=2642232961,3533552255&fm=253&fmt=auto&app=138&f=JPEG?w=676&h=500'});break;;
   case 4 : this.setData({vegetable:"青菜",imgUrl:'https://img1.baidu.com/it/u=222726331,3934437834&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333'});break;;
   case 5 : this.setData({vegetable:"茄子",imgUrl:'https://img1.baidu.com/it/u=3773850640,1937862557&fm=253&fmt=auto&app=138&f=JPEG?w=487&h=291'});break;;
   default: break;
    }
   //刷新页面数据
    this.onLoad();


     setTimeout(function () {
      this.setData({
        hidden: false
      })
    }.bind(this), )
 },

// 隐藏
  yincang:function(e){
    setTimeout(function () {
      this.setData({
        hidden: true
      })
    }.bind(this), )
  },
  // 显示
  xianshi:function(e){
    setTimeout(function () {
      this.setData({
        hidden: false
      })
    }.bind(this), )
  }




})