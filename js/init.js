$(document).ready(function() {	

	var block_list_height = 150;
	var header_height = 313;
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
	if($.cookie('tab') !== undefined) {
		var tab = "#tab"+$("#left_column table tr.selected").data("tab");
    	$(tab).hide();
    	$("#left_column table tr.selected").removeClass("selected");
    	
    	var tab = $.cookie('tab');
    	var cur_tab = $.cookie('tab_table');
    	var l_tabs = $("#left_column table tr");
    	for (var i = l_tabs.length - 1; i >= 0; i--) {
    		if($(l_tabs[i]).data("tab") == cur_tab)
    		{
    			$(l_tabs[i]).addClass("selected");
    		}
    	};
    	$(tab).show();
	}

    $("#left_column table tr").click(function() {
    	var tab = "#tab"+$("#left_column table tr.selected").data("tab");
    	$(tab).hide();
    	$("#left_column table tr.selected").removeClass("selected");

    	$(this).addClass("selected");
    	var tab = "#tab"+$(this).data("tab");
    	$(tab).show();
    	$.cookie('tab_table', $(this).data("tab"));
    	$.cookie('tab', tab);
    });

//////	Selections	//////
    var selected_course,selected_subject,selected_section;
    $(".list ul li").click(function() {
    	course_manager_li($(this));
    });

    function course_manager_li(el) {
    	var unselect = false;
    	if($(el).attr("class") === "selected")
    		unselect = true;
    	var prev = $(el).parent().find(".selected");
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
    		$(el).parent().parent().parent().find('.block_current > span').click();    		
    		return;
    	}

    	$(el).addClass("selected");
    	$(el).parent().parent().parent().find('.remove').removeClass('disabled');
    	if($(el).parent().attr('id') === "course-ul") {
	    	$(el).find('span').html($(el).find('span').html()+'<i class="fa fa-check-circle"></i>');    
    		selected_course = $(el);	
    		$(".block-subject").fadeIn();
    		$(".block-subject").css('display','inline-block'); 
	    }
	    else if($(el).parent().attr('id') === "subject-ul") {
	    	$(el).find('span').html($(el).find('span').html()+'<i class="fa fa-check-circle"></i>');    
	    	selected_subject = $(el);	
	    	$(".block-section").fadeIn();
	    	$(".block-section").css('display','inline-block');
	    }
	    else if($(el).parent().attr('id') === "section-ul") {
	    	$(el).find('i').attr('class','fa fa-check-circle');
	    	selected_section = $(el);	
	    }

	    //Re init
	    $(".list ul li").unbind('click');
	    $(".list ul li").click(function() {
	    	course_manager_li($(this));
	    });

	    $(el).parent().parent().parent().find('button').removeClass('disabled');
	    var text = $(el).html();
		var r = /<(\w+)[^>]*>.*<\/\1>/gi;
		text = text.replace(r,"");
	    $(el).parent().parent().parent().find('.course').val(text);
	    text = $(el).find('span').html();
	    if(text !== undefined)
		{
			text = text.replace(r,"");
			$(el).parent().parent().parent().find('.state span').html(text);
		}
	    
    	prev = $(el).prev();
    	if(prev.length>0)
    	{
    		$(prev[0]).css("border-bottom","none");
    	}
			$(el).parent().parent().parent().find('.block_current > span').data('action','unselect');
	    	$(el).parent().parent().parent().find('.block_current > span').html('-');
			$(el).parent().parent().parent().find('.block_current > span').css("line-height", "25px");
    
    }
	
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
    	$(this).parent().parent().parent().find('.sub').fadeOut();
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
		$("#tab2 .column_head").html($("#tab2 .column_head").html() + '<div class="column_state"><i class="fa fa-check-circle"></i>' + msg + '</div>');
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

	//Create New
	$("#examCreate-btnCreate").click(function() {

		var count = $("#view_exam tbody tr").size()+1;

		var r = /<(\w+)[^>]*>.*<\/\1>/gi;
		var c_name = $("#examCreate-txtCourseName").html().replace(r,"");
		var c_subj = $("#examCreate-txtSubject").html().replace(r,"");
		var c_qp = $("#examCreate-txtQuestionPaper").html().replace(r,"");
		var c_batch = $("#examCreate-txtBatchName").html().replace(r,"");		
		//$("#examCreate-txtExamSummary").val();

		$("#view_exam tbody").append('<tr>'+
										'<td><i class="fa fa-circle-thin"></i></td>'+
										'<td>'+count+'</td>'+
										'<td>'+$("#examCreate-txtExamName").val()+'</td>'+
										'<td>'+c_qp+'</td>'+
										'<td>'+c_batch+'</td>'+
										'<td>40</td>'+
										'<td>60 mins</td>'+
										'<td>5</td>'+
										'<td>5th Jul, 10:00</td>'+
										'<td>10th Jul, 10:00</td>'+
										'<td>80/100</td>'+
										'<td><span>Edit</span> <i class="fa fa-pencil"></i></td>'+
									'</tr>');

		$("#create_exam_tab").hide();
		$("#view_exam_tab").fadeIn();		
	});

var selected_exams = [];
	// Remove row from exam view
	$("#view_exam tbody td:last-child").click(function() {
		//Edit TODO
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

	$("#view_exam_select_all").click(function() {
		var all_exams = $("#view_exam tbody tr");
		if($(this).hasClass("fa-circle-thin")) {
			for (var i = all_exams.length - 1; i >= 0; i--) {
				$(all_exams[i]).find("td").first().find("i").removeClass('fa-circle-thin').addClass("fa-check-circle");
				selected_exams.push($(all_exams[i]));
			};
			$(this).removeClass("fa-circle-thin").addClass("fa-check-circle");
		}
		else {
			for (var i = all_exams.length - 1; i >= 0; i--) {
				$(all_exams[i]).find("td").first().find("i").removeClass("fa-check-circle").addClass("fa-circle-thin");
				selected_exams.pop($(all_exams[i]));
			};
			$(this).removeClass("fa-check-circle").addClass("fa-circle-thin");
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

	$("#ui-datepicker-div").wrap('<div class="ll-skin-latoja"></div>');
	

	$("#view_exam tbody tr:last-child").click(function() {
		$("#view_exam_tab").hide();
		$("#create_exam_tab").fadeIn();

		var data = $(this).parent();
	});

	//Select Course
	$(".selection_course_sub li").click(function() {		
		$(this).parent().parent().find('span').html($(this).html() + '<i class="fa fa-caret-down"></i>');
		$(".selection_course_sub").hide();
	});

	$(".selection_subject_sub li").click(function() {		
		$(this).parent().parent().find('span').html($(this).html() + '<i class="fa fa-caret-down"></i>');
		$(".selection_subject_sub").hide();
	});	

	$(".select li").click(function() {
		$(this).parent().parent().find('ul').hide();
		$(this).parent().parent().find('span').html($(this).html() + '<i class="fa fa-caret-down"></i>');
	});

	$(".grade_input").keyup(function(e) {
		if(e.keyCode==8 || e.keyCode==9 || e.keyCode==13 || e.keyCode==46)
			return;
		if(e.keyCode >= 48 && e.keyCode <= 57) {
			if($(this).val().length > 3)
				$(this).val($(this).val().substr(0,3));
		}
		else
			$(this).val($(this).val().substr(0,$(this).val().length-1));
	});

	$(".set_def_passing").click(function() {
		$(this).parent().find('input').val(40);
	});
	$(".set_def_mpq").click(function() {
		$(this).parent().find('input').val(1);
	});
	$(".set_def_nm").click(function() {
		$(this).parent().find('input').val(0.25);
	});

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

	$(".credits-amount").keyup(function() {
		$(".credits-price").html("Rs. " + $(this).val());
	});

///////////////////// myprofile JS ///////////////////////////

	$("#switch_to_manage_staff").click(function() {
		$("#my_manage_profile").hide();
		$("#my_manage_staff").fadeIn();
		$(this).addClass("selected");
		$("#switch_to_manage_profile").removeClass("selected");


	});

	$("#switch_to_manage_profile").click(function() {		
		$("#my_manage_staff").hide();
		$("#my_manage_profile").fadeIn();
		$(this).addClass("selected");		
		$("#switch_to_manage_staff").removeClass("selected");

	});

	// Manage Staff Edit Button
	$("#manage_staff td:last-child").click(function() {
		var el = $(this).parent().parent();

		$("#my_manage_staff").hide();
		$("#my_manage_profile").fadeIn();
		$(this).addClass("selected");		
		$("#switch_to_manage_staff").removeClass("selected");

		var vals = el.find('td');
		for (var i = 0; i < vals.length; i++) {
			if(i==2)
			{
				var name = $(vals[i]).html().split(" ");
				$("#admDetails-txtFirstName").val(name[0]);
				$("#admDetails-txtLastName").val(name[1]);				
			}
			if(i==3)			
				$("#admDetails-txtEmail").val($(vals[i]).html());
			if(i==4)
				$("#admDetails-txtMobile").val($(vals[i]).html());
		};		

	});

	// Manage Staff Create Button
	$("#createNewStaff-btnCreate").click(function() {

		var fname = $("#createNewStaff-txtFirstName").val();
		var lname = $("#createNewStaff-txtLastName").val();
		var email = $("#createNewStaff-txtEmail").val();
		var mobile = $("#createNewStaff-txtMobile").val();
		var id = $("#manage_staff tbody tr").size()+1;	
		
		$("#manage_staff tbody").append('<tr>'+
			'<td><i class="fa fa-circle-thin"></i></td>'+
			'<td>'+id+'</td>'+
			'<td>'+fname+' '+lname+'</td>'+
			'<td>'+email+'</td>'+
			'<td style="font-family:arial;">'+mobile+'</td>'+
			'<td><span class="profile_edit">Edit</span> <i class="fa fa-pencil"></i></td>'+
		'</tr>');		

		$("#createNewStaff-txtFirstName").val("");
		$("#createNewStaff-txtLastName").val("");
		$("#createNewStaff-txtEmail").val("");
		$("#createNewStaff-txtMobile").val("");

		//Re init
		$("#manage_staff tbody tr").click(function() {
			if($.inArray(this,selected_profiles) === -1) {
				$(this).find("td").first().find("i").removeClass("fa-circle-thin").addClass("fa-check-circle");
				selected_profiles.push(this);
			}
			else {			
				$(this).find("td").first().find("i").removeClass("fa-check-circle").addClass("fa-circle-thin");
				selected_profiles.pop(this);
			}
		});
		$("#manage_staff td:last-child").click(function() {
			var el = $(this).parent().parent();

			$("#my_manage_staff").hide();
			$("#my_manage_profile").fadeIn();
			$(this).addClass("selected");		
			$("#switch_to_manage_staff").removeClass("selected");

			var vals = el.find('td');
			for (var i = 0; i < vals.length; i++) {
				if(i==2)
				{
					var name = $(vals[i]).html().split(" ");
					$("#admDetails-txtFirstName").val(name[0]);
					$("#admDetails-txtLastName").val(name[1]);				
				}
				if(i==3)			
					$("#admDetails-txtEmail").val($(vals[i]).html());
				if(i==4)
					$("#admDetails-txtMobile").val($(vals[i]).html());
			};		

		});
		//Re init End
	});


var selected_profiles = [];	
	$("#manage_staff tbody tr").click(function() {
		if($.inArray(this,selected_profiles) === -1) {
			$(this).find("td").first().find("i").removeClass("fa-circle-thin").addClass("fa-check-circle");
			selected_profiles.push(this);
		}
		else {			
			$(this).find("td").first().find("i").removeClass("fa-check-circle").addClass("fa-circle-thin");
			selected_profiles.pop(this);
		}
	});

	//Remove Selected Profiles
	$("#myStaff_btnDeleteSelected").click(function() {
		if(selected_profiles.length == 0)
			return;
		for (var i = selected_profiles.length - 1; i >= 0; i--) {
			$(selected_profiles[i]).fadeOut(function(i) {
				console.log(i);
				$(selected_profiles[i]).remove();
			});
		};
		selected_profiles = [];
	});

	$("#myStaff-btnSelectAll").click(function() {
		var all_staff = $("#manage_staff tbody tr");
		if($(this).hasClass("fa-circle-thin")) {
			for (var i = all_staff.length - 1; i >= 0; i--) {
				$(all_staff[i]).find("td").first().find("i").removeClass('fa-circle-thin').addClass("fa-check-circle");
				selected_profiles.push($(all_staff[i]));
			};
			$(this).removeClass("fa-circle-thin").addClass("fa-check-circle");
		}
		else {
			for (var i = all_staff.length - 1; i >= 0; i--) {
				$(all_staff[i]).find("td").first().find("i").removeClass("fa-check-circle").addClass("fa-circle-thin");
				selected_profiles.pop($(all_staff[i]));
			};
			$(this).removeClass("fa-check-circle").addClass("fa-circle-thin");
		}
	});

	//Update Profile
	$("#profile-btnUpdate").click(function() {

	});

});