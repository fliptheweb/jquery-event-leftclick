/**
 * @author fliptheweb
 * Based on http://brandonaaron.net/blog/2010/02/25/special-events-the-changes-in-1-4-2
 */
(function($) {
	$.event.special.leftclick = {
		add: function(handleObj ) {
			// support fot jQuery 1.4/1.4.1 and 1.4.2+
			if ( $.isFunction( handleObj ) ) {
				$.event.special.leftclick.handler = handleObj;
			}
			else {
				$.event.special.leftclick.handler = handleObj.handler;
			}
		},

		setup: function(data, namespaces) {
			$(this).bind("mousedown.leftclick", function(e){
				if((!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1)) {
					$.event.special.leftclick.handler();
				}
			});
		},

		remove: function(namespaces) {
			
		},

		teardown: function(namespaces) {
			$this.unbind("mousedown.leftclick");
		},

		handler: function() {}
	};
})(jQuery);