$(document).ready(function() {	
	
	getMinHeight = function() {
		var main_min_height = $(window).height() - $("header").height() - $("footer").height();
		if($(".plogin-form") !== undefined) {
			if(main_min_height < $(".plogin-form").height()+50)
				return $(".plogin-form").height()+50;
			else
				return main_min_height;
		}
		else {
			if(main_min_height < $(".reg-form").height()+50)
				return $(".reg-form").height()+50;
			else
				return main_min_height;
		}
	}
	
	
	$("#main-l").css("min-height",getMinHeight());
	
	$(window).resize(function() {
		$("#main-l").css("min-height",getMinHeight());
	})

	$.validator.addMethod("noSpecialChars", function(value, element) {
	      return this.optional(element) || /^[+a-zA-Z0-9._-]+$/i.test(value);
	  }, "<span class='tooltip' style='width:250px;'>Field must contain only letters, numbers, or underscore.</span>");

	$.validator.addMethod("noSpecialCharsE", function(value, element) {
	      return this.optional(element) || /^[a-z0-9\_@]+$/i.test(value);
	  }, "<span class='tooltip' style='width:250px;'>Email must contain only letters, numbers, or underscore.</span>");

	$.validator.addMethod("regexp", function (value, element) {		
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	    return this.optional(element) || pattern.test(value);
	}, "<span class='tooltip'>enter valid email</span>");

	$.validator.addMethod("mobile", function (value, element) {		
		var pattern = new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
	    return this.optional(element) || pattern.test(value);
	}, "<span class='tooltip'>enter valid phone number</span>");

	$(".plogin-form").validate({
		rules: {
		    domain: {
		      required: true,
		      minlength:2,		      
		      noSpecialChars: true
		    },
		    email: {
		      required: true,
		      regexp: true
		    },
		    password: {
		    	required: true,
		    	minlength:6,
		    	maxlength:15
		    }
		  },
		 messages: {
		    domain: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	minlength: "<span class='tooltip'>Please enter at least 2 characters.</span>",
		    },
		    email: {
		      required: "<span class='tooltip'>this field required</span>",
		      regexp: "<span class='tooltip'>enter valid email</span>"
		    },
		    password: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	minlength: "<span class='tooltip'>Please enter at least 6 characters.</span>",
		    	maxlength: "<span class='tooltip'>limit is 15 characters.</span>",
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
		      required: true,
		      minlength:2,		
		    },
		    email: {
		      required: true,
		      regexp: true
		    },
		    password: {
		    	required: true,
		    	minlength:6,
		    	maxlength:15
		    },
		    number: {
		    	required: true,
		    	mobile: true
		    },
		    orgname: {
		    	required: true,
		      	minlength:2,		
		    },
		    subdomain: {
		    	required: true,
		    	minlength:2,		
		    },
		    rem: {
		    	required: true
		    }
		  },
		 messages: {
		    name: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	minlength: "<span class='tooltip'>Please enter at least 2 characters.</span>",
		    },
		    email: {
		      required: "<span class='tooltip'>this field required</span>",
		      regexp: "<span class='tooltip'>enter valid email</span>"
		    },
		    password: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	minlength: "<span class='tooltip'>Please enter at least 6 characters.</span>",
		    	maxlength: "<span class='tooltip'>limit is 15 characters.</span>",
		    },
		    number: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	mobile: "<span class='tooltip'>Enter vaild phone number</span>",
		    },
		    orgname: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	minlength: "<span class='tooltip'>Please enter at least 2 characters.</span>",
		    },
		    subdomain: {
		    	required: "<span class='tooltip'>this field required</span>",
		    	minlength: "<span class='tooltip'>Please enter at least 2 characters.</span>",
		    },
		    rem: {
		    	required: "<span>You must agree to EvaluateLive terms to use</span>",
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

	/*$('#subdomain').focus(function() {
		$(this).parent().find("span").show();
	});

	$('#subdomain').focusout(function() {
		$(this).parent().find("span").hide();
	});*/

	$('.login-btn').click(function() {
		$(".form-group label.error").mouseenter(function() {
			$(this).find("span").fadeIn().css("display","inline");
		});
		$(".form-group label.error").mouseleave(function() {
			$(this).find("span").fadeOut();
		});
	});
	
});