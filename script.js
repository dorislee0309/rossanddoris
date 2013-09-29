$('.post-button').click(function() {
	what_the_user_typed = $('textarea#post').val();
	$('#tweet').prepend('<div class="tweetcell"><p>' + what_the_user_typed + '</p></div>');
	$('textarea#post').val('');
});