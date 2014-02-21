
$(document).ready(function() {

    // $('a').click(function(){
    //     var href = $(this).attr('href');
    //     var new_window = $(this).attr('target');
      
    //     if (new_window === "_blank") {
    //         window.open(href);
    //         $('.typekit-badge').hide();
    //     }
    //     else {
    //         // do animation
    //         $('body').fadeOut(300, function(){
    //             // go to link when animation completes
    //             window.location=href;
    //             $('.typekit-badge').hide();
    //         })
    //     }

    //     // over ride browser following link when clicked
    //     return false;
    // })

    /* index animation */
    $(".intro h1").animate({
        opacity: 1},
        400, function() {

        $(".intro p").animate({
            opacity: 1},
            400, function() {
                $(".main").animate({opacity: 1}, 400)
        });
    });

    /*page animation */
    $(".page").animate({opacity: 1}, 400)

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

