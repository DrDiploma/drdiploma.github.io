$(document).ready(function(){
	document.body.style.overflow = 'hidden';
	var secsToFade = 1000;

	$('.mainbody').hide().delay(secsToFade).fadeIn('slow');
	$('#introvid').hide().delay(0).fadeIn('slow');
	setTimeout(function() {
       // $rows.removeClass("pageLoad");
		$('#introvid').remove()

	}, secsToFade);

	// $('#myVideo').hide().delay(11000).remove()
});
