var videobase = {containment:'#video_background1',showControls:false, autoPlay:true, vol:1, optimizeDisplay:true, mute:true, opacity:1, quality:'small', addRaster:false, loop:false, ratio:"4/3", shuffle:false};

var videos = [
	jQuery.extend({videoURL:'A9Xru1ReRwc',startAt:2,stopAt:14}, videobase), //brain
	jQuery.extend({videoURL:'4eKIjkk0NVY',startAt:0,stopAt:50}, videobase), //history
	jQuery.extend({videoURL:'GgH-uXC-Qmk',startAt:0,stopAt:24}, videobase), //surf and palm
	jQuery.extend({videoURL:'oT4Bq8zYN4E',startAt:0,stopAt:24}, videobase), //calm forest snow storm
	jQuery.extend({videoURL:'TheFr7Nl-zY',startAt:0,stopAt:24}, videobase), //moving through stars
	jQuery.extend({videoURL:'DSehQsYU9h4',startAt:8,stopAt:24}, videobase), //red pandas
	jQuery.extend({videoURL:'INscMGmhmX4',startAt:0,stopAt:24}, videobase), //grumpy cat
	jQuery.extend({videoURL:'gagnnGKprBE',startAt:20,stopAt:44}, videobase), //great lakes flyover
	jQuery.extend({videoURL:'T1A2GrvFJ1w',startAt:0,stopAt:30}, videobase), //flying through clouds
	jQuery.extend({videoURL:'Bym8N__2jcE',startAt:168,stopAt:285}, videobase), //city snow storm
	jQuery.extend({videoURL:'YgmIibSnZs0',startAt:0,stopAt:30}, videobase), //slow moving clouds
	jQuery.extend({videoURL:'hAqKo4IFayc',startAt:0,stopAt:30}, videobase), //more slow clouds
	jQuery.extend({videoURL:'rojqGOd5xB4',startAt:2,stopAt:92}, videobase), //Earth from space station
	jQuery.extend({videoURL:'YQrf6r-9ozc',startAt:1423,stopAt:1481}, videobase) //galaxies and space clouds
];

var yt = 'https://www.youtube.com/watch?v=';

var videoUrls = [];

jQuery.each(videos,function(k,v){

		videoUrls.push(yt + v);
	
});

console.log(videoUrls);

/*var videos = [
	jQuery.extend({videoURL:'A9Xru1ReRwc',startAt:2,stopAt:7}, videobase), //brain
	jQuery.extend({videoURL:'4eKIjkk0NVY',startAt:0,stopAt:5}, videobase), //history
	//jQuery.extend({videoURL:'rojqGOd5xB4',startAt:12,stopAt:17}, videobase), //Earth from space station
	//jQuery.extend({videoURL:'TheFr7Nl-zY',startAt:0,stopAt:5}, videobase), //moving through stars
	//jQuery.extend({videoURL:'YQrf6r-9ozc',startAt:8,stopAt:11}, videobase), //galaxies and space clouds
	jQuery.extend({videoURL:'oT4Bq8zYN4E',startAt:0,stopAt:24}, videobase), //calm forest snow storm
	jQuery.extend({videoURL:'GgH-uXC-Qmk',startAt:0,stopAt:24}, videobase), //surf and palm
	jQuery.extend({videoURL:'DSehQsYU9h4',startAt:12,stopAt:36}, videobase), //red pandas
	jQuery.extend({videoURL:'INscMGmhmX4',startAt:0,stopAt:5}, videobase), //grumpy cat
	jQuery.extend({videoURL:'T1A2GrvFJ1w',startAt:0,stopAt:2}, videobase), //flying through clouds
	jQuery.extend({videoURL:'Bym8N__2jcE',startAt:168,stopAt:285}, videobase), //city snow storm
	jQuery.extend({videoURL:'YgmIibSnZs0',startAt:0,stopAt:2}, videobase), //slow moving clouds
	jQuery.extend({videoURL:'hAqKo4IFayc',startAt:0,stopAt:2}, videobase), //more slow clouds
	jQuery.extend({videoURL:'gagnnGKprBE',startAt:20,stopAt:25}, videobase) //great lakes flyover
];*/

