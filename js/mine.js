var souhu=angular.module('sh',['ngAnimate','ngTouch','ngRoute'])
souhu.controller('indexCtrl',['$scope',function($scope){

  if(localStorage.shx){
    $scope.isFirstOpen=false  //如果里边有东西
  }else{
    $scope.isFirstOpen=true
  }
  $scope.enter=function(){
    localStorage.shx=true;
    $scope.isFirstOpen=false
  }
    $scope.biaoti = [
          {name:'首页',href:'#/shouye'},
          {name:'订阅',href:'#/dingyue'},
          {name:'太原',href:'#/taiyuan'},
          {name:'娱乐',href:'#/yule'},
          {name:'生活',href:'#/shenghuo'},
          {name:'科技',href:'#/keji'},
          {name:'财经',href:'#/keji'},
          {name:'军事',href:'#/keji'}

    ]

    $scope.drop=[
      {
        name:'我的频道/拖动排序',
        jutipindao:[
          {xinxi:'首页',href:'#/guonei'},
          {xinxi:'订阅',href:'#/guowai'},
          {xinxi:'太原',href:'#/ziliao'},
          {xinxi:'娱乐',href:'#/yule'},
          {xinxi:'生活',href:'#/keji'},
          {xinxi:'科技',href:'#/keji'},
          {xinxi:'财经',href:'#/keji'},
          {xinxi:'军事',href:'#/keji'},
          {xinxi:'社会',href:'#/keji'},
          {xinxi:'体育',href:'#/guonei'},
          {xinxi:'国际',href:'#/guowai'},
          {xinxi:'微头条',href:'#/ziliao'},
          {xinxi:'星座',href:'#/yule'},
          {xinxi:'文化',href:'#/keji'},
          {xinxi:'房产',href:'#/keji'},
          {xinxi:'互动直播',href:'#/keji'},
          {xinxi:'汽车',href:'#/keji'},
          {xinxi:'历史',href:'#/keji'},
          {xinxi:'搞笑',href:'#/guonei'},
          {xinxi:'健康',href:'#/guowai'},
          {xinxi:'时尚',href:'#/ziliao'},
          {xinxi:'情感',href:'#/yule'},
          {xinxi:'教育',href:'#/keji'},
          {xinxi:'美食',href:'#/keji'}
        ]
      },
      {
        name:'推荐',
        jutipindao:[
          {xinxi:'微博',href:'#/guonei'},
          {xinxi:'包贝尔',href:'#/guowai'},
          {xinxi:'王凯',href:'#/ziliao'},
          {xinxi:'阿里巴巴',href:'#/yule'},
          {xinxi:'王菲',href:'#/keji'},
          {xinxi:'火影忍者',href:'#/keji'},
          {xinxi:'刘诗诗',href:'#/keji'},
          {xinxi:'蒋欣',href:'#/keji'},
        ]
      },
       {
        name:'精选频道',
        jutipindao:[
          {xinxi:'股票',href:'#/guonei'},
          {xinxi:'民调',href:'#/guowai'},
          {xinxi:'警法',href:'#/ziliao'},
          {xinxi:'冰雪',href:'#/yule'},
          {xinxi:'美容',href:'#/keji'},
          {xinxi:'视觉',href:'#/keji'},
          {xinxi:'奇趣',href:'#/keji'},
          {xinxi:'育儿',href:'#/keji'},

        ]
      },
      {
        name:'科技数码',
        jutipindao:[
          {xinxi:'手机',href:'#/guonei'},
          {xinxi:'互联网',href:'#/guowai'},
          {xinxi:'VR',href:'#/ziliao'},
          {xinxi:'前沿技术',href:'#/yule'},
          {xinxi:'智能硬件',href:'#/keji'},
          {xinxi:'数码',href:'#/keji'},
          {xinxi:'游戏',href:'#/keji'},

        ]
      }
    ]

}])

souhu.directive('shTitle',[function(){
  return {
    replace:true,
    restrict:'E',
    templateUrl:'views/sh-title.html',
    link:function($scope,elem){
       $('.header').on('click','li',function(){
        $('.header li').find('a').removeClass('active');
        $(this).find('a').toggleClass('active');
      })
          $('.drop').addClass('ng-hide');
          $('.zhankai').on('click',function(){
              $('.drop').toggleClass('ng-hide');
              return false;
          })
          $('.zhankai').on('click',function(){
              $('.drop').addClass('ng-hide');
          })
        }
  }
}]).directive('shTabBar',[function(){
  return {
    replace:true,
    restrict:'E',
    templateUrl:'views/sh-tab-bar.html'
  }
}])
// .directive('shTabLun',[function(){
//   return {
//     replace:true,
//     restrict:'E',
//     templateUrl:'views/sh-tab-lun.html',
//     link:function($scope,el){
    
      
//     }
//   }
// }])




