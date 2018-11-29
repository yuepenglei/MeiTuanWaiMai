
var filterList = [{
  "type":1,
  "name": "美团专送",
  "checked": false,
  "hot": true
},
{
  "type": 1,
  "name": "到店自取",
  "checked": false,
  "hot": false
},
{
  "type": 1,
  "name": "点评高分",
  "checked": false,
  "hot": true
},
{
  "type": 1,
  "name": "品牌商家",
  "checked": false,
  "hot": false
},
{
  "type": 1,
  "name": "免费配送",
  "checked": false,
  "hot": false
},
{
  "type": 1,
  "name": "新商家",
  "checked": false,
  "hot": true
},
{
  "type": 1,
  "name": "0元起送",
  "checked": false,
  "hot": false
},
{
  "type": 1,
  "name": "跨天预定",
  "checked": false,
  "hot": false
},
{
  "type": 1,
  "name": "货到付款",
  "checked": false,
  "hot": false
},
{
  "type": 2,
  "name": "20元以下",
  "checked": false,
  "hot": false
},
{
  "type": 2,
  "name": "20-40元",
  "checked": false,
  "hot": false
},
{
  "type": 2,
  "name": "40元以上",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "满减优惠",
  "checked": false,
  "hot": true
},
{
  "type": 3,
  "name": "进店领卷",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "折扣商品",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "门店新客立减",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "首单立减",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "满赠活动",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "满返代金卷",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "减配送费",
  "checked": false,
  "hot": false
},
{
  "type": 3,
  "name": "买赠活动",
  "checked": false,
  "hot": false
}
];
var swiperList = {
  pageone: [{
    name: "美食",
    src: "/pages/images/swiper/1.png"
  }, {
    name: "超市",
    src: "/pages/images/swiper/2.png"
  }, {
    name: "鲜果购",
    src: "/pages/images/swiper/3.png"
  }, {
    name: "下午茶",
    src: "/pages/images/swiper/4.png"
  }, {
    name: "正餐优选",
    src: "/pages/images/swiper/5.png"
  }, {
    name: "美团专送",
    src: "/pages/images/swiper/6.png"
  }, {
    name: "夏日畅饮",
    src: "/pages/images/swiper/7.png"
  }, {
    name: "精选小吃",
    src: "/pages/images/swiper/8.png"
  }],
  pagetwo: [{
    name: "加速传送",
    src: "/pages/images/swiper/9.png"
  }, {
    name: "趣味饮料",
    src: "/pages/images/swiper/10.png"
  }, {
    name: "吉他",
    src: "/pages/images/swiper/11.png"
  }, {
    name: "植物蛋",
    src: "/pages/images/swiper/12.png"
  }, {
    name: "生鲜粮油",
    src: "/pages/images/swiper/13.png"
  }, {
    name: "电影",
    src: "/pages/images/swiper/14.png"
  }, {
    name: "钢笔",
    src: "/pages/images/swiper/15.png"
  }, {
    name: "空间",
    src: "/pages/images/swiper/16.png"
  }]
};

