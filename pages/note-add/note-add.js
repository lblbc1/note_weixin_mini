//厦门大学计算机专业 | 前华为工程师
//专注《零基础学编程系列》  http://lblbc.cn/blog
//包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
//公众号：蓝不蓝编程
var http = require('../../utils/httputils.js');

Page({
  data: {
    content: ""
  },
  addNote(e) {
    var params = {
      content: e.detail.value.content,
    }
    http.post('note/notes', params,
      function (resp) {
        wx.navigateTo({ url: '/pages/list/list' })
      },
      function (err) { })
  }

})