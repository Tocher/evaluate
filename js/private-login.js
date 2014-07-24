$(document).ready(function() {	
	
	$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	
	$(window).resize(function() {
		$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	})

	$("#login-form").validate({
		rules: {
		    Domain: {
		      required: true
		    },
		    email: {
		      required: true,
		      email: true
		    }
		  }
	});

	
});