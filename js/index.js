//最外层容器宽度为设备宽高
$('.swiper-container').css({
	'width': $(window).width() + 'px',
	'height': $(window).height() + 'px'
});

var mySwiper = new Swiper('.swiper-container');
//'-webkit-transform: translateX(20px);
//$('#container').css('-webkit-transform','translateY(200px)');
//$('#container').css('-webkit-transform','translateY(200px)');
var cont = document.getElementById("container");
var val = cont.style.webkitTransform;

var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	loop: true,
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
	
	// 如果需要分页器
	//pagination: '.swiper-pagination',

	// 如果需要前进后退按钮
	//nextButton: '.swiper-button-next',
	//prevButton: '.swiper-button-prev',

	// 如果需要滚动条
	// scrollbar: '.swiper-scrollbar',
})

//默认状况下不显示
$('.story .pub_passdown').css('display','none');
$('.story').css('opacity','0');
var story=$('.story');
var btn=$('.button');

btn.each(function () {
	$(this).click(function () {
		console.log($(this).next().next());
		console.log($(this).next().next().hasClass('.story_end'));
		if ($(this).next().next().hasClass('.story_end')) {
			$(this).next().next().css({'height':'100%','opacity':'.5'});
			console.log('has')
		}else{
			$(this).next().next().css({'height':'100%','opacity':'1'});
		}
		$('.story .pub_passdown').css('display','block');
	})
});

story.each(function () {
	$(this).click(function () {
		$(this).css({'height':'0%','opacity':'0'});
		$('.story .pub_passdown').css('display','none');
	});
});