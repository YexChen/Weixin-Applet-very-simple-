// pages/baoxiu/baoxiu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src : "/images/service_icon.png"
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var pages = this;
    wx.getSystemInfo({
      success: function (res) {
        var sys = res;
        pages.setData({
          top: sys.windowHeight / 2 - 160 + "px",
          left: sys.windowWidth / 2 - 75 + "px",
          top2: sys.windowHeight / 2 + 10 + "px",
          left2: sys.windowWidth / 2  - 150 + "px",
          top3: sys.windowHeight / 2 + 185 + "px",
          left3: sys.windowWidth / 2 - 105 + "px"
        })
      },
    })
  }
})