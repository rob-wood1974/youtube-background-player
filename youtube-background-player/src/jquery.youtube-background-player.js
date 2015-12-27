// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict";

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variable rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	// Create the defaults once
	var pluginName = "YoutubeBackgroundPlayer",
	
	//Player data
		defaults = {
		videos: [],
		currentvideo: 0,
		ytbgControls: true,
		expansionpercent: 25,
		mute: 1,
		overlay: 1,
		
		//YouTube API options: https://developers.google.com/youtube/player_parameters?playerVersion=HTML5#Parameters
		loop: 0,
		controls: 0,
		origin: null,
		autohide: 0,
		autoplay: 1,
		disablekb: 1,
		cc_load_policy: 0,
		controls: 0,
		enablejsapi: 1,
		fs: 0,
		modestbranding: 1,
		iv_load_policy: 3,
		loop: 0,
		showinfo: 0,
		rel: 0,
		wmode: 'opaque',
		hd: 0,
		
		//Image preload list
		images: [
			'http://wiki.famfamfam.googlecode.com/hg/images/control_play_blue.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_play.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_play_blue_faded.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_pause_blue.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_pause.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_pause_blue_faded.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_fastforward_blue.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_fastforward.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_fastforward_blue_faded.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_rewind_blue.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_rewind.png',
			'http://wiki.famfamfam.googlecode.com/hg/images/control_rewind_blue_faded.png',
		]
		
	};

	// The actual plugin constructor
	function YoutubeBackgroundPlayer ( element, options ) {
		this.element = element;
		// jQuery has an extend method which merges the contents of two or
		// more objects, storing the result in the first object. The first object
		// is generally empty as we don't want to alter the default options for
		// future instances of the plugin
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		
		this.overlay = jQuery('<div id="ytbgOverlay" />');
		this.playing = false;
		this.player = null;
		this.currentvideo = this.settings.currentvideo;
		this.videos = this.settings.videos;
		this.ytbgcontrols = null;
		
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(YoutubeBackgroundPlayer.prototype, {
		init: function () {
			// Place initialization logic here
			// You already have access to the DOM element and
			// the options via the instance, e.g. this.element
			// and this.settings
			// you can add more functions like the one below and
			// call them like so: this.yourOtherFunction(this.element, this.settings).
			
			if(this.settings.overlay) jQuery('html').append(this.overlay);
			
			//Create our custom events to be fired by events from YouTube API
			var _this = this; //need a context closure
			
			//Register our handling of the YouTube API events into the global functions the API calls
			window.onYouTubeIframeAPIReady = jQuery.proxy(_this.onYouTubeIframeAPIReady, this);
			window.onPlayerReady = jQuery.proxy(_this.onPlayerReady, this);
			window.onPlayerStateChange = jQuery.proxy(_this.onPlayerStateChange, this);
			
			//Prep the videos array, merging with options			
			var videobase = {
				loop: this.settings.loop,
				origin: this.settings.origin,
				autohide: this.settings.autohide,
				autoplay: this.settings.autoplay,
				disablekb: this.settings.disablekb,
				cc_load_policy: this.settings.cc_load_policy,
				controls: this.settings.controls,
				enablejsapi: this.settings.enablejsapi,
				fs: this.settings.fs,
				modestbranding: this.settings.modestbranding,
				iv_load_policy: this.settings.iv_load_policy,
				loop: this.settings.loop,
				showinfo: this.settings.showinfo,
				rel: this.settings.rel,
				wmode: this.settings.wmode,
				hd: this.settings.hd
			};
			
			jQuery.each(this.videos, function(k,v){
			
				jQuery.extend(v, {videoId: v.video, startSeconds: v.start, endSeconds: v.end}, videobase);	
				
			});
			
			//Load up the YouTube API asynchronously
			var tag = document.createElement('script');			
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			
			//Blatant theft from https://github.com/okfocus/okvideo, to achieve fullscreen background, expand video to push ads offscreen
			var BLANK_GIF = "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D";
			var target =jQuery('body');
			var position = target[0] == jQuery('body')[0] ? 'fixed' : 'absolute';		
			target.css({position: 'relative'});		
			var zIndex = 9999999999;
			var mask = '<div id="ytbgplayer-mask" style="position:' + position + ';left:0;top:0;overflow:hidden;z-index:-998;height:100%;width:100%;"></div>';
			var overlap = this.settings.expansionpercent/2;
			var size = 100 + this.settings.expansionpercent;
			target.append('<div id="ytbgplayer" style="position:' + position + ';left:-' + overlap + '%;top:-' + overlap + '%;overflow:hidden;z-index:' + zIndex + ';height:' + size + '%;width:' + size + '%;"></div>');		
			jQuery("#ytbgplayer-mask").css("background-image", "url(" + BLANK_GIF + ")");
			
			//Load up the player controls, if required
			if(this.settings.ytbgControls) {
				this.ytbgcontrols = jQuery('<div id="ytbgControls" />');
				this.ytbgcontrols.append(jQuery('<img src="http://wiki.famfamfam.googlecode.com/hg/images/control_rewind_blue.png">'));
				this.ytbgcontrols.append(jQuery('<img src="http://wiki.famfamfam.googlecode.com/hg/images/control_play_blue.png">'));
				this.ytbgcontrols.append(jQuery('<img src="http://wiki.famfamfam.googlecode.com/hg/images/control_pause_blue.png">'));
				this.ytbgcontrols.append(jQuery('<img src="http://wiki.famfamfam.googlecode.com/hg/images/control_fastforward_blue.png">'));
				jQuery('body').append(this.ytbgcontrols);
				
				jQuery('#ytbgControls img').hover(function(){
						jQuery(this).prop('src', jQuery(this).prop('src').replace('_blue', ''));
					},function(){
						jQuery(this).prop('src', jQuery(this).prop('src').replace('.png', '_blue.png'));
				});
				
				jQuery('#ytbgControls img').on('mousedown', function(){
					jQuery(this).prop('src', jQuery(this).prop('src').replace('.png', '_blue_faded.png'));
				});
				
				jQuery('#ytbgControls img').on('mouseup', function(){
					jQuery(this).prop('src', jQuery(this).prop('src').replace('_blue_faded', ''));
				});
				
				jQuery('#ytbgControls img').on('click', function(){
					var pattern = /control_.*(_|\.)/ig;
					var str = jQuery(this).prop('src');
					var action = str.match(pattern);
					action = action[0].replace('control','').replace('_','').replace('.','');
					switch(action)
					{
						case 'play' :
							_this.player.playVideo();
							break;
						case 'pause' :
							_this.player.pauseVideo();
							break;
						case 'fastforward' :
							_this.nextVideo();							
							break;
						case 'rewind' :
							_this.nextVideo(true);	
							break;
					}
				});
				
			}
			
		},
		
		preloadImages: function () {
			jQuery.each(this.images, function(k, v){
				jQuery('<img>')[0].src = v;
			});
		},
		
		onYouTubeIframeAPIReady: function() {
			this.player = new YT.Player('ytbgplayer', {
				height: '390',
				width: '640',
				videoId: this.videos[this.currentvideo].videoId,
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				},
				playerVars: this.videos[this.currentvideo],
			});
		},
		
		onPlayerReady: function(event) {
			if(this.settings.mute) event.target.mute();
			event.target.playVideo();
		},
		
		onPlayerStateChange: function(event) {
			
			if(event.data == YT.PlayerState.PLAYING) {
				if(this.settings.overlay) this.overlay.fadeOut(1500);
				if(this.settings.ytbgControls) this.ytbgcontrols.fadeIn(1500);
				this.playing = true;
			}
			
			if(event.data == YT.PlayerState.ENDED) {
				if(this.playing)
				{
					this.playing = false;
					this.nextVideo();
				}
			}
			
		},
		
		nextVideo: function(previous) {
			if(this.settings.overlay) this.overlay.fadeIn(500);
			if(this.settings.ytbgControls) this.ytbgcontrols.fadeOut(500);
			
			if(previous) {
				this.currentvideo++;
				if(this.currentvideo >= this.videos.length) this.currentvideo = 0;
			}
			else {
				this.currentvideo++;
				if(this.currentvideo < 0) this.currentvideo = this.videos.length -1;
			}
			
			this.player.loadVideoById(this.videos[this.currentvideo]);
		}
		
	});

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new YoutubeBackgroundPlayer( this, options ) );
			}
		});
	};

})( jQuery, window, document );
