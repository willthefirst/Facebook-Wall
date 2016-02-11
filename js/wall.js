$(document).ready(function() {

	// 1: Select the button that the user clicks
	$('??????').click(function() {
		if ($('#message').val().trim() != "") {

			var element = "<br/><div class='row'><div class='col-md-2'><img src='http://i.imgur.com/87kIXSN.jpg'></div>" +
						  "<div class='col-md-10'>" + $('#message').val().trim() + "</div></div>";

			// 2: Prepend the variable named "element" to the #wall div
			$('#wall').??????(element);

			// 3: Change the background-color of each new facebook post

			// 4: Add a counter to the page that displays the number of posts that have been submitted

		}
	});
});