var currentvideo = 0;
var videopaused = false;

$.fn.preload = function() {
	this.each(function(){
		jQuery('<img>')[0].src = this;
	});
}
jQuery(['img/video_over.png','img/video_down.png','img/videocontrols/pause_over.png','img/videocontrols/pause_down.png','img/videocontrols/play_over.png','img/videocontrols/play_down.png','img/videocontrols/forward_over.png','img/videocontrols/forward_down.png','img/videocontrols/back_over.png','img/videocontrols/back_down.png','img/vslogo.png','img/vslogoHover.png','img/vslogoActive.png']).preload();

jQuery(window).resize(function() {
  //location.reload();
});



jQuery(document).ready(function() {
'use strict';

if(jQuery.browser.mobile) 
{ 
	jQuery('.page-loader').hide();
	jQuery('.splash-wrap').fadeIn();
	jQuery('#videocontrols').remove();
	jQuery('#vslogodiv').fadeIn();
	jQuery('.video-overlay2').css('background','url(img/cloud-bg.jpg) center');
/*	window.setTimeout(function(){
		//jQuery('#loadcover').fadeOut(1000);
	},1500);*/
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
	{
		//jQuery('.splash-content').css({height:'330px'});
	}
}
else
{
/*	window.setTimeout(function(){
		//jQuery('#video_background1').fadeIn(1000);
		jQuery('#videocontrols').fadeIn(1000);
		//jQuery('#loadcover').fadeOut(1000);
	},1500);*/
}


jQuery('#videopause').hover(
	function(){jQuery(this).prop('src','img/videocontrols/pause_over.png');},
	function(){jQuery(this).prop('src','img/videocontrols/pause.png');}
);

jQuery('#videopause').on('mousedown',function(){jQuery(this).prop('src','img/videocontrols/pause_down.png');});
jQuery('#videopause').on('mouseup',function(){jQuery(this).prop('src','img/videocontrols/pause.png');});

jQuery('#videopause').on('click',function(){
	jQuery('#bgndVideo').pauseYTP();
	videopaused = true;
});


jQuery('#videoplay').hover(
	function(){jQuery(this).prop('src','img/videocontrols/play_over.png');},
	function(){jQuery(this).prop('src','img/videocontrols/play.png');}
);

jQuery('#videoplay').on('mousedown',function(){jQuery(this).prop('src','img/videocontrols/play_down.png');});
jQuery('#videoplay').on('mouseup',function(){jQuery(this).prop('src','img/videocontrols/play.png');});

jQuery('#videoplay').on('click',function(){
	jQuery('#bgndVideo').playYTP();
	videopaused = false;
});


jQuery('#videoforward').hover(
	function(){jQuery(this).prop('src','img/videocontrols/forward_over.png');},
	function(){jQuery(this).prop('src','img/videocontrols/forward.png');}
);

jQuery('#videoforward').on('mousedown',function(){jQuery(this).prop('src','img/videocontrols/forward_down.png');});
jQuery('#videoforward').on('mouseup',function(){jQuery(this).prop('src','img/videocontrols/forward.png');});

jQuery('#videoforward').on('click',function(){
	currentvideo++;
	if(currentvideo >= videos.length) currentvideo = 0;
	videopaused = false;
	jQuery('#bgndVideo').changeMovie({videoURL:videos[currentvideo].videoURL,containment:videos[currentvideo].containment,showControls:videos[currentvideo].showControls, autoPlay:videos[currentvideo].autoPlay, mute:videos[currentvideo].mute, startAt:videos[currentvideo].startAt, stopAt:videos[currentvideo].stopAt, opacity:videos[currentvideo].opacity});
});


jQuery('#videoback').hover(
	function(){jQuery(this).prop('src','img/videocontrols/back_over.png');},
	function(){jQuery(this).prop('src','img/videocontrols/back.png');}
);

jQuery('#videoback').on('mousedown',function(){jQuery(this).prop('src','img/videocontrols/back_down.png');});
jQuery('#videoback').on('mouseup',function(){jQuery(this).prop('src','img/videocontrols/back.png');});

jQuery('#videoback').on('click',function(){
	currentvideo--;
	if(currentvideo < 0) currentvideo = videos.length - 1;
	videopaused = false;
	jQuery('#bgndVideo').changeMovie({videoURL:videos[currentvideo].videoURL,containment:videos[currentvideo].containment,showControls:videos[currentvideo].showControls, autoPlay:videos[currentvideo].autoPlay, mute:videos[currentvideo].mute, startAt:videos[currentvideo].startAt, stopAt:videos[currentvideo].stopAt, opacity:videos[currentvideo].opacity});
});




/* ==============================================
 Contact form checker
 =============================================== */

jQuery("#commentForm").validate({
  submitHandler: function(form) {
   contact_form_submit();
  }
 });


/* ==============================================
 Contact form ajax script
 =============================================== */
function contact_form_submit(){
  //jQuery('.contact-button').click(function() {
			
	if(!jQuery('#humancheck').is(':checked')) {
		jQuery('#alertMessage').text('If you\'re a human, you must check the checkbox to prove so.');
		jQuery('#alertModal').modal('show');
		return false;
	}
			
	if(jQuery('#cf_humantext').val() != '') {
		jQuery('#alertMessage').text('If you\'re a human, you must leave the specified textbox blank to prove so.');
		jQuery('#alertModal').modal('show');
		return false;
	}
			
	if(parseInt(jQuery('#cf_humanmath').val()) != 9) {
		jQuery('#alertMessage').text('If you\'re a human, you must enter the requested sum to prove so.');
		jQuery('#alertModal').modal('show');
		return false;
	}
	
	var name = jQuery('#cf_name').val();
	var email = jQuery('#cf_email').val();
	var message = jQuery('#cf_message').val();
	
	
	jQuery.ajax({
		type: "POST",
		url: "inc/send-mail.php",
		data: { cf_name: name, cf_email: email, cf_message: message }
	}).done(function( msg ) {
		if(msg == 'sent') {
				jQuery('.message-sent').css('display', 'block');
		} else {
				jQuery('.message-error').css('display', 'block');
		}
	});
    //});
}
 /* ==============================================
Checks for mobile devices
=============================================== */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || jQuery.browser.mobile);
    }
};

