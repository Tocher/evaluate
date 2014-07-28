$(document).ready(function() {	

	var block_list_height = 150;
	var header_height = 353;
//////	adapting column width 	//////
	var rc_height = $(window).height() - $("header").height() - $("footer").height() - $("#right_column").css("border-top-width").substr(0,$("#right_column").css("border-top-width").length-2);
	$("#right_column").css("min-height",rc_height);
	$("#left_column").css("min-height",$(window).height() - $("header").height() - $("footer").height() - 2);

	$("#right_column").css("width",$("#main").width()-270-20);

	if(rc_height-header_height > 150) {
		block_list_height = rc_height-header_height;
		$(".block .list").css("height",rc_height-header_height);
	}
	
	$(window).resize(function() {
		rc_height = $(window).height() - $("header").height() - $("footer").height() - $("#right_column").css("border-top-width").substr(0,$("#right_column").css("border-top-width").length-2);
		$("#right_column").css("min-height",rc_height);
		$("#left_column").css("min-height",$(window).height() - $("header").height() - $("footer").height() - 2);

		$("#right_column").css("width",$("#main").width()-270-20);

		if(rc_height-header_height > 150) {
			block_list_height = rc_height-header_height;
			$(".block .list").css("height",rc_height-header_height);
		}
	})
 
//////	Scroll in blocks 	//////
	$("#course-scroll, #subject-scroll, #section-scroll").css("height",block_list_height-15);
	$( "#course-scroll" ).slider({
      orientation: "vertical",
      min: 0,
      max: 100,
      value: 100,
      slide: function( event, ui ) {
      	if($("#course-ul").height() - block_list_height > 0) {
      		var max_margin = $("#course-ul").height() - block_list_height;
      		$( "#course-ul" ).css("margin-top", (-max_margin*(100-ui.value)/100) + "px" );
      	}
      }
    });

    $( "#subject-scroll" ).slider({
      orientation: "vertical",
      min: 0,
      max: 100,
      value: 100,
      slide: function( event, ui ) {
      	if($("#subject-ul").height() - block_list_height > 0) {
      		var max_margin = $("#subject-ul").height() - block_list_height;
      		$( "#subject-ul" ).css("margin-top", (-max_margin*(100-ui.value)/100) + "px" );
      	}
      }
    });

    $( "#section-scroll" ).slider({
      orientation: "vertical",
      min: 0,
      max: 100,
      value: 100,
      slide: function( event, ui ) {
      	if($("#section-ul").height() - block_list_height > 0) {
      		var max_margin = $("#section-ul").height() - block_list_height;
      		console.log(max_margin);
      		$( "#section-ul" ).css("margin-top", (-max_margin*(100-ui.value)/100) + "px" );
      	}
      }
    });

////// Muosewhell listner on blocks 	//////
    $("#course-ul").bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    var scroll = "#course-scroll";
	    if(delta>0)
	    {
	    	if($(scroll).slider( "value") < 100)
	    	{
	    		if($(scroll).slider( "value")+10 > 100)
		    		$(scroll).slider( "value", 100 );
		    	else
		    		$(scroll).slider( "value", $(scroll).slider( "value")+10 );
		    }
	    }
	    else if(delta<0)
	    {
	    	if($(scroll).slider( "value") > 0)
	    	{
	    		if($(scroll).slider( "value")-10 < 0)
		    		$(scroll).slider( "value", 0 );
		    	else
		    		$(scroll).slider( "value", $(scroll).slider( "value")-10 );
		    }
	    }

	    if($("#course-ul").height() - block_list_height > 0) {
      		var max_margin = $("#course-ul").height() - block_list_height;
      		$( "#course-ul" ).css("margin-top", (-max_margin*(100-$( "#course-scroll" ).slider( "value"))/100) + "px" );
      	}
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    	e.preventDefault();
	});

    $("#subject-ul").bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    var scroll = "#subject-scroll";
	    if(delta>0)
	    {
	    	if($(scroll).slider( "value") < 100)
	    	{
	    		if($(scroll).slider( "value")+10 > 100)
		    		$(scroll).slider( "value", 100 );
		    	else
		    		$(scroll).slider( "value", $(scroll).slider( "value")+10 );
		    }
	    }
	    else if(delta<0)
	    {
	    	if($(scroll).slider( "value") > 0)
	    	{
	    		if($(scroll).slider( "value")-10 < 0)
		    		$(scroll).slider( "value", 0 );
		    	else
		    		$(scroll).slider( "value", $(scroll).slider( "value")-10 );
		    }
	    }

	    if($("#subject-ul").height() - block_list_height > 0) {
      		var max_margin = $("#subject-ul").height() - block_list_height;
      		$( "#subject-ul" ).css("margin-top", (-max_margin*(100-$( "#subject-scroll" ).slider( "value"))/100) + "px" );
      	}
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    	e.preventDefault();
	});

	$("#section-ul").bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    var scroll = "#section-scroll";
	    if(delta>0)
	    {
	    	if($(scroll).slider( "value") < 100)
	    	{
	    		if($(scroll).slider( "value")+10 > 100)
		    		$(scroll).slider( "value", 100 );
		    	else
		    		$(scroll).slider( "value", $(scroll).slider( "value")+10 );
		    }
	    }
	    else if(delta<0)
	    {
	    	if($(scroll).slider( "value") > 0)
	    	{
	    		if($(scroll).slider( "value")-10 < 0)
		    		$(scroll).slider( "value", 0 );
		    	else
		    		$(scroll).slider( "value", $(scroll).slider( "value")-10 );
		    }
	    }

	    if($("#section-ul").height() - block_list_height > 0) {
      		var max_margin = $("#section-ul").height() - block_list_height;
      		$( "#section-ul" ).css("margin-top", (-max_margin*(100-$( "#section-scroll" ).slider( "value"))/100) + "px" );
      	}
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    	e.preventDefault();
	});

