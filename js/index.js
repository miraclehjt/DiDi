$(function() {
	$('.wrap').css({
		'width': $(window).width() + 'px',
		'height': $(window).height() + 'px'
	});

	//定义图片的外层容器宽高
	$('.bg').css({
		'height': $(window).height() + 'px',
		'width': $(window).width() + 'px'
	});

	//$('.logo img,.wrap .bg_2 .write_2,.bg_3 .xr').css('opacity',1);
	if(parseInt($('.in').css('top')) == 0) {
		$(".logo img").css("opacity", 1);
		setTimeout(function() {
			$('.write_1 img').css('opacity', 1);
		}, 500);
	} else {
		$(".logo img").css("opacity", 0);
	}

	var index = 1;
	$('.in').swipeUp(function() {
		$(this).css({
			'top': -$(window).height() * index + 'px'
		});
		index++;
	});
	$('.in').swipeDown(function() {
		if(index <= 0) {
			$(this).css('top', 0);
		} else {
			$(this).css({
				'top': -($(window).height() * index - $(window).height()) + 'px'
			});
		}
		index--;
	})

});