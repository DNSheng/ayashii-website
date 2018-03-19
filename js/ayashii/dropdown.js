$(document).ready(function() {

	/* Toggles status of class "content", changes chevron icon for each state */
	$(".chevron").click(function() {
		$chevron = $(this);
		$content = $chevron.next();
		var chev_down = $chevron.find('i').hasClass("fa-chevron-down");
		var speed = 300;

		if (chev_down) {
			$chevron.find('i').removeClass("fa-chevron-down").addClass("fa-chevron-up");
		} else {
			$chevron.find('i').removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}
		$content.slideToggle(speed);

		/* This is here because the parent container "content" must be toggled first */
		/* Otherwise, preview list doesn't load or loads too early */
		/* Loading the previews is jerky on the intial try*/
		$(".content").slick({
			dots: true,
			infinite: false,
			slidesToShow: 5,
			swipeToSlide: true
		});

	});

});
