var request = require('request');
// 导入request模块
request('https://www.baidu.com', function (error, response, body) {
    console.log('error:', error); // 如果出错输出错误信息
    console.log('statusCode:', response && response.statusCode); // 收到响应输出状态码
    console.log('body:', body); // 输出百度首页的HTML内容
});
