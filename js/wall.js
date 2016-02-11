$(document).ready(function() {

	// 1: Select the button that the user clicks
	$('REPLACE_ME_WITH_A_SELECTOR').click(function() {
		if ($('#message').val().trim() != "") {

			var element = "<br/><div class='row'><div class='col-md-2'><img src='http://i.imgur.com/87kIXSN.jpg'></div>" +
						  "<div class='col-md-10'>" + $('#message').val().trim() + "</div></div>";

			// 2: Prepend the variable named "element" to the #wall div
			$('#wall').REPLACE_ME_WITH_A_JQUERY_PREPEND_METHOD(element);

			// 3: Change the background-color of each new facebook post

			// 4: Replace the image that in each post

			// 5: Append the current date to each post

			// 6: Add a counter to the page that displays the number of posts that have been submitted

		}
	});
});
