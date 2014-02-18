console.log('\'Allo \'Allo!');

$(document).ready(function() {
	$('.typekit-badge').hide();

	/*sidebar decs.*/
	$('.works ul li a').mouseenter(function() {
		$(this).siblings('p').stop().show(200);
	});

	$('.works ul li a').mouseleave(function() {
		$(this).siblings('p').stop().hide(200);
	});

    var mySwipe = Swipe(document.getElementById('slider'), {
        speed: 400,
        auto: 4000,
        continuous: true,
    });

    $('.page-slider .prev').click(function() {
        mySwipe.prev();
    });

    $('.page-slider .next').click(function() {
        mySwipe.next();
    });
});

/* sidebar */
var snapper = new Snap({
    element: document.getElementById('content'),
    disable: 'right',
    transitionSpeed: 0.2
});   

$('.menu').click(function() {
    snapper.open('left');
    $('.menu').hide();
});

$('.snap-content').click(function() {
	if( snapper.state().state === "left" ){
        snapper.close();
        $('.menu').delay(200).show(0);
    }
});

$('.close-snap').click(function() {
	if( snapper.state().state === "left" ){
        snapper.close();
        $('.menu').delay(200).show(0);
    }
});

