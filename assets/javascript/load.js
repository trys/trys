var trys = (function () {
	"use strict";
	return {
		init: function () {
			$(window).scroll(function(){
				trys.Animation.Parallax();
			});
		},
		Animation : {
			Parallax : function () {
				var scrollPos = $(window).scrollTop();
				$('.entry-title').css( 'top', + ( scrollPos * 0.4 ) + 'px' );
				if( scrollPos > ( $('#hero').outerHeight() - 66 ) && ! $('.site-title').hasClass('title-visible') ) {
					$('.site-title').addClass('title-visible');
				}
			}
		}
	};
}());

$( trys.init() );