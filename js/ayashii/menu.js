$(document).ready(function() {

	var current_menu, current_arrow, current_preview;
	/* same_open:	0 - Menu is closed
					1 - Menu is open	*/
	var same_open = 0;
	console.log("Current menu is " + current_menu);

	$('body').click(function(e) {
		var action = e.target;
		var myClass = action.classList.item(0);
		console.log(myClass);
		if (myClass == "poster-img") {
			// The poster img was clicked, get id
			var poster_id = action.id;
			// Change the string to be a menu id and arrow id
			var menu_id = poster_id.replace('p','m');
			var arrow_id = poster_id.replace('p','a');
			var preview_id = poster_id.replace('p','g');
			console.log(poster_id + " becomes: " + menu_id + ", " + arrow_id);
		
			// Build jQuery elements using the id variables
			var this_menu = $('#' + menu_id);
			var this_arrow = $('#' + arrow_id);
			var this_preview = $('#' + preview_id);

			// Build paths for the jpg and gif
			var preview_path = this_preview.attr('src');
			preview_gif = preview_path.replace(/img.*/i, 'menu.gif');
			preview_img = preview_path.replace(/menu.*/i, 'img1_3.jpg');
			console.log(preview_gif);

			// Hiding and showing menus
			if (current_menu == undefined) {
				console.log("New");
				// Change preview to menu.gif
				this_preview.attr("src", preview_gif);
				// Slide down menus
				this_arrow.slideDown(100);
				this_menu.delay(100).slideDown(300);
				current_menu = this_menu;
				current_arrow = this_arrow;
				current_preview = this_preview;
				same_open = 1;
			} else if (current_menu.attr('id') == this_menu.attr('id')) {
				console.log("Same");
				console.log("same_open: " + same_open);
				if (same_open == 0) {
					// Change preview to menu gif
					this_preview.attr("src", preview_gif);
					/* Opening menu, show arrow first*/
					this_arrow.slideDown(100);
					this_menu.delay(100).slideDown(300);
					same_open = 1;
					/* Total time = 400ms*/
				} else {
					/* Closing menu, close menu first*/
					this_menu.slideUp(400);
					this_arrow.delay(300).slideUp(100);
					same_open = 0;
					/* Total time = 400ms*/
					// Change preview to img after sliding up
					this_preview.attr("src", preview_img);
				}
				console.log("same_open now: " + same_open);
			} else if (current_menu.attr('id') != this_menu.attr('id')) {
				console.log("Diff");
				if (same_open == 1) {
					/* Close one and open one, need longer delay */
					current_menu.slideUp(300);
					current_arrow.delay(300).slideUp(100);
					var current_preview_img = current_preview.attr('src').replace(/menu.*/i, 'img1_3.jpg');
					console.log("Current preview: " + current_preview_img);
					current_preview.attr("src", current_preview_img);

					this_arrow.delay(300).slideDown(100);
					this_menu.delay(400).slideDown(300);
					this_preview.attr("src", preview_gif);
					/* Total time = 700ms*/
				} else {
					/* Only opening one, no delay needed */
					this_arrow.slideDown(100);
					this_menu.delay(100).slideDown(300);
					this_preview.attr("src", preview_gif);
				}
				current_menu = this_menu;
				current_arrow = this_arrow;
				current_preview = this_preview;
				same_open = 1;
			}
		}
	});
});