//////	Tabs	//////
    $("#left_column table").find("tr").first().addClass("selected");

    $("#left_column table tr").click(function() {
    	var tab = "#tab"+$("#left_column table tr.selected").data("tab");
    	$(tab).hide();
    	$("#left_column table tr.selected").removeClass("selected");

    	$(this).addClass("selected");
    	var tab = "#tab"+$(this).data("tab");
    	$(tab).show();
    });

//////	Selections	//////
    var selected_course,selected_subject,selected_section;
    $(".list ul li").click(function() {
    	var unselect = false;
    	if($(this).attr("class") === "selected")
    		unselect = true;
    	var prev = $(this).parent().find(".selected");
    	var p = $(prev).prev();    	    		
    	if(p.length>0)
    	{
    		$(p[0]).css("border-bottom","1px solid #dadada");
    	}
    	if(prev.length>0) {
    		$(prev).removeClass("selected");
    		if($(this).parent().attr('id') === "section-ul") {
    			$(prev).find('i').attr('class','fa fa-circle-thin');
    		}
    		else {
	    		$(prev).find('i').remove();
	    	}
    	}

    	if(unselect)
    	{
    		$(this).parent().parent().parent().find('.block_current > span').click();    		
    		return;
    	}

    	$(this).addClass("selected");
    	$(this).parent().parent().parent().find('.remove').removeClass('disabled');
    	if($(this).parent().attr('id') === "course-ul") {
	    	$(this).find('span').html($(this).find('span').html()+'<i class="fa fa-check-circle"></i>');    
    		selected_course = $(this);	
    		$(".block-subject").fadeIn();
    		$(".block-subject").css('display','inline-block'); 
	    }
	    else if($(this).parent().attr('id') === "subject-ul") {
	    	$(this).find('span').html($(this).find('span').html()+'<i class="fa fa-check-circle"></i>');    
	    	selected_subject = $(this);	
	    	$(".block-section").fadeIn();
	    	$(".block-section").css('display','inline-block');
	    }
	    else if($(this).parent().attr('id') === "section-ul") {
	    	$(this).find('i').attr('class','fa fa-check-circle');
	    	selected_section = $(this);	
	    }
	    $(this).parent().parent().parent().find('button').removeClass('disabled');
	    var text = $(this).html();
		var r = /<(\w+)[^>]*>.*<\/\1>/gi;
		text = text.replace(r,"");
	    $(this).parent().parent().parent().find('.course').val(text);
	    text = $(this).find('span').html();
	    if(text !== undefined)
		{
			text = text.replace(r,"");
			$(this).parent().parent().parent().find('.state span').html(text);
		}
	    
    	prev = $(this).prev();
    	if(prev.length>0)
    	{
    		$(prev[0]).css("border-bottom","none");
    	}
			$(this).parent().parent().parent().find('.block_current > span').data('action','unselect');
	    	$(this).parent().parent().parent().find('.block_current > span').html('-');
			$(this).parent().parent().parent().find('.block_current > span').css("line-height", "25px");
    });
	
