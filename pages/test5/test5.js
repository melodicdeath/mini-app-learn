// pages/test5/test5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    total:0,

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
    let list = wx.getStorageSync('cart') || [];
    console.log(list)
    this.setData({
      list: list,
      total: list.length > 0 ?list.map(d => {
        return parseFloat(d.price) * parseFloat(d.count)
      }).reduce((prev, next) => {
        return prev + next
      }):0
    })
  },
  removeTap: function(e) {
    let currents = this.data.list.filter(element => {
      return element.id == e.target.dataset.id
    })

    if (currents.length == 1) {
      this.data.list.splice(this.data.list.indexOf(currents[0]), 1)
    }

    wx.setStorageSync('cart', this.data.list)
    this.setData({
      list: this.data.list,
      total: this.data.list.length > 0 ? this.data.list.map(d => {
        return parseFloat(d.price) * parseFloat(d.count)
      }).reduce((prev, next) => {
        return prev + next
      }) : 0
    })
  },
  minusTap: function(e) {
    let current = this.data.list.filter(element => {
      return element.id == e.target.dataset.id
    })[0];

    if (current.count <= 1) {
      return
    }

    current.count--
    wx.setStorageSync('cart', this.data.list)

    
    this.setData({
      list: this.data.list,
      total: this.data.list.length > 0 ? this.data.list.map(d => {
        return parseFloat(d.price) * parseFloat(d.count)
      }).reduce((prev, next) => {
        return prev + next
      }) : 0
    })
  },
  plusTap: function(e) {
    let current = this.data.list.filter(element => {
      return element.id == e.target.dataset.id
    })[0];

    current.count++
    wx.setStorageSync('cart', this.data.list)
    this.setData({
      list: this.data.list,
      total: this.data.list.length > 0 ? this.data.list.map(d => {
        return parseFloat(d.price) * parseFloat(d.count)
      }).reduce((prev, next) => {
        return prev + next
      }) : 0
    })
  },
  numChange: function(e) {
    let current = this.data.list.filter(element => {
      return element.id == e.target.dataset.id
    })[0];

    current.count = e.detail.value
    wx.setStorageSync('cart', this.data.list)
    this.setData({
      list: this.data.list,
      total: this.data.list.length > 0 ? this.data.list.map(d => {
        return parseFloat(d.price) * parseFloat(d.count)
      }).reduce((prev, next) => {
        return prev + next
      }) : 0
    })
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