$(document).ready(function() {	
	
	$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	
	$(window).resize(function() {
		$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	})
	
});