////// Sub menu (active/inactive)	//////
	$('.sub li').click(function() {
		var mark = $(this).data('mark');
		var block = $(this).parent().parent().parent().parent().parent().find('.remove').data('ul');

		switch(block) {
    		case 'course-ul':
		    	if(selected_course !== undefined)
		    	{
		    		if(mark === 0)
		    		{
		    			$(selected_course).find('span').html('Inactive<i class="fa fa-check-circle"></i>');
		    			$(this).parent().parent().parent().find('span').html("Inactive");
		    		}
		    		if(mark === 1)
		    		{
		    			$(selected_course).find('span').html('Active<i class="fa fa-check-circle"></i>');
		    			$(this).parent().parent().parent().find('span').html("Active");
		    		}
		    	}
    		break;
    		case 'subject-ul':
		    	if(selected_subject !== undefined)
		    	{
		    		if(mark === 0)
		    		{
		    			$(selected_subject).find('span').html('Inactive<i class="fa fa-check-circle"></i>');
		    			$(this).parent().parent().parent().find('span').html("Inactive");
		    		}
		    		if(mark === 1)
		    		{
		    			$(selected_subject).find('span').html('Active<i class="fa fa-check-circle"></i>');
		    			$(this).parent().parent().parent().find('span').html("Active");
		    		}
		    	}
    		break;
    		case 'section-ul':
		    	if(selected_section !== undefined)
		    	{
		    		
		    	}
    		break;
    	}
	});
	$('.state').click(function() {
		$(this).find('.sub').show();	
		$(this).mouseleave(function() {
			$(this).find('.sub').hide();
		});
	});

//////	Delete Course/Subject/Section 	//////
    $('.remove').click(function() {
    	var block = $(this).data('ul');
    	switch(block) {
    		case 'course-ul':
		    	if(selected_course !== undefined)
		    	{
		    		var p = $(selected_course).prev();
			    	if(p.length>0)
			    	{
			    		$(p[0]).css("border-bottom","1px solid #dadada");
			    	}
		    		$(selected_course).remove();
		    		selected_course = undefined;
		    		$(".block-subject").fadeOut();
		    		$(".block-section").fadeOut();
		    	}
    		break;
    		case 'subject-ul':
		    	if(selected_subject !== undefined)
		    	{
		    		var p = $(selected_subject).prev();
			    	if(p.length>0)
			    	{
			    		$(p[0]).css("border-bottom","1px solid #dadada");
			    	}
		    		$(selected_subject).remove();
		    		selected_subject = undefined;
		    		$(".block-section").fadeOut();
		    	}
    		break;
    		case 'section-ul':
		    	if(selected_section !== undefined)
		    	{
		    		var p = $(selected_section).prev();
			    	if(p.length>0)
			    	{
			    		$(p[0]).css("border-bottom","1px solid #dadada");
			    	}
		    		$(selected_section).remove();
		    		selected_section = undefined;
		    	}
    		break;
    	}
    	$(this).addClass('disabled');
    });

