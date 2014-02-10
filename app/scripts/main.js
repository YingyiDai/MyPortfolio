console.log('\'Allo \'Allo!');

$(document).ready(function() {
	$('.typekit-badge').hide();
});

var snapper = new Snap({
                element: document.getElementById('content'),
                disable: 'right'
            });   