if(!isMobile.any()) {
    skrollr.init({
      forceHeight: false,
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
    });
}

     var splashdiv = jQuery('.splash-wrap'),
     splashlimit = 10;  /* scrolltop value when opacity should be 0 */
     var divs = jQuery('.splash-content'),
     limit = 1000;  /* scrolltop value when opacity should be 0 */
     
    document.addEventListener("touchmove", headerScroll, false);
    document.addEventListener("scroll", headerScroll, false);
     
     
function headerScroll() {
	var st = jQuery(this).scrollTop();
	
	/* avoid unnecessary call to jQuery function */
	if (st <= limit) {
		divs.css({ 'opacity' : (1 - st/limit) });
		splashdiv.css({ 'height' : (100 - st/splashlimit)+'%' });
	}
}

 /* ==============================================
Smooth scrolling on link clicking
=============================================== */
jQuery(function() {
		'use strict';
		 jQuery('.navbar a[href*=#]:not([href=#]), .m-splash-image .btn').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				if (this.hash.slice(1) == 'homeScreenVideo') {
					jQuery('#bgndVideo').playYTP();
				}
				if (target.length) {
					 jQuery('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

var iScrollPos = 0;
jQuery(window).on('scroll', function(e){
	var iCurScrollPos = $(this).scrollTop();
	if (iCurScrollPos > iScrollPos) {
		//Down scrolling
		if (jQuery(window).scrollTop() > 200) {
			jQuery('#bgndVideo').pauseYTP();
			videopaused = true;
		}
	}
	else {
		//Up scrolling
		if (jQuery(window).scrollTop() <= 200) {
			jQuery('#bgndVideo').playYTP();
			videopaused = false;
		}
	}
	iScrollPos = iCurScrollPos;
});


 /* ==============================================
background video load
=============================================== */
var playerStarted = false;
jQuery(function(){
    'use strict';
    //jQuery("#bgndVideo").mb_YTPlayer();
		//jQuery("#bgndVideo").YTPlaylist(videos, false);
		



		
});

jQuery('#bgndVideo').on("YTPStart",function(e){
	//jQuery('.video-overlay').css('background','transparent');
	if (jQuery(window).scrollTop() > 200) {
		jQuery('#bgndVideo').pauseYTP();
		videopaused = true;
	}
	jQuery('.page-loader').hide();
	jQuery('.splash-wrap').fadeIn();
	jQuery('#videocontrols').fadeIn();
	jQuery('#vslogodiv').fadeIn();
	//currentvideo++;
    //console.log(e);
   //jQuery('#videoforward').trigger('click');
});

jQuery('#bgndVideo').on("YTPEnd",function(e){
	currentvideo++;
	if (currentvideo >= videos.length) currentvideo = 0;
	//if (jQuery(window).scrollTop() <= 200) jQuery('.page-loader').show();
	//jQuery('.video-overlay').css('background','#34495e');
    //console.log(e);
   //jQuery('#videoforward').trigger('click');
});

jQuery('#bgndVideo').on("YTPBuffering",function(e){console.log('buffering');
	playerStarted = true;
	//if (jQuery(window).scrollTop() <= 200) jQuery('.page-loader').show();
	//jQuery('.video-overlay').css('background','#34495e');
    //console.log(e);
   //jQuery('#videoforward').trigger('click');
});



 /* ==============================================
smooth scrolling
=============================================== */
    
jQuery("html").niceScroll({
    zindex: 113,
    cursorwidth: 15,
    autohidemode: false,
    background: '#34495e',
    cursorcolor: '#55789b',
    cursorborderradius: 0,
    cursorborder: 'none'
});


 /* ==============================================
lightbox
=============================================== */
    
    jQuery('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });


   jQuery('.image-link').magnificPopup({type: 'image'});



 /* ==============================================
Setting slider height on load
=============================================== */
		
    var browserHeight = jQuery(window).height();
		if(jQuery.browser.mobile)
		{
			if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
			{
				browserHeight = screen.height;
			}
		}
		jQuery('.m-splash-image .flexslider li, .homeScreenVideo').css('height', browserHeight);

 /* ==============================================
  Google maps
=============================================== */
    
    var iconBase = 'img/google-marker.png';
    var myLatlng = new google.maps.LatLng(27.852222,-82.707222);

    var mapContainer = document.getElementById('map');
    var mapOptions = {
        panControl: false,
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        scaleControl: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.MAP,
        zoom: 12
    };

		if (mapContainer) {

			var map = new google.maps.Map(mapContainer, mapOptions);
	
			var marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
					icon: iconBase
			});
		}


 /* ==============================================
Navigation Dock
=============================================== */

    var docked = false;
    var menu = jQuery('#l-navigation');
    var init = browserHeight;

    document.addEventListener("touchmove", navDocking, false);
    document.addEventListener("scroll", navDocking, false);
    window.addEventListener("load", navDocking, false);

    function navDocking() {			
			if (!docked && (menu.offset().top - jQuery(window).scrollTop() < 0))
			{					
				//jQuery('.l-navigation-wrap').removeClass('menu-padd');
				menu.css({
					position: "fixed",
					top: 0,
				});
				docked = true;
			}
			else if (docked && jQuery(window).scrollTop() <= init)
			{
				//jQuery('.l-navigation-wrap').addClass('menu-padd');
				menu.css({
					position: "static",
					top: init + 'px',
				});

				docked = false;
			}
    }


 /* ==============================================
Isotope
=============================================== */
    var $container = jQuery('.l-gallery-posts');

    $container.imagesLoaded(function() {
        // bind isotope to window resize
        jQuery(window).smartresize(function() {
            // jQuery has issues with percentage widths
            // so we'll manually calulate it
            var colW = Math.floor($container.width() * 0.001);

            $container.isotope({
                resizable: false,
                layoutMode: 'sloppyMasonry',
                masonry: {
                    columnWidth: colW
                }
            });
            // trigger resize so isotope layout is triggered
        }).smartresize();
    });

    // filter buttons
    jQuery('.l-gallery-categories li').click(function() {
        jQuery('.l-gallery-categories li').removeClass();
        jQuery(this).addClass('active');
        var selector = jQuery(this).attr('data-filter');
        $container.isotope({filter: selector});
        return false;
    });

});

 /* ==============================================
  Splash screen flex slider
=============================================== */

jQuery(window).load(function() {
    'use strict';
    jQuery('.flexslider-splash').flexslider({
        controlNav: false,
        prevText: "",
        nextText: "",
        slideshow: false,        
    });
});

/*================================================
 Twitter script
 ================================================*/
/*jQuery(document).ready(function() {
    jQuery('.flexslider-twitter').tweet({
        modpath: 'inc/tweet/twitter/index.php',
        count: 3,
        username: 'username_goes_here',
        loading_text: 'loading twitter feed...',
        template: "{avatar}{text}{join}{time}"
    });
});*/


//jQuery(window).load(function() {alert('load event');

/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
		function reposition() {
				var modal = $(this),
						dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
		}
		// Reposition when a modal is shown
		$('.modal').on('show.bs.modal', reposition);
		// Reposition when the window is resized
		$(window).on('resize', function() {
				$('.modal:visible').each(reposition);
		});
});

