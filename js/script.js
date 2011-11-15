$(document).ready(function() {
	var $events = $(".b-events");

	$(".b-targets__item1").bind("leftclick", function(e){
		$("</p>")
			.appendTo($events)
			.text(getHandlerInfo(e));
	});

	$(".b-targets__item2").bind("leftclick", {"somevar": "somedata" }, function(e){
		$("</p>")
			.appendTo($events)
			.text(getHandlerInfo(e));
	});

	$(".b-targets__item3").bind("leftclick", function(e){
		$("</p>")
			.appendTo($events)
			.text(getHandlerInfo(e));
		$(e.target).unbind("leftclick");
	});

	function getHandlerInfo(e){
		return e.type + " on " + e.target.className + (typeof JSON != undefined && e.data ? " with data " + JSON.stringify(e.data) : "");
	}
});
