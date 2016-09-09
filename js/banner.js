$(function(){

	var i = 0;

	// 将第一张图片复制到最后一张图片之后
	var clone = $(".m-banner .img > li").first().clone();
	$(".m-banner .img").append(clone);

	// 动态添加圆点序号
	var size = $(".m-banner .img > li").size();
	for (var j = 1; j <= size-1; j++){
		$(".m-banner .num").append("<li>" + j + "</li>" )
	}

	$(".m-banner .num > li").first().addClass("cur");

	// 手动轮播
	$(".m-banner .num > li").mouseover(function(){
		var index = $(this).index();
		i = index;
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".m-banner .img").stop().animate({left: -index*730}, 500);
	});

	// 自动轮播
	var t = setInterval(moveR, 2000);

	// 鼠标悬停在图片区域自动轮播暂停，鼠标离开图片区域自动轮播继续
	$(".m-banner").hover(function(){
		clearInterval(t);
	}, function(){
		t = setInterval(moveR, 2000);
	});

	// 核心向左运动函数
	function moveL(){
		i--;
		if (i == -1){
			$(".m-banner .img").css({left: -(size-1)*730});
			i = size-2;
		}
		$(".m-banner .num > li").eq(i).addClass("cur").siblings().removeClass("cur");
		$(".m-banner .img").stop().animate({left:-i*730},500);
	}

	// 核心向右运动函数
	function moveR(){
		i++;
		if (i == size){
			$(".m-banner .img").css({left: 0});
			i = 1;
		}
		if (i == size-1){
			$(".m-banner .num > li").eq(0).addClass("cur").siblings().removeClass("cur");
		}else {
			$(".m-banner .num > li").eq(i).addClass("cur").siblings().removeClass("cur");
		}
		$(".m-banner .img").stop().animate({left:-i*730},500);
	}

	// 点击左右按钮控制轮播切换
	$(".m-banner .arrow-up").click(function(){
		moveL();
	});

	$(".m-banner .arrow-down").click(function(){
		moveR();
	});
});