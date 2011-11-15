$(document).ready(function() {
	$(".target").bind("leftclick", function(){
		console.log("!");
		$(this).unbind("leftclick");
	});
});
