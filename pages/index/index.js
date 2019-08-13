var app = getApp();
Page({
  data:{
    searchsample:'大家都在搜  黑发',
    searchIcon:'../../images/search.png',

    topimgs: ['../../images/classify.png','../../images/skinCare.png','../../images/Beauty.png'],
    fonts_text:['分类','护肤','美妆'],
    urlmaptop: ["../rank/rank",],

    bottomimgs:['../../images/brand.png','../../images/popular.png','../../images/new.png'],
    font_text:['品牌','热门','新品'],
    urlmapdown:[''],

    bottom_num:[3,4,5],
    index:0,
    goodslist:[]
  },
  onLoad:function(){
    wx.request({
      url: 'https://whatdoyoudo.club/api/database/recommend', 
      success:(res) =>{
        console.log(res.data)
        this.setData({
          goodslist: res.data
        }) 
      }
    })
  },
  //进入搜索页面
  goSearch:function(){
    wx.navigateTo({
      url: '../search/search'
    });
  },
  //进入肤质测试页面
  goTest:function(){
    wx.navigateTo({
      url: '../test/test'
    });
  },
  //进入肤质测试历史页面
  goTestResult:function(){
    wx.navigateTo({
      url: '../testr/testr'
    });
  },
  //底部功能区 //Index 0,1,2
  topIndex: function (e) {
    var Index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../rank/rank?index=' + Index
    });
  },
  //底部功能区 //Index 3,4,5
  bottomIndex:function(e){
    var Index=e.currentTarget.dataset.index;
    /*wx.navigateTo({
      url: '../rank/rank?index='+Index
    });
    */
  }
})