jQuery(document).ready(function() {
    'use strict';
		
jQuery('.splash-wrap').fadeIn();
	
jQuery('#captchadiv').append(jQuery('<div class="col-lg-4" style="float:right;"><input type="text" class="form-control" name="cf_humanmath" id="cf_humanmath" placeholder="Enter the sum of 6 + 3"></div><div class="col-lg-4" style="float:right;"><input type="text" class="form-control" name="cf_humantext" id="cf_humantext" style="padding-left:9px;padding-right:9px;" placeholder="Leave blank if you\'re human"></div><div id="humancheckdiv" style="padding-top:15px;margin-left:15px;padding-left:15px;"><input type="checkbox" name="humancheck" id="humancheck" style="margin-right:8px;position:relative;top:1px;"> Check if you\'re human</div>'));	

jQuery(document).on('click', '#humancheckdiv', function(e){
	jQuery('#humancheck').trigger('click');
});		

jQuery(document).on('click', '#humancheck', function(e){
	e.stopPropagation();
});		
		
jQuery('.splash-content').css('zIndex',2147483646);
		
jQuery('#vslogo').hover(function(){
		jQuery(this).prop('src', 'img/vslogoHover.png');	
	},function(){
		jQuery(this).prop('src', 'img/vslogo.png');
});	

jQuery('#vslogo').on('mousedown', function(){
	jQuery(this).prop('src', 'img/vslogoActive.png');
});	

jQuery('#vslogo').on('mouseup', function(){
	jQuery(this).prop('src', 'img/vslogoHover.png');
});	
		
//if (jQuery(window).scrollTop() > 400) jQuery('#videopause').trigger('click');	

//var cvDialog = $('<div id="cvDialog" style="padding-top:50px;"><a href="resumes/robWoodCV-2015-12-PUBLIC.pdf" target="_blank"><img src="img/pdf.png" style="border:none;"></a><a style="margin-left:36px;" href="resumes/robWoodCV-2015-12-PUBLIC.doc" target="_blank"><img src="img/doc.png" style="border:none;"></a></div>');

//jQuery('body').append(cvDialog);

/*cvDialog.dialog({
		autoOpen: false,
    modal: true,
    draggable: false,
    resizable: false,
    show: 'blind',
    hide: 'blind',
    width: 400,
		height: 250,
		title: 'Select a File Format'
});
*/
/*jQuery('#resume').on('click',function(){

	jQuery('#cvDialog').modal('show');

});*/
		
/* ==============================================
Animates page load
=============================================== */

//jQuery('.page-loader').css('display', 'none');
jQuery('.l-wrapper').css('opacity',1);
/*  jQuery('.l-wrapper').animate({
    opacity: 1
  }, 1000);*/
        
        
/* ==============================================
Testimonials flexslider
=============================================== */
    jQuery('.flexslider-testimonials').flexslider({
        prevText: "",
        nextText: ""
    });
    
    
/* ==============================================
Twitter flexslider
=============================================== */
    
    jQuery('.flexslider-twitter').flexslider({
        prevText: "",
        nextText: "",
        directionNav: false
    });
    
    
/* ==============================================
Checks for mobile devices
=============================================== */
    
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || jQuery.browser.mobile);
    }
};

