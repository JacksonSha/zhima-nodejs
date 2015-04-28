(function (){
	window.ZM = window.ZM || {};
	
	ZM.setup = function(){
		_.templateSettings = {
			interpolate : /\{\{(.+?)\}\}/g
		};
		
		$(document).ajaxSend(function(evt, request, settings) {
			//console.log("loading...");
			var load = '<div class="loading" style="opacity: 0.8; display: none;"></div>';
			var lay = $("body .loading");
			if(lay.length==0){
				$("body").append(load);
			}
			$("body .loading").css("display","block");
		}).ajaxError(function(event, jqxhr, settings, error) {
			//console.log(settings.errorTitle, jqxhr.responseText);
		}).ajaxSuccess(function(evt, request, settings) {
			//console.log(settings.successMessage);
		}).ajaxComplete(function() {
			//console.log("complete");
			$("body .loading").css("display","none");
		});
		$.ajaxSetup({
			cache : false,
			statusCode : {
				404 : function() {
					//console.log(404);
				},
				400 : function() {
					//console.log(400);
				},
				500 : function() {
					//console.log(500);
				}
			}
		});
	};
	
	ZM.setup();
})();
