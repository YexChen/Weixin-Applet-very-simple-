
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top : "100px",
  },
  switchPage: function () {
     wx.navigateTo({
       url: '/pages/repair/repair'
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
          top: sys.windowHeight/2 -140 + "px",
          left : sys.windowWidth/2 -75 + "px",
          top2: sys.windowHeight / 2 + 20 + "px",
          left2: sys.windowWidth / 2 - 60 + "px",
          top3: sys.windowHeight / 2 + 82 + "px",
          left3: sys.windowWidth / 2 - 105 + "px",
        })
      },
    })
  }

})