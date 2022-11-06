// pages/home.js
const createRecycleContext = require("miniprogram-recycle-view");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, // 用户信息
    hasUserInfo: false, // 是否获取到用户信息
    canIUseGetUserProfile: false, // 是否可以使用用户信息
    recycleList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取用户信息使用权限
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
    let list = [];
    for (let index = 0; index < 20; index++) {
      list.push({
        id: index,
        imageUrl: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        title: "这是标题这是标题这是标题这是标题这是标题这是标题",
        time: "2022-11-06 10:00:00",
      });
    }
    this.setData({
      recycleList: list,
    });
  },
  /**
   * getUserProfile接口实现
   * 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
   */
  getUserProfile(e) {
    wx.getUserProfile({
      desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
  /**
   * 【点我吃瓜】按钮点击事件
   */
  onDetailClick(event) {
    wx.navigateTo({
      url: "../detail/detail?id=" + event.target.dataset.id,
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
