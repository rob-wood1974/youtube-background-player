$.widget( "vs.ytbg", {
 
		options: {
				currentVideo: 0
		},
 
		_create: function() {
			
		},
		
		_destroy: function() {
			
		}
 
});

var bar = $( "<div></div>" )
    .appendTo( "body" )
    .ytbg({ currentVideo: 3 });