souhu.controller('shouyeCtrl',['$scope',function($scope){
  $scope.news=[
    {src:'img/lunbo/a.jpg',neirong:'媒体:"习近平"示范领导干部如何过个"轻松节"',pinglun:'34',type:'专题'},
    {src:'img/lunbo/b.jpg',neirong:'媒体:"奥巴马宣布支持希拉里竞选总统"',pinglun:'134',type:'...'},
    {src:'img/lunbo/c.jpg',neirong:'媒体:"华北黄淮等有七级雷暴大风或冰雹"',pinglun:'3454',type:'...'},
    {src:'img/lunbo/d.jpg',neirong:'你好奇不？学了三年的东西为什么一高考完就忘"',pinglun:'834',type:'...'},
    {src:'img/lunbo/a.jpg',neirong:'媒体:"习近平"示范领导干部如何过个"轻松节"',pinglun:'34',type:'专题'},
    {src:'img/lunbo/b.jpg',neirong:'媒体:"奥巴马宣布支持希拉里竞选总统"',pinglun:'134',type:'...'},
  ]
    
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
      })
}])

souhu.controller('dingyueCtrl',['$scope',function($scope){
  $scope.toutiao=[
  {src:'img/dingyue/1.jpg',name:'大头条',jieshao:'第五季明星名人100公里',time:'2小时前'},
  {src:'img/dingyue/2.jpg',name:'搜狐新闻小秘书',jieshao:'昨晚中了4888超大红包的你，快来。',time:'2016/3/29'}

  ]
  $scope.remen=[
  {src:'img/dingyue/3.jpg',name:'热点网',jieshao:'1,。4万人订阅',dingyue:'订阅'},
  {src:'img/dingyue/4.jpg',name:'八卦频道',jieshao:'3625人订阅',dingyue:'订阅'},
  {src:'img/dingyue/5.jpg',name:'热点网',jieshao:'1,。4万人订阅',dingyue:'订阅'},
  {src:'img/dingyue/6.jpg',name:'八卦频道',jieshao:'3625人订阅',dingyue:'订阅'},
  {src:'img/dingyue/7.jpg',name:'热点网',jieshao:'1,。4万人订阅',dingyue:'订阅'},
  {src:'img/dingyue/8.jpg',name:'八卦频道',jieshao:'3625人订阅',dingyue:'订阅'},

  ]

}])

souhu.controller('taiyuanCtrl',['$scope',function($scope){
   $scope.taiyuan=[
  {src:'img/taiyuan/1.jpg',pingjia:'23',name:'太原近日开通太原--昆明--长春航线',wangzhan:'山西新闻网',more:'...'},
  {src:'img/taiyuan/2.jpg',pingjia:'67',name:'只有真正的太原吃货才能找到的美食私房菜',wangzhan:'吃在山西',more:'...'},
  {src:'img/taiyuan/3.jpg',pingjia:'356',name:'太原吃宵夜的地方还有哪些？分享几家店给大家',wangzhan:'龙城美食',more:'...'},
  {src:'img/taiyuan/4.jpg',pingjia:'78',name:'太原失眠什么中药治疗好，折五中可少不了',wangzhan:'患者之家',more:'...'},
  {src:'img/taiyuan/5.jpg',pingjia:'466',name:'880出行端午节出行不免费！而且这几个収费站不能走',wangzhan:'山西交通广播',more:'...'},
  {src:'img/taiyuan/6.jpg',pingjia:'363',name:'太原高考生注这些大学都是野鸡大学',wangzhan:'太原说',more:'...'},
  {src:'img/taiyuan/7.jpg',pingjia:'33',name:'太原治污，从纯电动出租车起步',wangzhan:'山西新闻网',more:'...'},
  

  ]
}])

souhu.controller('yuleCtrl',['$scope',function($scope){
  $scope.yule=[
  {src:'img/yule/1.jpg'}
  ]

  $scope.huo=[
  {src:'img/yule/2.jpg',name:'孙俪二摘白玉兰视后 胡歌获奖感言 霍建华躺枪',news:'搜狐娱乐',type:'...'},
  {src:'img/yule/3.jpg',name:'最佳女配 刘涛 我明年一定会努力',news:'搜狐娱乐',type:'...'},
  {src:'img/yule/4.jpg',name:'学会理财 让你告别拿死工资',news:'搜狐娱乐',type:'...'},
  {src:'img/yule/5.jpg',name:'学会理财 让你告别拿死工资',news:'搜狐娱乐',type:'...'},



  ]
  $scope.tuiguang=[
  {name:'吸睛指数100%！柳岩穿低胸裙大秀事业线',src:'img/yule/a.jpg',src1:'img/yule/b.jpg',src2:'img/yule/c.jpg',ping:'5',zhuan:'5',xin:'搜狐娱乐',type:'...'},
  {name:'范冰冰首度公开恋情',src:'img/yule/d.jpg',src1:'img/yule/e.jpg',src2:'img/yule/f.jpg',ping:'45',zhuan:'75',xin:'搜狐娱乐',type:'...'},
  ]
}])


