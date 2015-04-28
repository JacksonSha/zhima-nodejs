(function (){
	window.ZM = window.ZM || {};
	
	ZM.allowLog = false;
	ZM.allowStorage = false;
	ZM.rootUrl = window.rootUrl;
	
	ZM.log = function(info){
		if(ZM.allowLog && console && console.log){
			console.log(info);
		}
	};
	
	var storage = window.localStorage;
	
	ZM.init = function(){
		var dt = storage.getItem("ZM.Timestamp");
		var tag = storage.getItem("ZM.Tags");
		var now = new Date();
		if(tag==null){
			ZM.reload();
		}else if(dt==null || (now.getTime()-parseInt(dt))>(12*60*60*1000)){
			ZM.reload();
		}
	};
	
	ZM.reload = function(){
		/*
		var rootUrl = ZM.rootUrl;
		var now = new Date();
		storage.clear();
		storage.setItem("ZM.Timestamp", now.getTime());
		$.post(rootUrl+"/r/tags",null,function(resp){
			PC.log(resp);
			storage.setItem("ZM.Tags",resp);
		});
		*/
	};
	
	//ZM.init();
	
})();
