/**
 * @author fliptheweb
 * Based on http://brandonaaron.net/blog/2010/02/25/special-events-the-changes-in-1-4-2
 */
(function($) {
	$.event.special.leftclick = {
		add: function( handler, data, namespaces ) {

		},

		setup: function( data, namespaces ) {
			$(this).bind("click.leftclick", function(){
				console.log("click to div");
			});
		},

		remove: function( namespaces ) {
		},

		teardown: function( namespaces ) {
			$this.unbind("click.leftclick");
		},

		handler: function( event ) {

		}
	};
})(jQuery);