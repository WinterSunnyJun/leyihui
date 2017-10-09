$(function () {
	
	//选项标题
	$('.content-title-img').hover(function () {
		$(this).addClass('active');
	})
	
	//产品优势
	$('.cpys-title-btn li').click(function () {
		var iNow = $(this).index();
		$('.cpys-content-list li').eq(iNow).show().siblings().hide();
	})
	
	//洗护沐
	$('.xhm-title-btn li').click(function () {
		var iNow = $(this).index();
		$('.xhm-content-list li').eq(iNow).show().siblings().hide();
	})
	
	//纸尿裤
	$('.znk-title-btn li').click(function () {
		var iNow = $(this).index();
		$('.znk-content-list li').eq(iNow).show().siblings().hide();
	})
	
	//检测报告
	$('#test').bxSlider({

			auto: false,

  			autoControls: true,

            minSlides: 1,

            maxSlides: 1,
          });



})