(function(t,e,n){"use strict";t.fn.backstretch=function(i,a){return(i===n||0===i.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),n=e.data("backstretch");n&&(a=t.extend(n.options,a),n.destroy(!0)),n=new s(this,i,a),e.data("backstretch",n)})},t.backstretch=function(e,n){return t("body").backstretch(e,n).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==n},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var i={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},s=function(n,s,r){if(this.options=t.extend({},t.fn.backstretch.defaults,r||{}),this.images=t.isArray(s)?s:[s],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=t(n),this.$wrap=t('<div class="backstretch"></div>').css(i.wrap).appendTo(this.$container),this.$root=this.isBody?a?t(e):t(document):this.$container,!this.isBody){var o=this.$container.css("position"),h=this.$container.css("zIndex");this.$container.css({position:"static"===o?"relative":o,zIndex:"auto"===h?0:h,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&a?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var t,n={left:0,top:0},i=this.isBody?this.$root.width():this.$root.innerWidth(),s=i,a=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),r=s/this.$img.data("ratio");r>=a?(t=(r-a)/2,this.options.centeredY&&(n.top="-"+t+"px")):(r=a,s=r*this.$img.data("ratio"),t=(s-i)/2,this.options.centeredX&&(n.left="-"+t+"px")),this.$wrap.css({width:i,height:a}).find("img:not(.deleteable)").css({width:s,height:r}).css(n)}catch(o){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){this.index=e;var n=this,s=n.$wrap.find("img").addClass("deleteable"),a=t.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=t("<img />").css(i.img).bind("load",function(e){var i=this.width||t(e.target).width(),r=this.height||t(e.target).height();t(this).data("ratio",i/r),t(this).fadeIn(n.options.speed||n.options.fade,function(){s.remove(),n.paused||n.cycle(),n.$container.trigger(a,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[e]),n}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var a=function(){var t=navigator.userAgent,n=navigator.platform,i=t.match(/AppleWebKit\/([0-9]+)/),s=!!i&&i[1],a=t.match(/Fennec\/([0-9]+)/),r=!!a&&a[1],o=t.match(/Opera Mobi\/([0-9]+)/),h=!!o&&o[1],c=t.match(/MSIE ([0-9]+)/),u=!!c&&c[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&s&&534>s||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||o&&7458>h||t.indexOf("Android")>-1&&s&&533>s||r&&6>r||"palmGetResource"in e&&s&&534>s||t.indexOf("MeeGo")>-1&&t.indexOf("NokiaBrowser/8.5.0")>-1||u&&6>=u)}()})(jQuery,window),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,s){return jQuery.easing[jQuery.easing.def](t,e,n,i,s)},easeInQuad:function(t,e,n,i,s){return i*(e/=s)*e+n},easeOutQuad:function(t,e,n,i,s){return-i*(e/=s)*(e-2)+n},easeInOutQuad:function(t,e,n,i,s){return 1>(e/=s/2)?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,s){return i*(e/=s)*e*e+n},easeOutCubic:function(t,e,n,i,s){return i*((e=e/s-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,s){return 1>(e/=s/2)?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,s){return i*(e/=s)*e*e*e+n},easeOutQuart:function(t,e,n,i,s){return-i*((e=e/s-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,s){return 1>(e/=s/2)?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,s){return i*(e/=s)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,s){return i*((e=e/s-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,s){return 1>(e/=s/2)?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,s){return-i*Math.cos(e/s*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,s){return i*Math.sin(e/s*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,s){return-i/2*(Math.cos(Math.PI*e/s)-1)+n},easeInExpo:function(t,e,n,i,s){return 0==e?n:i*Math.pow(2,10*(e/s-1))+n},easeOutExpo:function(t,e,n,i,s){return e==s?n+i:i*(-Math.pow(2,-10*e/s)+1)+n},easeInOutExpo:function(t,e,n,i,s){return 0==e?n:e==s?n+i:1>(e/=s/2)?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,i,s){return-i*(Math.sqrt(1-(e/=s)*e)-1)+n},easeOutCirc:function(t,e,n,i,s){return i*Math.sqrt(1-(e=e/s-1)*e)+n},easeInOutCirc:function(t,e,n,i,s){return 1>(e/=s/2)?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,s){var a=1.70158,r=0,o=i;if(0==e)return n;if(1==(e/=s))return n+i;if(r||(r=.3*s),Math.abs(i)>o){o=i;var a=r/4}else var a=r/(2*Math.PI)*Math.asin(i/o);return-(o*Math.pow(2,10*(e-=1))*Math.sin(2*(e*s-a)*Math.PI/r))+n},easeOutElastic:function(t,e,n,i,s){var a=1.70158,r=0,o=i;if(0==e)return n;if(1==(e/=s))return n+i;if(r||(r=.3*s),Math.abs(i)>o){o=i;var a=r/4}else var a=r/(2*Math.PI)*Math.asin(i/o);return o*Math.pow(2,-10*e)*Math.sin(2*(e*s-a)*Math.PI/r)+i+n},easeInOutElastic:function(t,e,n,i,s){var a=1.70158,r=0,o=i;if(0==e)return n;if(2==(e/=s/2))return n+i;if(r||(r=1.5*.3*s),Math.abs(i)>o){o=i;var a=r/4}else var a=r/(2*Math.PI)*Math.asin(i/o);return 1>e?-.5*o*Math.pow(2,10*(e-=1))*Math.sin(2*(e*s-a)*Math.PI/r)+n:.5*o*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*s-a)*Math.PI/r)+i+n},easeInBack:function(t,e,n,i,s,a){return void 0==a&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+n},easeOutBack:function(t,e,n,i,s,a){return void 0==a&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+n},easeInOutBack:function(t,e,n,i,s,a){return void 0==a&&(a=1.70158),1>(e/=s/2)?i/2*e*e*(((a*=1.525)+1)*e-a)+n:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+n},easeInBounce:function(t,e,n,i,s){return i-jQuery.easing.easeOutBounce(t,s-e,0,i,s)+n},easeOutBounce:function(t,e,n,i,s){return 1/2.75>(e/=s)?7.5625*i*e*e+n:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,s){return s/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,s)+n:.5*jQuery.easing.easeOutBounce(t,2*e-s,0,i,s)+.5*i+n}});

$(document).ready(function() {
	var imgheight, imgwidth;
	$('.menu-item').find('.sub-menu').parent().addClass('sub-nav');
	$(".sub-nav").on("mouseenter", function() {
		var t=$(this).find("ul").height();
		$(this).css( {height:t+44})
	}).on("mouseleave", function() {
		$(this).css( {height:30 })
	});
	
	$('#tour').on('mouseenter', function(){
		$(this).css('width',220);
		$('#book').css('width',20);
	}).on('mouseleave', function(){
		$(this).css('width',20);
		$('#book').css('width',220);
	});
	
	$(".featured").slideDown(1200, "easeInOutExpo"), $(".featured").css({});
	$(".main").slideDown(1200, "easeInOutExpo");
	$('.tocontent').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({'scrollTop':600}, 1000, 'easeInOutExpo');
	});
	$('.back-to-top a').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({'scrollTop':0}, 1000, 'easeInOutExpo');
	});
	$('#follow a').attr('target','_blank');

	$('#page ul li a').on('click', function(e){
		var to = $(this).attr("href");
		$(this).attr('href',to+'#content');
	});
	if(window.location.hash=="#content") {
		window.location.hash="";
		$('html, body').animate({'scrollTop':600}, 1600, 'easeInOutExpo');
	}
	
	//Sort by tag
	function byname(a, b) {
	    if (a.title == b.title) {
	        return 0;
	    } else if (a.title > b.title) {
	        return 1;
	    }
	    return -1;
	}
	
	var mainset = '72157633538109644';
	function flickrbox(feed) {
		var at = 0,
			max;
		$('<div class="popup-overlay" />').appendTo('body').fadeIn(1000);
		$('<div class="popup-box"><div class="popup-wrap"><div class="popup-rewrap"><ul></ul></div></div></div>').appendTo('body').delay(500).fadeIn(1000);
		$('<div class="popup-close"><a href="#" class="tk-omnes-pro">Return to the site</a></div>').appendTo('.popup-box').delay(700).fadeIn(1000);
		$('<div class="popup-arrows"><div class="left"><a href="#"><span>Left</span></a></div><div class="right"><a href="#"><span>Right</span></a></div></div>').appendTo('.popup-box').delay(900).fadeIn(1000);
		$.ajax({ 
			url: 'http://api.flickr.com/services/feeds/photoset.gne?set='+feed+'&nsid=95872064@N04&lang=en-us&format=json&jsoncallback=?', 
			dataType: 'json', 
			async: false,
		    success: function(data) { 		
	
			    data.items.sort(byname);
				$.each(data.items, function(i,item){				
					var img = item.media.m.replace('_m','_b');
					$('<li class="photo" />').html('<img src="'+img+'" />').appendTo('.popup-rewrap ul');	
					if(i==0){
						$('<img />').css({'position':'absolute','top':-100000}).attr('src',img).appendTo('body').load(function(){ 
							imgheight = $(this).height(),
							imgwidth =  $(this).width();	
						});						
					}	
				});
				
			}
		});
		
		$('.popup-close a').on('click', function(e){
			e.preventDefault();
			$('.popup-close, .popup-box, .popup-overlay').fadeOut(1000, function(){ $(this).remove(); });
		});
		$('.popup-arrows a').on('click', function(e){
			e.preventDefault();
			max=$('.popup-rewrap ul li').length;
			if($(this).parent().hasClass('left')){
				if(at==0){
					$('.popup-rewrap').css('margin-left',-800);
					$('.popup-rewrap ul li').eq((max-1)).clone().prependTo('.popup-rewrap ul');
					$('.popup-rewrap').animate({'margin-left':'+=800px'}, 600, 'easeInOutExpo', function(){
						$('.popup-rewrap').css('margin-left','-'+((max-1)*800)+'px');
						$('.popup-rewrap ul li').eq(0).remove();
						at=+max-1;
					});
				} else {
					$('.popup-rewrap').animate({'margin-left':'+=800px'}, 600, 'easeInOutExpo');				
					at--;		
				}
			}	
			if($(this).parent().hasClass('right')){
				if(at==(max-1)){
					$('.popup-rewrap').css('margin-left','-'+((max-1)*800)+'px');
					$('.popup-rewrap ul li').eq(0).clone().appendTo('.popup-rewrap ul');
					$('.popup-rewrap').animate({'margin-left':'-=800px'}, 600, 'easeInOutExpo', function(){
						$('.popup-rewrap').css('margin-left',0);
						$('.popup-rewrap ul li').eq((max+1)).remove();
						at=0;
					});
				} else {
					$('.popup-rewrap').animate({'margin-left':'-=800px'}, 600, 'easeInOutExpo');				
					at++;			
				}
			}	
		});
	}
		
	function tourbox(feed){
		var inside;
		var url = 'http://maps.gstatic.com/m/streetview/?q=&layer=c&z=16&'+feed+'&gl=US&hl=en';
		$('<div id="loading" />').appendTo('body').fadeIn(500, function(){
			$(this).delay(1000).fadeOut(500, function(){ $(this).remove(); });
		});
		$('<iframe src="'+url+'"></iframe>').attr('id','tourbox').appendTo('body').delay(500).fadeIn(100, function(){
			if($('#footer').hasClass('inside')) { inside = true; $('#footer').removeClass('inside'); }
			$('#footer').addClass('tour');
		});
		
		$('<div id="tourclose" class="tk-omnes-pro" />').appendTo('body').delay(500).fadeIn(100);
		$('#tourclose').load('/wp-content/themes/ibr/tour-footer.php');
		$('#tourclose').on('click', '.tour-close a', function(e){
			e.preventDefault();
			$('<div id="loading" />').appendTo('body').fadeIn(500, function(){
				$(this).delay(1000).fadeOut(500, function(){ $(this).remove(); });
			});
			$('#tourbox, #tourclose').delay(500).fadeOut(100, function(){ 
				$(this).remove(); 
				if(inside){ $('#footer').addClass('inside'); } 
			});			
		});
		
		$('#tourclose').on('click', '.tour-links a', function(e){
			e.preventDefault();
			var feed = $(this).attr('href');
			$(this).parent().parent().parent().find('.on').removeClass('on');
			$(this).parent().addClass('on');
			$("#tourbox").attr('src','http://maps.gstatic.com/m/streetview/?q=&layer=c&z=16&'+feed+'&gl=US&hl=en');
		});

	}
	
	
	$('#secondary .photo a').on('click', function(e){
		e.preventDefault();
		flickrbox(mainset);
	});
	
	$('.photo-button a, .plan-button a').on('click', function(e){
		e.preventDefault();
		var feed = $(this).attr('href');
		flickrbox(feed);
	});
	
	$('.tour-button a').on('click', function(e){
		e.preventDefault();
		var feed = $(this).attr('href');
		tourbox(feed);
	});
		
	$('a[title="tour-button-main"], .tour-button-main').on('click', function(e){
		e.preventDefault();
		var feed = 'cid=8106371820694682545&amp;panoid=Xh7-fUK5x_kAAAQIt4KEPA';
		tourbox(feed);
	});
	
	$('.accordion h5 a').click(function(e){
		e.preventDefault();
		if($(this).parent().hasClass('toggle')) {
			$(this).parent().removeClass('toggle').parent().animate({'height':32}, 600, 'easeOutExpo');			
		} else {
			var newheight = $(this).parent().parent().find('.accordion-content').height();
			$(this).parent().addClass('toggle').parent().animate({'height':(newheight+100)}, 600, 'easeOutExpo');
		}
	});
	
	$('#secondary .video a').on('click', function(e){
		e.preventDefault();
		$('<div class="popup-overlay" />').appendTo('body').fadeIn(1000);
		$('<div class="popup-video"><div class="popup-video-playing" /><div class="popup-video-list"><ul class="clearfix" /></div></div>').appendTo('body').delay(500).fadeIn(1000);
		$('<div class="popup-close"><a href="#" class="tk-omnes-pro">Return to the site</a></div>').appendTo('.popup-video').delay(700).fadeIn(1000);
	
		var feed = "https://gdata.youtube.com/feeds/api/users/ibisbay/uploads?alt=json";
		$.ajax({
			url: feed,
			async: false,
		}).done(function(data){
			$.each(data.feed.entry, function(i, item){
				link = item.id.$t.slice(-11);
				img = item.media$group.media$thumbnail[1].url;
				if(i==0) $('<iframe id="main-video" width="800" height="450" src="https://www.youtube.com/embed/'+link+'?rel=0" frameborder="0" allowfullscreen />').appendTo('.popup-video-playing').fadeIn(500);
				$('<li />').html('<a href="'+link+'" class="video-link"><img src="'+img+'" /></a>').appendTo('.popup-video-list ul');
				$('.popup-video-list ul li').eq(0).find('a').addClass('on');
			});
		});
		
		$('.video-link').on('click', function(e){
			e.preventDefault();
			$(this).addClass('on').parent().siblings().find('a').removeClass('on');
			goto = $(this).attr('href');
			$('#main-video').attr('src','https://www.youtube.com/embed/'+goto+'?rel=0"');
		});
		$('.popup-close a').on('click', function(e){
			e.preventDefault();
			$('.popup-close, .popup-video, .popup-overlay').fadeOut(1000, function(){ $(this).remove(); });
		});
	});
	
	$('#secondary .weather a').on('click', function(e){
		e.preventDefault();
		if($(this).parent().hasClass('on')) {
			$(this).parent().removeClass('on');
			$('.weather-popup').fadeOut(500, function(){ $(this).remove(); });					
		} else {
			$(this).parent().addClass('on');
			$.ajax({
	 			url: 'http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2233040%22&format=json',
	 			async: false
	 		}).done(function(data){
	 			var html;
	 			html = '<div class="close"><a href="#">X</a></div>';
	 			html += '<img src="http://l.yimg.com/a/i/us/we/52/'+data.query.results.channel.item.condition.code+'.gif"/>';
				html += '<h2>Currently</h2>';
	 			html += '<span>'+data.query.results.channel.item.condition.text+', '+data.query.results.channel.item.condition.temp+'</span>';
	 			html += '<div class="forecast"><h3>Forecast</h3>';
	 			html += '<strong>'+data.query.results.channel.item.forecast[0].day+'</strong>';
	 			html += ' - '+data.query.results.channel.item.forecast[0].text+'<br />';
	 			html += 'High: '+data.query.results.channel.item.forecast[0].high+', Low: '+data.query.results.channel.item.forecast[0].low+'<br /><br />';
	 			html += '<strong>'+data.query.results.channel.item.forecast[1].day+'</strong>';
	 			html += ' - '+data.query.results.channel.item.forecast[1].text+'<br />';
	 			html += 'High: '+data.query.results.channel.item.forecast[1].high+', Low: '+data.query.results.channel.item.forecast[1].low+'';
	 			html += '</div>';
				$('<div class="weather-popup tk-omnes-pro" />').html(html).appendTo('#secondary .weather').fadeIn(500);
	 		});
 		}
 		$('.weather-popup .close a').on('click', function(e){
 			e.preventDefault();
 			$('#secondary .weather').removeClass('on');
 			$('.weather-popup').fadeOut(500, function(){ $(this).remove(); });	
 		});
 		 	
	});
	

});