//////	Plus/Minus button (Adding or unselect course and etc.) ///////
	$('.block_current > span').click(function() {
		if($(this).data('action') === 'unselect')
		{
			$(this).parent().find(".course").val("");
			var block = $(this).parent().parent().find('.remove').data('ul');
			$(this).parent().parent().find('.remove').addClass('disabled');
			switch(block) {
	    		case 'course-ul':
			    	if(selected_course !== undefined)
			    	{			    		
			    		selected_course = undefined;
			    		$(".block-subject").fadeOut();
		    			$(".block-section").fadeOut();
			    	}
	    		break;
	    		case 'subject-ul':
			    	if(selected_subject !== undefined)
			    	{			    		
			    		selected_subject = undefined;
		    			$(".block-section").fadeOut();
			    	}
	    		break;
	    		case 'section-ul':
			    	if(selected_section !== undefined)
			    	{			    		
			    		selected_section = undefined;
			    	}
	    		break;
	    	}
	    	var prev = $(this).parent().parent().find(".list .selected");
	    	var p = $(prev).prev();
	    	if(p.length>0)
	    	{
	    		$(p[0]).css("border-bottom","1px solid #dadada");
	    	}    	

	    	if(prev.length>0) {
	    		$(prev).removeClass("selected");
	    		if(block === "section-ul") {
	    			$(prev).find('i').attr('class','fa fa-circle-thin');
	    		}
	    		else {
		    		$(prev).find('i').remove();
		    	}
	    	}

	    	$(this).parent().find('.course').html('');
	    	$(this).data('action','add');
	    	$(this).html('+');
	    	$(this).css("line-height", "32px");
			$(this).parent().parent().find('button').addClass("disabled");
		}
		else if($(this).data('action') === 'add')
		{
			//var new_li = prompt('Name for new element',"Design");
			$(this).parent().find(".course").focus();
		}
	});

//////	"Save" or Enter button	//////
	$(".course").keypress(function(event){	 
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			$(this).parent().parent().find("button").click();
		}
	 
	});

	$(".block button").click(function() {
		if($(this).hasClass("disabled"))
			return;
		var block = $(this).parent().find('.remove').data('ul');
		var new_li = $(this).parent().find(".course").val();
		var msg = "";
		if(new_li !== undefined)
			if($(this).parent().find(".block_current > span").data("action") === "unselect")
			{
				switch(block) {
		    		case 'course-ul':
				    	if(selected_course !== undefined)
				    	{			    		
				    		var state = $(selected_course).find('span').html();
				    		if(state === undefined)
				    			state = "Inactive";
				    		$(selected_course).html(new_li + "<span>" + state + "</span>");
				    		msg = "Course edited";
				    	}
		    		break;
		    		case 'subject-ul':
				    	if(selected_subject !== undefined)
				    	{
				    		var state = $(selected_subject).find('span').html();
				    		if(state === undefined)
				    			state = "Inactive";
				    		$(selected_subject).html(new_li + "<span>" + state + "</span>");
				    		msg = "Subject edited";
				    	}
		    		break;
		    		case 'section-ul':
				    	if(selected_section !== undefined)
				    	{	
				    		$(selected_section).html('<i class="fa fa-circle-thin"></i>'+new_li);
				    		msg = "Section edited";
				    	}
		    		break;
			    }
			    $(this).parent().find(".block_current > span").click();
			}
			else
			{
				switch(block) {
		    		case 'course-ul':
						$("#"+block).append("<li>"+new_li+"<span>Inactive</span></li>");
		    			msg = "New course added";
		    		break;
		    		case 'subject-ul':
						$("#"+block).append("<li>"+new_li+"<span>Inactive</span></li>");
		    			msg = "New subject added";
		    		break;
		    		case 'section-ul':
						$("#"+block).append("<li><i class='fa fa-circle-thin'></i>"+new_li+"</li>");
		    			msg = "New section added";
		    		break;			
		    	}	
			}
		else
			return;

		$(this).parent().find(".course").val("");
		$(this).parent().find(".course").focus();

		// adding msg
		$(".column_head").html($(".column_head").html() + '<div class="column_state"><i class="fa fa-check-circle"></i>' + msg + '</div>');
		setTimeout(function() {
			$(".column_state").fadeOut("slow",function() {
			    $(this).remove();
			});
		},2000);

		// add click event on new element
		$(".list ul li").click(function() {
	    	var prev = $(this).parent().find(".selected");
	    	var p = $(prev).prev();
	    	if(p.length>0)
	    	{
	    		$(p[0]).css("border-bottom","1px solid #dadada");
	    	}
	    	if(prev.length>0) {
	    		$(prev).removeClass("selected");
	    		if($(this).parent().attr('id') === "section-ul") {
	    			$(prev).find('i').attr('class','fa fa-circle-thin');
	    		}
	    		else {
		    		$(prev).find('i').remove();
		    	}
	    	}

	    	$(this).addClass("selected");
	    	$(this).parent().parent().parent().find('.remove').removeClass('disabled');
	    	if($(this).parent().attr('id') === "course-ul") {
		    	$(this).find('span').html($(this).find('span').html()+'<i class="fa fa-check-circle"></i>');    
	    		selected_course = $(this);	
	    		$(".block-subject").fadeIn();
	    		$(".block-subject").css('display','inline-block'); 
		    }
		    else if($(this).parent().attr('id') === "subject-ul") {
		    	$(this).find('span').html($(this).find('span').html()+'<i class="fa fa-check-circle"></i>');    
		    	selected_subject = $(this);	
		    	$(".block-section").fadeIn();
		    	$(".block-section").css('display','inline-block');
		    }
		    else if($(this).parent().attr('id') === "section-ul") {
		    	$(this).find('i').attr('class','fa fa-check-circle');
		    	selected_section = $(this);	
		    }
		    $(this).parent().parent().parent().find('button').removeClass('disabled');
		    var text = $(this).html();
			var r = /<(\w+)[^>]*>.*<\/\1>/gi;
			text = text.replace(r,"");
		    $(this).parent().parent().parent().find('.course').val(text);
		    text = $(this).find('span').html();
			if(text !== undefined)
			{
				text = text.replace(r,"");
				$(this).parent().parent().parent().find('.state span').html(text);
			}
		    
	    	prev = $(this).prev();
	    	if(prev.length>0)
	    	{
	    		$(prev[0]).css("border-bottom","none");
	    	}


				$(this).parent().parent().parent().find('.block_current > span').data('action','unselect');
		    	$(this).parent().parent().parent().find('.block_current > span').html('-');
				$(this).parent().parent().parent().find('.block_current > span').css("line-height", "25px");
	    });
	});

