$(function() {
	var $body, $title1, $title20, $title21, $title22;
	$body = $('body')
	$title1 = $('h1 span');
	$title20 = $('h2#first');
	$title21 = $('h2#second');
	$title22 = $('h2#third')
	$title1.on('click', function(e) {
		e.preventDefault();
		$title20.css("display", "block");
		$title1.css("display", "none");
	});
	
	$title20.on('click', function(e) {
		e.preventDefault();
		$title21.css("display", "block");
	});

	$title21.on('click', function(e) {
		e.preventDefault();
		$title22.css("display", "block");
	});

	$title22.on('click', function(e) {
		e.preventDefault();
		$body.append('<p id="cake">🎂</p>')
	});
});
