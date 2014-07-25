$(document).ready(function() {	
	
	$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	
	$(window).resize(function() {
		$("#main-l").css("min-height",$(window).height() - $("header").height() - $("footer").height());
	})

	$(".plogin-form").validate({
		rules: {
		    domain: {
		      required: true
		    },
		    email: {
		      required: true,
		      email: true
		    },
		    password: {
		    	required: true
		    }
		  },
		 messages: {
		    domain: {
		    	required: "<span class='tooltip'>this field required</span>",
		    },
		    email: {
		      required: "<span class='tooltip'>this field required</span>",
		      email: "<span class='tooltip'>enter valid email</span>"
		    },
		    password: {
		    	required: "<span class='tooltip'>this field required</span>",
		    }
		  },
		success: function(label) {
			if($(label).parent().find('input').hasClass('valid'))
		    	label.addClass("valid").text("");
		  },
		  onkeyup: function(event, validator) {
		    $(".form-group label.error").mouseenter(function() {
				$(this).find("span").fadeIn().css("display","inline");
			});
			$(".form-group label.error").mouseleave(function() {
				$(this).find("span").fadeOut();
			});
		  },
		  invalidHandler: function(event, validator) {
		    $(".form-group label.error").mouseenter(function() {
				$(this).find("span").fadeIn().css("display","inline");
			});
			$(".form-group label.error").mouseleave(function() {
				$(this).find("span").fadeOut();
			});
		  }
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
		    	required: true,
		    	number: true
		    },
		    orgname: {
		    	required: true
		    },
		    subdomain: {
		    	required: true
		    }
		  },
		 messages: {
		    name: {
		    	required: "<span class='tooltip'>this field required</span>",
		    },
		    email: {
		      required: "<span class='tooltip'>this field required</span>",
		      email: "<span class='tooltip'>enter valid email</span>"
		    },
		    password: {
		    	required: "<span class='tooltip'>this field required</span>",
		    },
		    number: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	number: "<span class='tooltip'>only numbers allowed</span>",
		    },
		    orgname: {
		    	required: "<span class='tooltip'>this field required</span>",
		    },
		    subdomain: {
		    	required: "<span class='tooltip'>this field required</span>",
		    }
		  },
		  success: function(label) {
			if($(label).parent().find('input').hasClass('valid'))
		    	label.addClass("valid").text("");
		  },
		  onkeyup: function(event, validator) {
		    $(".form-group label.error").mouseenter(function() {
				$(this).find("span").fadeIn().css("display","inline");
			});
			$(".form-group label.error").mouseleave(function() {
				$(this).find("span").fadeOut();
			});
		  },
		  invalidHandler: function(event, validator) {
		    $(".form-group label.error").mouseenter(function() {
				$(this).find("span").fadeIn().css("display","inline");
			});
			$(".form-group label.error").mouseleave(function() {
				$(this).find("span").fadeOut();
			});
		  }
	});

	$(".reg-form input").keyup(function() {
		if($(this).valid()) {
			$(this).parent().find('label').addClass("valid").text("");			
		}
	});

	$(".plogin-form input").keyup(function() {
		if($(this).valid()) {
			$(this).parent().find('label').addClass("valid").text("");			
		}
	});

	$('#subdomain').focus(function() {
		$(this).parent().find("span").show();
	});

	$('#subdomain').focusout(function() {
		$(this).parent().find("span").hide();
	});

	$('#login-btn').click(function() {
		$(".form-group label.error").mouseenter(function() {
			$(this).find("span").fadeIn().css("display","inline");
		});
		$(".form-group label.error").mouseleave(function() {
			$(this).find("span").fadeOut();
		});
	});
	
});