Page
({

  data: {
    array: ['已为你搜索1,634,234条记录', '90%xx特征匹配度结果2,456','90%yy特征匹配度结果2,456'],
    tabs: ["全部", "面膜", "洁面","乳液"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    goodssorting:[],
  },


  onLoad: function () 
  {
    var that = this;
    wx.getSystemInfo
    ({
      success: function (res) {   }
    });
   
  },
  
  tabClick: function (e)
  {
    this.setData
    ({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }

})