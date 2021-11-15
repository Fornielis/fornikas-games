$(function(){
	$('.banner').cycle({
		fx:'turnRight'
	});
});

$(function(){
	$('.cat-01').cycle({
		fx: 'turnDown',
		timeout: 1000
	});
});

$(function(){
	$('.cat-02').cycle({
		fx: 'turnLeft',
		timeout: 1500
	});
});

$(function(){
	$('.cat-03').cycle({
		fx: 'turnUp',
		timeout: 1500
	});
});

$(function(){
	$('.cat-04').cycle({
		fx: 'turnRight',
		timeout: 1500
	});
});

function teste(){
	document.getElementById('menu_texto_icon').top= "100px"
}

