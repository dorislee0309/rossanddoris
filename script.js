$(document).ready(function() {
	soundFX = $('#SoundFX')
	$('.post-button').click(function() {
		what_the_user_typed = $('textarea#post').val();
		$('nav#right').prepend('<div class="tweetcell"><p>' + what_the_user_typed + '</p></div>');
		$(soundFX.get(0).play());
		$('textarea#post').val('');
	});
})

