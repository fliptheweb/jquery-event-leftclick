(function($) {
	$.event.special.leftclick = {
		//bind leftclick event
		setup: function(eventData, namespaces) {
			var $this = $(this);

			$(this).bind("click.leftclick", function(){

			});

			return ;
		},
		//unbind leftclick event
		teardown: function(namespaces) {
			var $this = $(this);

			$this.unbind("click.leftclick");
			
			return;
		}
	};

})(jQuery);