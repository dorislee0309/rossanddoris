$(document).ready(function() {
	$('.post-button').click(function() {
		what_the_user_typed = $('textarea#post').val();
		$('div#tweet').prepend('<div class="tweetcell"><p>' + what_the_user_typed + '</p></div>');
		$('textarea#post').val('');
	});
})

