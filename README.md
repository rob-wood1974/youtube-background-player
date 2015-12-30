# youtube-background-player
Custom Youtube playlists for your website background.

[Live demo](http://rob-wood.net/youtube-background-player/demo/)

Include jQuery and youtube-background-player:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="../src/jquery.youtube-background-player.js"></script>

```javascript
//List of objects with video-specific values
var videos = [	
	{video:'A9Xru1ReRwc',start:3,end:8}, //brain
	{video:'4eKIjkk0NVY',start:0,end:50}, //history
	{video:'GgH-uXC-Qmk',start:0,end:24}, //surf and palm
	{video:'oT4Bq8zYN4E',start:0,end:24}, //calm forest snow storm
	{video:'TheFr7Nl-zY',start:0,end:24}, //moving through stars
	{video:'DSehQsYU9h4',start:8,end:24}, //red pandas
	{video:'INscMGmhmX4',start:0,end:24}, //grumpy cat
	{video:'gagnnGKprBE',start:20,end:44}, //great lakes flyover
	{video:'T1A2GrvFJ1w',start:0,end:30}, //flying through clouds
	{video:'Bym8N__2jcE',start:168,end:285}, //city snow storm
	{video:'YgmIibSnZs0',start:0,end:30}, //slow moving clouds
	{video:'hAqKo4IFayc',start:0,end:30}, //more slow clouds
	{video:'rojqGOd5xB4',start:25,end:92}, //Earth from space station
	{video:'YQrf6r-9ozc',start:1423,end:1481} //galaxies and space clouds
];

//List of object/video player values goes in options

/*
Example options object with all values:
var options = {
	currentVideo: 0, //default
	expansionpercent: 50, //default
	mute: 1, //default
	overlay: 1, //default
	videos: videos,
	ytbgcontrols: 1, //default
  //YouTube API player options: https://developers.google.com/youtube/player_parameters?playerVersion=HTML5#Parameters
	autohide: 0, //default
	autoplay: 1, //default
	cc_load_policy: 0, //default
	color: 'red', //default, 'white' disables modestbranding
	controls: 0, //default
	disablekb: 1, //default
	enablejsapi: 1, //default
	fs: 0, //default
	iv_load_policy: 3, //default
	loop: 0, //default
	modestbranding: 1, //default
	origin: 'rob-wood.net',
	playsinline: 0, //default
	rel: 0, //default
	showinfo: 0, //default
	wmode: 'opaque' //default
};
*/

var options = {
	videos: videos,
	origin: 'rob-wood.net'
};

//Call the plugin on the body
$(function() {
	$('body').YoutubeBackgroundPlayer(options);
});
