$(document).ready(function() {

var current_view = $("#view1");
current_view.fadeIn(300);
var player = videojs('main_vid');
//MAP
var vjs_ass = player.ass({
	'src': 'media/subs.ass',
	label: "English",
	fontMap: myMap,
	videoWidth: 1024,
	videoHeight: 576
});

	//Here

});
