$('#nyc').change(background);
$('#sf').change(background);
$('#la').change(laBackground);
$('#austin').change(austinBackground);
$('#sydney').change(sydneyBackground);

function background(city)
{
	if(city=='nyc') {
		$('body').css('background-image','url(images/nyc.jpg)');	
	} else if(city=='sf') {
		$('body').css('background-image','url(images/sf.jpg)');
	} else if(city=='la') {
		$('body').css('background-image','url(images/la.jpg)');
	} else if(city=='austin') {
		$('body').css('background-image','url(images/austin.jpg)');
	} else if(city=='sydney') {
		$('body').css('background-image','url(images/sydney.jpg)');
	}
}

function nycBackground() {
    background('nyc');
}

function sfBackground() {
    background('sf');
}

function laBackground() {
    background('la');
}

function austinBackground() {
    background('austin');
}

function sydneyBackground() {
    background('sydney');
}

$('#city-type').change(function(){
	console.log('CHANGED', this);
	background($(this).val())
});





// $(document).ready(function() {
// 	console.log('ready');
// 	$('#city-type').change(function() {
// 		console.log('CHANGED');
// 	});
// 	$('#nyc').select(function () {
// 		console.log('clickNYC');
// 		nycBackground();
// 	});
// 	$('#sf').select(sfBackground);
// })
