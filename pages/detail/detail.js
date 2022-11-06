// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: -1,
    melonDetail: {
      title: "标题标题标题标题标题标题标题标题",
      imageUrl: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
      contents:
        "内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案",
    },
  },
  /**
   * 生命周期函数--监听页面加载
   * @param {any} options 上一页传过来的数据
   */
  onLoad(options) {
    this.setData({
      id: options.id,
      ["melonDetail.title"]: this.data.melonDetail.title + options.id,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