souhu.controller('shenghuoCtrl',['$scope',function($scope){

     $scope.shenghuo=[
  {src:'img/shenghuo/1.jpg',pingjia:'23',name:'假睫毛配戴教程--大合集 教你学会美美哒',message:'6',wangzhan:'造型师陈雪',more:'...'},
  {src:'img/shenghuo/2.jpg',pingjia:'233',name:'孩子走路八字脚 一定要趁早预防',wangzhan:'鸽子医生谈育儿',more:'...'},
  {src:'img/shenghuo/3.jpg',pingjia:'24',name:'清华学霸父亲再谈孩子爱玩电脑游戏怎么办',wangzhan:'孤烟直',more:'...'},
  {src:'img/shenghuo/4.jpg',pingjia:'17',name:'不背单词 不记语法 零基础轻松学英语',wangzhan:'',more:'推广'},
  {src:'img/shenghuo/5.jpg',pingjia:'89',name:'880出行端午节出行不免费！而且这几个収费站不能走',wangzhan:'凯叔讲故事',more:'...'},
  {src:'img/shenghuo/6.jpg',pingjia:'23',name:'太原高考生注这些大学都是野鸡大学',wangzhan:'太原说',more:'...'},
  {src:'img/shenghuo/7.jpg',pingjia:'233',name:'太原治污，从纯电动出租车起步',wangzhan:'琳琳的厨房',more:'...'},
  

  ]
}])

souhu.controller('shipinCtrl',['$scope',function($scope){
  $scope.shipin=[
    {type:'搞笑',
    gaoxiao:[
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/1.jpg',from:'极品世界',liang:'46'},
    {neirong:'朋友圈谣言的正确解读',src:'img/bofang/2.jpg',from:'暴走官方',liang:'467'},
    {neirong:'单身狗强撩妹子亲不停',src:'img/bofang/3.jpg',from:'袁创意',liang:'446'},
    {neirong:'如何摸美女屁股不被揍',src:'img/bofang/4.jpg',from:'酋长别闹',liang:'7676'},
    {neirong:'端午节最耀眼的内衣秀',src:'img/bofang/5.jpg',from:'QM工作室',liang:'436'},
    {neirong:'无法接受的童星激情戏',src:'img/bofang/6.jpg',from:'畅所欲言秀',liang:'546'},

    ]
  },
   {type:'搞笑',
    gaoxiao:[
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/7.jpg',from:'极品世界',liang:'46'},
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/2.jpg',from:'极品世界',liang:'46'},
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/3.jpg',from:'极品世界',liang:'46'},
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/4.jpg',from:'极品世界',liang:'46'},
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/5.jpg',from:'极品世界',liang:'46'},
    {neirong:'仲基与巨基你喜欢哪个',src:'img/bofang/6.jpg',from:'极品世界',liang:'46'},

    ]
  }
  ]
}])

souhu.controller('woCtrl',['$scope',function($scope){
  
}])

var chatlist = [
{
  id:1001,
  image:'./img/touxiang/7.jpg',
  name:'zhangsan',
  message:'在吗',
  xiangqing:[
    {xinxi:'习近平:科技工作者要把论文写在祖国大地上',pinglun:8,src:'img/xiangqing/1.jpg'},
    {xinxi:'习近平:全面建设小康社会重要的是"全面"',pinglun:8,src:'img/xiangqing/2.jpg'},
    {xinxi:'媒体:习近平示范领导干部如何过个轻松节',pinglun:8,src:'img/xiangqing/3.jpg'},
    {xinxi:'这件事习近平三点名；六发问 湖南反省三年仍不到位',pinglun:8,src:'img/xiangqing/4.jpg'},
    {xinxi:'习近平:科技工作者要把论文写在祖国大地上',pinglun:8,src:'img/xiangqing/6.jpg'},

  ]
}
]


souhu.controller('xiangqingCtrl',['$scope','$routeParams',function($scope,$routeParams){
  var id = $routeParams.id;
  $scope.ll = chatlist [id].xiangqing;
}])

souhu.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'shouyeCtrl',
    templateUrl:'views/shouye.html'
  })
  .when('/shouye',{
    controller:'shouyeCtrl',
    templateUrl:'views/shouye.html'
  })
  .when('/shouye/:id',{
        controller:'xiangqingCtrl',
        templateUrl:'views/xiangqing.html'
      })
  .when('/dingyue',{
    controller:'dingyueCtrl',
    templateUrl:'views/dingyue.html'
  })
  .when('/taiyuan',{
    controller:'taiyuanCtrl',
    templateUrl:'views/taiyuan.html'
  })
  .when('/yule',{
    controller:'yuleCtrl',
    templateUrl:'views/yule.html'
  })
  .when('/shenghuo',{
    controller:'shenghuoCtrl',
    templateUrl:'views/shenghuo.html'
  })
  .when('/shipin',{
    controller:'shipinCtrl',
    templateUrl:'views/shipin.html'
  })
  .when('/wo',{
    controller:'woCtrl',
    templateUrl:'views/wo.html'
  })
  // $locationProvider.html5Mode(true);
}]);

