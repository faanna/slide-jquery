// 제이쿼리 변수 설정
var $panel_li = $('.panel>li');
var $navi_li = $('.navi>li');
var $navi_li_a = $navi_li.children('a');
var $prev = $('.prev');
var $next = $('.next');
var len = $panel_li.length;

var active_index = 0;

$next.on('click', function () {
	var current_index = $panel_li.filter('.on').index();
	var next_index;
	if (current_index != len - 1) {
		next_index = current_index + 1;
	} else {
		next_index = 0;
	}

	active_index = next_index;

	$panel_li
		.filter('.on')
		.stop()
		.animate({ left: '-100%' }, 500, function () {
			$(this).removeClass('on').hide();
		});
	$panel_li
		.eq(active_index)
		.show()
		.css({ left: '100%' })
		.animate({ left: '0%' }, 500, function () {
			$(this).addClass('on');
		});
	$navi_li_a.removeClass('on');
	$navi_li.eq(active_index).children('a').addClass('on');
});

$prev.on('click', function () {
	var current_index = $panel_li.filter('.on').index();
	var prev_index;
	if (current_index != 0) {
		prev_index = current_index - 1;
	} else {
		prev_index = len - 1;
	}

	active_index = prev_index;

	$panel_li
		.filter('.on')
		.stop()
		.animate({ left: '100%' }, 500, function () {
			$(this).removeClass('on').hide();
		});
	$panel_li
		.eq(active_index)
		.show()
		.css({ left: '-100%' })
		.animate({ left: '0%' }, 500, function () {
			$(this).addClass('on');
		});
	$navi_li_a.removeClass('on');
	$navi_li.eq(active_index).children('a').addClass('on');
});
