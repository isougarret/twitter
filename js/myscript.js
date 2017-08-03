var tweet = function(text){
	this.text = text
}

function mostrarTuit(tuit){
	$('#zero').html('')
	$('#tuits').prepend('<div class="cuadro-tweet"><div class="text-tweet">'
							+tuit.text
							+'<br><div class="likeable glyphicon glyphicon-heart">'
								+'<div class="contador">0</div>'
							+'</div>'
							+'<div class="basurero glyphicon glyphicon-trash"></div>'
						+'</div></div>')
}

$('#boton').click(function(e){
	e.stopPropagation();
	var text = $('#texto').val();
	var nuevo = new tweet(text);
	mostrarTuit(nuevo)

	text=''
	$('#texto').val(text)

})

$('#tuits').on('click','.likeable',function(e){
		$(this).find('.contador').html(parseInt($(this).find('.contador').html()) + 1)
		$(this).find('.contador').css("color","rgb(48,68,92)")
});

$('#tuits').on('click','.basurero',function(e){
		$(this).parent('.text-tweet').parent('.cuadro-tweet').fadeOut();
});


	