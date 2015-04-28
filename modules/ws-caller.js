var http = require('http');

var caller = function(url, method, data, callback){
	var opt = {
	 //host:'这里放代理服务器的ip或者域名',
	 //port:'这里放代理服务器的端口号',
	 method: method||'GET',//这里是发送的方法
	 path: url,     //这里是访问的路径
	 headers:{
	  //这里放期望发送出去的请求头
	 }
	}
	//以下是接受数据的代码
	var body = '';
	var req = http.request(opt, callback).on('error', function(e) {
	  console.log("Got error: " + e.message);
	})
	req.end();
}

module.exports = caller;
