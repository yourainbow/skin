Page
({
  
  data: 
  {
    goodslist:[],
  },

  onLoad: function (options) 
  {
    //接收传过来的数据    Index为0,,1,2上三个功能; Index为3,4,5下三个功能
    var Index=options.index;
    console.log(options.index);

    wx.request
    ({
      url: 'https://whatdoyoudo.club/api/database/category',
      success: (res) =>
      {
         console.log('duandian')
         console.log(res.data)
          this.setData
            ({
              goodslist: res.data
            })
      },
    })


  },




})