jQuery('#robwood').hover(function(){
		jQuery(this).prop('src','img/logoHover.png');
	},function(){
		jQuery(this).prop('src','img/logo.png');
});

// if not mobile waypoint will be turned on
if(!isMobile.any()) {


jQuery('#home').waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('#bgndVideo').playYTP();
	}
},{offset:-100});

//setting active menu
jQuery('#whyYouShouldHireMe').waypoint(function(direction) {
	if (typeof jQuery('#bgndVideo') != 'undefined') {
		jQuery('#videopause').trigger('click');
	}
	jQuery('.nav li').removeClass('active');
	jQuery('.nav li.menu-home').addClass('active');
},{offset:100});

jQuery('.what-we-do-section').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-whatwedo').addClass('active');
	}
},{offset:90}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-whatwedo').addClass('active');
	}
},{offset:0});

jQuery('.m-posts').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-news').addClass('active');
	}
},{offset:400}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-news').addClass('active');
	}
},{offset:0});

jQuery('.testimonials-paralax').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-testimonials').addClass('active');
	}
},{offset:100}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-testimonials').addClass('active');
	}
},{offset:0});

jQuery('#skills').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-skills').addClass('active');
	}
},{offset:100}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-skills').addClass('active');
	}
},{offset:0});

jQuery('#gallery').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-gallery').addClass('active');
	}
},{offset:100}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-gallery').addClass('active');
	}
},{offset:0});

