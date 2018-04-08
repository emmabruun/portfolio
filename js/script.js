
/**
* @description Initialize read more toggle
*/

function initialize() {
	$('.read-more-toggle').bind('click', function() {
		var $this = $(this);
		var $parent = $this.parent();

		if ($this.attr('data-collapsed') === 'true') {
			$parent.addClass('project-expanded');
			$parent.find('.read-more-fader').hide();

			$this.addClass('read-more')
				 .removeClass('read-less')
				 .html('Read Less')
				 .attr('data-collapsed', 'false');
		}
		else {
			$parent.find('.read-more-fader').show();
			$parent.removeClass('project-expanded');
			
			$this.addClass('read-less')
				 .removeClass('read-more')
				 .html('Read More')
				 .attr('data-collapsed', 'true');
		}
	});

}