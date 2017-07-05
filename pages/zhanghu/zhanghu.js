// pages/zhanghu/zhanghu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var pages = this;
    wx.getSystemInfo({
      success: function(res) {
        var sys = res;
        console.log(sys.windowWidth);
        console.log(sys.windowHeight);
        pages.setData({
          width : sys.windowWidth + "px",
          height : sys.windowHeight + "px"
        });
      },
    })
  },
})