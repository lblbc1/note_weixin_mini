//厦门大学计算机专业 | 前华为工程师
//专注《零基础学编程系列》  http://lblbc.cn/blog
//包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
//公众号：蓝不蓝编程
var http = require('../../utils/httputils.js');

Page({
  data: {
    noteId: 0,
    content: ""
  },
  onLoad: function (option) {
    this.queryNote(option.id)
  },
  methods: {
  },
  queryNote(noteId) {
    let _this = this
    http.get('note/notes/' + noteId, '',
      function (resp) {
        _this.setData({
          noteId: noteId,
          content: resp.data.content
        })
      },
      function (err) { })
  },
  modifyNote(e) {
    var params = {
      content: e.detail.value.content,
    }
    http.put('note/notes/'+this.data.noteId, params,
      function (resp) {
        wx.navigateBack()
      },
      function (err) { })
  }

})