//////	Typing in add cource/subject/section 	//////
	$(".course").keyup(function() {
		if($(this).val().length > 0)
			$(this).parent().parent().find('button').removeClass("disabled");
		else
			$(this).parent().parent().find('button').addClass("disabled");
	});


//////	Log off tooltip		//////
	$(".user i").mouseenter(function() {
		$(".user span.tooltip").animate({"opacity":"1"});
	});
	$(".user i").mouseleave(function() {
		$(".user span.tooltip").animate({"opacity":"0"});
	});

//////	Search	///////
	$(".search input").keyup(function() {
		var block = $(this).parent().parent().find('.remove').data('ul');
		console.log(block);
		if($(this).val().length > 0)
		{
			switch(block) {
	    		case 'course-ul':		
	    			$('.block-course .list li:contains("' + $(this).val() + '")').show();    	    
	    			$('.block-course .list li:not(:contains("' + $(this).val() + '"))').hide();    	    			
	    		break;
	    		case 'subject-ul':
	    			$('.block-subject .list li:contains("' + $(this).val() + '")').show();    	    
	    			$('.block-subject .list li:not(:contains("' + $(this).val() + '"))').hide();    
	    		break;
	    		case 'section-ul':
	    			$('.block-section .list li:contains("' + $(this).val() + '")').show();    	    
	    			$('.block-section .list li:not(:contains("' + $(this).val() + '"))').hide();    
	    		break;			
	    	}	
		}
		else
		{
			switch(block) {
	    		case 'course-ul':
	    			$('.block-course .list li').show();	    			
	    		break;
	    		case 'subject-ul':
	    			$('.block-subject .list li').show();	    
	    		break;
	    		case 'section-ul':
	    			$('.block-section .list li').show();	    
	    		break;			
	    	}	
		}
	});




