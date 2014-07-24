$(document).ready(function() {	
	
	$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	
	$(window).resize(function() {
		$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	})

	$(".plogin-form").validate({
		rules: {
		    Domain: {
		      required: true
		    },
		    email: {
		      required: true,
		      email: true
		    }
		  },
		 messages: {
		    name: "",
		    email: {
		      required: "",
		      email: ""
		    }
		  },
		success: function(label) {
			if($(label).parent().find('input').hasClass('valid'))
		    	label.addClass("valid").text("");
		  },
	});

	$(".reg-form").validate({
		rules: {
		    name: {
		      required: true
		    },
		    email: {
		      required: true,
		      email: true
		    },
		    password: {
		    	required: true
		    },
		    number: {
		    	required: true
		    },
		    orgname: {
		    	required: true
		    },
		    subdomain: {
		    	required: true
		    }
		  },
		 messages: {
		    name: "",
		    email: {
		      required: "",
		      email: ""
		    }
		  },
		success: function(label) {
			if($(label).parent().find('input').hasClass('valid'))
		    	label.addClass("valid").text("");
		  },
	});

	
});