//商家
var restaurant = [
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳一号",
    "scoreStr": "★ ★ ★ ★",
    "score": 4,
    "num": 400,
    "time": 35,
    "distance": "3.1km",
    "allowMoney": 15,
    "sendMoney": 5,
    "avgMoney": 20
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳二号",
    "scoreStr": "★ ★ ★",
    "score": 3,
    "num": 345,
    "time": 20,
    "distance": "1.1km",
    "allowMoney": 24,
    "sendMoney": 3.5,
    "avgMoney": 25
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳三号",
    "scoreStr": "★ ",
    "score": 1,
    "num": 444,
    "time": 25,
    "distance": "2.1km",
    "allowMoney": 0,
    "sendMoney": 2,
    "avgMoney": 22
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳四号",
    "scoreStr": "★ ★ ★ ★",
    "score": 4,
    "num": 890,
    "time": 30,
    "distance": "3.7km",
    "allowMoney": 10,
    "sendMoney": 9,
    "avgMoney": 34
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳五号",
    "scoreStr": "★ ",
    "score": 1,
    "num": 319,
    "time": 22,
    "distance": "1.1km",
    "allowMoney": 25,
    "sendMoney": 2,
    "avgMoney": 40
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳六号",
    "scoreStr": "★ ★ ★ ★",
    "score": 4,
    "num": 339,
    "time": 15,
    "distance": "7.1km",
    "allowMoney": 12,
    "sendMoney": 10,
    "avgMoney": 44
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳七号",
    "scoreStr": "★ ★ ★ ",
    "score": 3,
    "num": 980,
    "time": 35,
    "distance": "2.7km",
    "allowMoney": 35,
    "sendMoney": 2,
    "avgMoney": 50
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳八号",
    "scoreStr": "★ ★ ★ ★",
    "score": 4,
    "num": 777,
    "time": 95,
    "distance": "4.6km",
    "allowMoney": 35,
    "sendMoney": 20,
    "avgMoney": 50
  },
  {
    "src": "/pages/images/restant.jpg",
    "name": "麦当劳九号",
    "scoreStr": "★ ★ ★ ★",
    "score": 4,
    "num": 39,
    "time": 35,
    "distance": "3.1km",
    "allowMoney": 35,
    "sendMoney": 5,
    "avgMoney": 5
  }
];

//菜单
var menuList = [
  {
    "typeName": "热销",
    "menuList": [
      {
        "name": "热销1",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍1",
        "num": 22,
        "selectNum":0,
        "start": 3,
        "price": 15
      },
      {
        "name": "热销2",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍2",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "热销3",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍3",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "热销4",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍4",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      }
    ]
  },
  {
    "typeName": "折扣",
    "menuList": [
      {
        "name": "折扣1",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍1",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "折扣2",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍2",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "折扣3",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍3",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "折扣4",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍4",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      }
    ]
  },
  {
    "typeName": "主食",
    "menuList": [
      {
        "name": "主食1",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍1",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "主食2",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍2",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "主食3",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍3",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      },
      {
        "name": "主食4",
        "src": "/pages/images/food.jpg",
        "content": "详细介绍4",
        "num": 22,
        "selectNum": 0,
        "start": 3,
        "price": 15
      }
    ]
  }
];
var evaluateList = [
  {
    "name": "A5nnie",
    "dateTime":"2018-10-08",
    "start":"★ ★ ★ ★  48分钟送达",
    "content": "农历腊月十九这天下午，张三从红十字医院回到家，看见客厅的茶几上放着一盒录象带，录像带侧面的兰色标签上",
    "src": "/pages/images/timg.jpg",
  },
  {
    "name": "吃猫的🐟",
    "dateTime": "2018-10-07",
    "start": "★ ★ ★ ★  68分钟送达",
    "content": "就是家人的喜怒哀乐，他一次小小的感冒都会惊动全家。在他生病的最初岁月里，家人给了他足够的温暖和关怀。但他",
    "src": "/pages/images/timg.jpg",
  },
  {
    "name": "老板再来一碗",
    "dateTime": "2018-10-06",
    "start": "★ ★ ★ ★  20分钟送达",
    "content": "的病一发不可收，他患上了十一种慢性病，他因此失去了工作，地位和收入，无边无际的医药费使家庭陷入贫困的边缘",
    "src": "/pages/images/timg.jpg",
  },
  {
    "name": "呵呵呵呵呵",
    "dateTime": "2018-10-05",
    "start": "★ ★ ★ ★  35分钟送达",
    "content": "张三无法让家人像当初那样爱他，他知道他连累了他们。也许正如这部片子讲述的那样，只有失去张三，他们才会发现",
    "src": "/pages/images/timg.jpg",
  },
]
module.exports = {
  filterList: filterList,
  swiperList: swiperList,
  restaurant: restaurant,
  menuList: menuList,
  evaluateList: evaluateList
}