jQuery('#team').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-team').addClass('active');
	}
},{offset:100}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-team').addClass('active');
	}
},{offset:0});

jQuery('#contact').waypoint(function(direction) {
	if (direction === 'down') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-contact').addClass('active');
	}
},{offset:100}).waypoint(function(direction) {
	if (direction === 'up') {
		jQuery('.nav li').removeClass('active');
		jQuery('.nav li.menu-contact').addClass('active');
	}
},{offset:0});


    //first section
    jQuery('#whyYouShouldHireMe').waypoint(function() {
      jQuery('.l-page-section .round-icon').toggleClass('circle-animate');

    },
		{
				offset: '50%',
				triggerOnce: false
		});

    //what we do section
    jQuery('.what-we-do-section').waypoint(function() {
        jQuery('.what-we-do-section .opacity').toggleClass('opacity-on');
    },
            {
                offset: '50%',
                triggerOnce: false
            });

    //news section
    jQuery('.m-posts').waypoint(function() {

        jQuery('.m-posts .m-news-post').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('scale-up');             
            }, index*120);
        });
        
    },
            {
                offset: '80%',
                triggerOnce: false
            });

    //testimonials section
    jQuery('.testimonials-paralax').waypoint(function() {                       
        jQuery('.testimonials-paralax .container').toggleClass('opacity-on');
    },
            {
                offset: '70%',
                triggerOnce: false
            });

    //testimonials section
    jQuery('.l-skills-section').waypoint(function() {
        //easy pie chart   

        jQuery('.chart').each(function() {//console.log(jQuery(this).data('easyPieChart'));console.log(jQuery(this).data());
          if (typeof jQuery(this).data('easyPieChart') != 'undefined') {
						var ch = jQuery(this).data('easyPieChart');
						var pct = jQuery(this).data('percent');
						ch.disableAnimation();
						ch.update(0);
						ch.enableAnimation();
						ch.update(pct);
					}
        });
	
  /*          jQuery('.chart').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: 6,
                size: 50,
                scaleColor: '#e5e5e5',
                barColor: '#34495e',
                trackColor: '#e5e5e5',
								lineCap: 'butt',
                onStep: function(from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                }
            });*/
  
            jQuery('.chart').easyPieChart({
                easing: 'easeOutCirc',
                lineWidth: 16,
                size: 175,
                scaleColor: '#e5e5e5',
                barColor: '#e5e5e5',
                trackColor: '#304356',
								lineCap: 'butt',
								animate: { duration: 1500, enabled: true },
                onStep: function(from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                }
            });
       
    },
            {
                offset: '50%',
                triggerOnce: false
            });

    //gallery section
    jQuery('.l-gallery-posts').waypoint(function() {      
                                
        jQuery('.l-gallery-posts .opacity').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('opacity-on');             
            }, index*120);
        });
    },
            {
                offset: '80%',
                triggerOnce: false
            });

    //team section
    jQuery('.l-team-section').waypoint(function() {      
                                        
        jQuery('.l-team-section .opacity').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('opacity-on');             
            }, index*200);
        });
    },
            {
                offset: '50%',
                triggerOnce: false
            });
            
    //map section
    jQuery('.l-map-section').waypoint(function() {      
                                        
        jQuery('.l-map-section .opacity').toggleClass('opacity-on');
    },
        {
            offset: '50%',
            triggerOnce: false
        });
        
    //contact section
    jQuery('.l-contactus-section').waypoint(function() {      
             
        jQuery('.l-contactus-section li').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('opacity-on');             
            }, index*170);
        });
        
        jQuery('.l-contactus-section div.form-wrapper').toggleClass('opacity-on');
    },
        {
            offset: '80%',
            triggerOnce: false
        });
    
    //if it is mobile it will only load ellements without waypoints
} else {
    
        
				
				
				
 /* ==============================================
navigation active change
=============================================== */

    jQuery('.nav li a').click(function() {
        jQuery('.nav li').removeClass('active');
        if (jQuery(this).parent().hasClass("arrow-top")) {
            jQuery('.arrow-top').removeClass('active');
            jQuery('.nav li:first-child').addClass('active');
        } else {
            jQuery(this).parent().addClass('active');
        }
    });

    jQuery('.l-logo a').click(function() {
        jQuery('.nav li').removeClass('active');
        jQuery('.nav li:first-child').addClass('active');
    });


    
    //first section
    jQuery('.l-page-section .round-icon').toggleClass('circle-animate');

    //what we do section
    jQuery('.what-we-do-section .opacity').toggleClass('opacity-on');

    //news section
        jQuery('.m-posts .m-news-post').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('scale-up');             
            }, index*120);
        });


        //testimonials section
        jQuery('.testimonials-paralax .container').toggleClass('opacity-on');


        //easy pie chart    
            jQuery('.chart').easyPieChart({
                easing: 'easeOutCirc',
                lineWidth: 16,
                size: 175,
                scaleColor: '#e5e5e5',
                barColor: '#e5e5e5',
                trackColor: '#304356',
								lineCap: 'butt',
								animate: { duration: 1500, enabled: true },
                onStep: function(from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                }
            });


    //gallery section
        jQuery('.l-gallery-posts .opacity').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('opacity-on');             
            }, index*120);
        });


    //team section
        jQuery('.l-team-section .opacity').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('opacity-on');             
            }, index*200);
    });
            
    //map section
        jQuery('.l-map-section .opacity').toggleClass('opacity-on');
        
    //contact section     
        jQuery('.l-contactus-section li').each(function(index) {
            var self = this;
            setTimeout(function() {
                jQuery(self).toggleClass('opacity-on');             
            }, index*170);
        });
        
        jQuery('.l-contactus-section div.form-wrapper').toggleClass('opacity-on');
    }
});