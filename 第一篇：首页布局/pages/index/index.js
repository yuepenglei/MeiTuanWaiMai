//index.js
//获取应用实例
const app = getApp()
const dataJson = require("../../utils/data.js")

Page({
  data: {
    swiperList: dataJson.swiperList,//滑块项目集合
    sortName: "综合排序",//下拉排序选中项名称
    sortList: ["综合排序", "距离最近", "评分最高", "起送价最低", "配送费最低", "人均高到低", "人均低到高"],//下拉排序集合
    filterList: dataJson.filterList,//筛选项目集合
    restaurant: dataJson.restaurant,//商家
  },

  onLoad: function () {

  }
})
