
// $(window).scroll(scrolled);

// () => {
//   // $('html, body').animate({
//   //   scrollTop: window.scrollBy(0, vhPixels)});
// 	let pageHeight = window.innerHeight;	
// 	$("html, body").animate({ scrollTop: pageHeight });
//   	console.log('this worked');



var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

document.body.scrollHeight


// $(window).on('click', () => {
//   // $('html, body').animate({
//   //   scrollTop: window.scrollBy(0, vhPixels)});
//   	let documentHeight = document.body.scrollHeight
// 	let vh = window.innerHeight;
// 	let distanceScrolled = $(window).scrollTop();	
// 	$("html, body").animate({ 
// 			scrollTop: 2 * vh });
//   	console.log('document total height' , +  documentHeight , 'pxls');
//   	console.log('view height' , +  vh , 'pxls');
//   	// alert(document.body.scrollHeight);

// 	});


?

// if scroll top is >20% pageHeight or mess then 80%
	//scroll to the next (5vh)

if(distanceScrolled >= 540) {
		$('.sticky-nav-wrapper').addClass('scrolled');
	} else {
		$('.sticky-nav-wrapper').removeClass('scrolled');
	}

	if(distanceScrolled >= 580) {
		$('.label-1').addClass('fade-in');
	} else {
		$('.label-1').removeClass('fade-in');
	}

	if(distanceScrolled >= 740) {
		$('.label-2').addClass('fade-in');
	} else {
		$('.label-2').removeClass('fade-in');
	}

	if(distanceScrolled >= 880) {
		$('.label-3').addClass('fade-in');
	} else {
		$('.label-3').removeClass('fade-in');
	}

	if(distanceScrolled >= 1350) {
		$('.butterfly').addClass('animated');
	} else {
		$('.butterfly').removeClass('animated');
	}



//-----------------

// function scrolling () {
// 	let distanceScrolled = $(window).scrollTop();
// 	console.log('The distance scrolled is: ' + distanceScrolled + " px");
// 	$("body").scrollIntoView(".digital");
	
// };

// $("footer").on('click', scrolling);

//------------------

//  window.scroll () 
// function name ()  {
//     var scroll = $(window).scrollTop();
//     if(scroll > position) {
//         console.log('scrollDown');
//         $('div').text('Scrolling Down Scripts');
//     } else {
//          console.log('scrollUp');
//          $('div').text('Scrolling Up Scripts');
//     }
//     position = scroll;
// };


// $(window).scroll(name);



	// if (distanceScrolled >= 10) {
	// 	$(".digital")[0].scrollIntoView();
	// } else { 

// 