function req(url, data, cb) {
  wx.request({
    url: url,
    data: data,
    method: 'GET',
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}

module.exports = { req: req }  