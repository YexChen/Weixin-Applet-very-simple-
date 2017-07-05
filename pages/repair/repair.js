// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src : "/images/4N.png"
  },
  switchPage1: function () {
    wx.navigateTo({
      url: '/pages/baoxiu/baoxiu'
    })
  },
  switchPage2: function () {
    wx.navigateTo({
      url: '/pages/zhanghu/zhanghu'
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var pages = this;
    wx.getSystemInfo({
      success: function(res) {
        var sys = res;
        pages.setData({
          top : sys.windowHeight/5 + "px",
          left : sys.windowWidth/2 -75 + "px",
          top2 : sys.windowHeight/5 + 155 + "px",
          left2: sys.windowWidth / 2 - 45 + "px",
          top3: sys.windowHeight / 5 + 200 + "px",
          left3 : sys.windowWidth/ - 200  + "px",
          top4 : sys.windowHeight / 5 + 230 + "px",
          top5 : sys.windowHeight /5 + 260 + "px"
        });
      },
    })
  }

})