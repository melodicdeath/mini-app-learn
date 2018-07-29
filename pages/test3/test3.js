// pages/test3/test3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minusStatus: 'disabled',
    num: 1
  },

  minusTap: function() {
    let num = this.data.num;
    let minusStatus = 'normal'
    if (num <= 1) {
      minusStatus = 'disabled'
      this.setData({
        minusStatus: minusStatus
      })
      return
    }

    this.setData({
      num: --num,
      minusStatus: minusStatus
    })
  },
  plusTap: function() {
    this.setData({
      num: ++this.data.num,
      minusStatus: 'normal'
    })
  },
  numChange: function(e) {
    let num = e.detail.value;
    this.setData({
      num: num
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onShareAppMessage: function() {

  }
})