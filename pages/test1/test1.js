// pages/test/test1.js
var util = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: 'welcomegoodhunter',
    condition: true,
    arrayData: [1, 2, 3, 4, 5],
    time: util.formatTime(new Date()),
    navLeftItems: [1, 2, 3, 4, 5],
    navRightItems: [
      ['1-1', '1-2', '1-3', '1-4', '1-5'],
      ['2-1', '2-2', '2-3', '2-4', '2-5'],
      ['3-1', '3-2', '3-3', '3-4', '3-5'],
      ['4-1', '4-2', '4-3', '4-4', '4-5'],
      ['5-1', '5-2', '5-3', '5-4', '5-5']
    ],
    curNav: 1,
    curIndex: 0,
    currentItems: []
  },
  navLeftItemTap: function(e) {
    let id = parseInt(e.target.dataset.id);
    this.setData({
      curNav: id,
      currentItems: this.data.navRightItems[id - 1]
    })
  },
  onPullDownRefresh: function() {
    // 显示导航栏loading
    wx.showNavigationBarLoading();
    // 调用接口加载数据
    this.loadData();
    // 隐藏导航栏loading
    wx.hideNavigationBarLoading();
    // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新
    wx.stopPullDownRefresh();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      currentItems: this.data.navRightItems[0]
    })
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