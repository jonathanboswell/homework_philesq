$(function(){
	var projects = ['praxis','woodbury', 'mmr', 'felix', 'wtmf','cargo'];

	var pages = {
		'praxis': ['image1URL','image2URL','image3URL'],
		'woodbury': ['image1URL'],
	}

	var page = 'praxis';

	for(var i = 0; i < pages[page].length; i++)
	{
		var imagePath = pages[page][i];
		$('imageContainer').append('<img src="' + imagePath + '">');
	}
});