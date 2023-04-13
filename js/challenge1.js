console.log("challenge1.js loaded");


// Get the h1 element
var h1 = document.querySelector('h1');

// Add an event listener to the h1 element that fires when the page loads
window.addEventListener('load', function() {
    // Change the text-align property to center
    h1.style.textAlign = 'center';
    h1.style.color = 'purple';
});

document.addEventListener('dblclick', function() {
    // Get the current time
    var now = new Date();
    var timeString = now.toLocaleTimeString();

    // Show an alert with the current time
    alert('The current time is ' + timeString);
});


var toggle = document.getElementById('toggle');
var emailBox = document.getElementById('emailBox');

		// Add an event listener to the checkbox input for click events
toggle.addEventListener('click', function() {
	// If the checkbox is checked, show the email field
	if (toggle.checked) {
		emailBox.classList.remove('hidden');
	}
	// If the checkbox is unchecked, hide the email field
	else {
		emailBox.classList.add('hidden');
	}
});
