$(document).ready(function() {
	$(".target").bind("leftclick", function(e){
		console.log("!");
		$(e.target).unbind("leftclick");
	});

});
