/**
 * Plugin add new left click event to jQuery
 * @author fliptheweb
 * @version 1.0.0
 * @link 
 */
(function($) {
	$.event.special.leftclick = {
		setup: function(data, namespaces) {
			$(this).bind("mousedown", $.event.special.leftclick.handler);
		},

		teardown: function(namespaces) {
			$(this).unbind("mousedown", $.event.special.leftclick.handler);
		},

		handler: function(e) {
			if(e.which == 1) {
				e.type = "leftclick";
				$.event.handle.apply(this, arguments);
			}
		}
	};
})(jQuery);