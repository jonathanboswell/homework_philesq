$(function(){
	var projects = ['praxis','woodbury','mmr','felix','wtmf','cargo'];

	var pages = {
		'praxis': ['images/praxis3.png','images/praxis2.png'],
		'woodbury': ['images/woodbury.jpg','images/woodbury2.jpg','images/woodbury3.jpg','images/woodbury4.jpg'],
		'mmr': ['images/mmr.gif','images/mmr2.png','images/mmr3.png','images/mmr4.png','images/mmr5.png','images/mmr6.png'],
		'felix': ['images/felix.gif','images/felix2.png'],
		'wtmf': ['images/wtmf.png','images/wtmf2.png','images/wtmf3.png','images/wtmf4.png','images/wtmf5.png'],
		'cargo': ['images/cargo.gif','images/cargo2.png','images/cargo3.png'],
	}

	var page = window.location.hash.substring(1);
	page = (page) ? page:'praxis';
	
	console.log(page);

	for(var i = 0; i < pages[page].length; i++)
	{
		var imagePath = pages[page][i];
		console.log(imagePath);
		$('#projectsContainer').append('<img src="./' + imagePath + '" class="img-responsive">');
	}

});