/**
 * @author fliptheweb
 */
(function($) {
	$.event.special.leftclick = {
		add: function(handleObj) {
			// support fot jQuery 1.4/1.4.1 and 1.4.2+ (https://gist.github.com/298508)
			if ($.isFunction( handleObj)) {
				$.event.special.leftclick.handler = handleObj;
			}
			else {
				$.event.special.leftclick.handler = handleObj.handler;
			}
		},

		setup: function(data, namespaces) {
			$(this).bind("mousedown.leftclick", function(e){
				if((!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1)) {
					e.type = "leftclick";
					e.data = data;
					$.event.special.leftclick.handler(e);
				}
			});
		},

		teardown: function(namespaces) {
			$(this).unbind("mousedown.leftclick");
		},

		handler: function(e) {}
	};
})(jQuery);