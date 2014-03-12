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

/* Google Analytics */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-33133833-1', 'trysmudford.com');
ga('send', 'pageview');