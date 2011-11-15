$(document).ready(function() {
	var $events = $(".b-events");

	$(".b-targets__item1").bind("leftclick", function(e){
		$("</p>")
			.appendTo($events)
			.text("Click to "+e.target.className);
	});

	$(".b-targets__item2").bind("leftclick", {somevar: "somedata" }, function(e){
		$("</p>")
			.appendTo($events)
			.text("Click to " + e.target.className + " with data " + e.data);
	});

	$(".b-targets__item3").bind("leftclick", function(e){
		$("</p>")
			.appendTo($events)
			.text("Click to 123"+e.target.className);
	});
});