///////////////////// Exam JS ///////////////////////////
	$("#switch_to_create_exam").click(function() {
		$("#view_exam_tab").hide();
		$("#create_exam_tab").fadeIn();
	});

	$("#switch_to_view_exam").click(function() {
		$("#create_exam_tab").hide();
		$("#view_exam_tab").fadeIn();
	});

var selected_exams = [];
	// Remove row from exam view
	$("#view_exam td:last-child i").click(function() {
		$(this).parent().parent().fadeOut(function(e) {
			e.remove();
		});
	});
	$("#view_exam tbody tr").click(function() {
		if($.inArray(this,selected_exams) === -1) {
			$(this).find("td").first().find("i").removeClass("fa-circle-thin").addClass("fa-check-circle");
			selected_exams.push(this);
		}
		else {			
			$(this).find("td").first().find("i").removeClass("fa-check-circle").addClass("fa-circle-thin");
			selected_exams.pop(this);
		}
	});

	//Remove Selected Exams
	$("#delete_selected_exams").click(function() {
		if(selected_exams.length == 0)
			return;
		for (var i = selected_exams.length - 1; i >= 0; i--) {
			$(selected_exams[i]).fadeOut(function(i) {
				console.log(i);
				$(selected_exams[i]).remove();
			});
		};
		selected_exams = [];
	});

	$(".exam-settings-change").click(function() {
		if($(this).find('i').hasClass('fa-check-circle'))
		{
			$(this).find('i').removeClass('fa-check-circle').addClass('fa-circle-thin');
		}
		else
			$(this).find('i').removeClass('fa-circle-thin').addClass('fa-check-circle');
	});

	//Init datepicker
	$("#exam_start_date").datepicker();
	$("#exam_end_date").datepicker();

///////////////////// Credits JS ///////////////////////////
	$("#switch_to_buy_credits").click(function() {
		$(".purch-history-block").hide();
		$(".buy-cred-block").fadeIn();
		$(this).addClass("selected");
		$("#switch_to_purchase_history").removeClass("selected");


	});

	$("#switch_to_purchase_history").click(function() {		
		$(".buy-cred-block").hide();
		$(".purch-history-block").fadeIn();
		$(this).addClass("selected");		
		$("#switch_to_buy_credits").removeClass("selected");

	});



////////////////////////// myprofile js //////////////////////



/*	$("#switch_to_create_exam").click(function() {
		$("#view_exam_tab").hide();
		$("#create_exam_tab").fadeIn();
	});

	$("#switch_to_view_exam").click(function() {
		$("#create_exam_tab").hide();
		$("#view_exam_tab").fadeIn();
	});  */

var selected_exams = [];
	// Remove row from exam view
	$("#manage_staff td:last-child i").click(function() {
		$(this).parent().parent().fadeOut(function(e) {
			e.remove();
		});
	});
	$("#manage_staff tbody tr").click(function() {
		if($.inArray(this,selected_exams) === -1) {
			$(this).find("td").first().find("i").removeClass("fa-circle-thin").addClass("fa-check-circle");
			selected_exams.push(this);
		}
		else {			
			$(this).find("td").first().find("i").removeClass("fa-check-circle").addClass("fa-circle-thin");
			selected_exams.pop(this);
		}
	});
/*
	//Remove Selected Exams
	$("#delete_selected_exams").click(function() {
		if(selected_exams.length == 0)
			return;
		for (var i = selected_exams.length - 1; i >= 0; i--) {
			$(selected_exams[i]).fadeOut(function(i) {
				console.log(i);
				$(selected_exams[i]).remove();
			});
		};
		selected_exams = [];
	});

	$(".exam-settings-change").click(function() {
		if($(this).find('i').hasClass('fa-check-circle'))
		{
			$(this).find('i').removeClass('fa-check-circle').addClass('fa-circle-thin');
		}
		else
			$(this).find('i').removeClass('fa-circle-thin').addClass('fa-check-circle');
	});  */
});