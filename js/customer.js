var $ = {
	get : function(url,handler){
		var xhr = new XMLHttpRequest();
		xhr.open("get",url);
		xhr.responseType = "json";
		xhr.send();
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
		}
	},
	 post : function(url,data,handler,type){
   	//1. 实例化xhr对象
		var xhr = new XMLHttpRequest();
		// 2. 设置请求行
		xhr.open("post",url);
		// 3. 设置请求头（Content-Type）
		xhr.responseType = "json";
		if(!type){
			type = "application/x-www-form-urlencoded"
		}
		xhr.setRequestHeader("Content-Type",type);
		// 4. 设置请求体，并且发送
		xhr.send(data);
		// 5.监听响应
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
        }
    }
}