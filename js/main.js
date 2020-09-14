
//constants
const currScroll = document.body.scrollTop;
const vh = window.innerHeight;
console.log('your view height is', + vh);



// PAGE DOWN / UP ________________________________________
// down arrow footer 

$('.down').on('click', () => {
  	let documentHeight = document.body.scrollHeight;
	let vh = window.innerHeight;
	let distanceScrolled = $(window).scrollTop();

  	if (distanceScrolled < .8*vh) {
  		$("html, body").animate({ 
			scrollTop: vh }, 1000);
  		console.log('1st happened');
  		} 

  	if (distanceScrolled < 1.8*vh && distanceScrolled > .8 * vh) {
  		$("html, body").animate({ 
			scrollTop: 2 * vh }, 1000);
  		console.log('2nd happened');
  		} 

  	if (distanceScrolled < 2.8*vh && distanceScrolled > 1.8 * vh) {
  		$("html, body").animate({ 
			scrollTop: 3 * vh }, 1000);
  		console.log('3st happened');
  		} 

  	if (distanceScrolled < 3.8*vh && distanceScrolled > 2.8 * vh) {
  		$("html, body").animate({ 
			scrollTop: 4 * vh }, 1000);
  		console.log('4st happened');
  		} 

  	if (distanceScrolled < 4.8*vh && distanceScrolled > 3.8 * vh) {
  		$("html, body").animate({ 
			scrollTop: 0 }, 1000);
  		console.log('the happened');
  		} 
});

// up arrow footer 

$('.up').on('click', () => {
  	let documentHeight = document.body.scrollHeight;
	let vh = window.innerHeight;
	let distanceScrolled = $(window).scrollTop();

  	if (distanceScrolled < .8*vh) {
  		$("html, body").animate({ 
			scrollTop: vh });
  		console.log('1st happened');
  		} 

  	if (distanceScrolled < 1.8*vh && distanceScrolled > .8 * vh) {
  		$("html, body").animate({ 
			scrollTop:  0 }, 1000);
  		console.log('1st to top');
  		} 

  	if (distanceScrolled < 2.8*vh && distanceScrolled > 1.8 * vh) {
  		$("html, body").animate({ 
			scrollTop: vh }, 1000);
  		console.log('2nd to 1st');
  		} 

  	if (distanceScrolled < 3.8*vh && distanceScrolled > 2.8 * vh) {
  		$("html, body").animate({ 
			scrollTop: 2 * vh }, 1000);
  		console.log('3rd to 2nd');
  		} 

  	if (distanceScrolled < 4.8*vh && distanceScrolled > 3.8 * vh) {
  		$("html, body").animate({ 
			scrollTop: 3 * vh }, 1000);
  		console.log('4th to 3rd');
  		} 
});


// notch animation when scrolling: 

$(window).on('scroll', () => {

  	let documentHeight = document.body.scrollHeight;
	let vh = window.innerHeight;
	let distanceScrolled = $(window).scrollTop();

	
	if (distanceScrolled >= -20 && distanceScrolled < .65 * vh) {
		// $('.line1').addClass("line-current");
		$('.line2').removeClass("line-current");
		$('.up').addClass("off")
		console.log('o or top of page');
	}

	
	if (distanceScrolled >= .65 * vh && distanceScrolled < 1.65 * vh) {
		$('.line1').removeClass("line-current");
		$('.line2').addClass("line-current");
		$('.line3').removeClass("line-current");
		$('.up').removeClass("off");
		// $('.up').removeClass("off");
		console.log('one VH');

	}

	if (distanceScrolled >= 1.65 * vh && distanceScrolled < 2.65 * vh) {
		$('.line1').removeClass("line-current");
		$('.line2').removeClass("line-current");
		$('.line4').removeClass("line-current");
		$('.line3').addClass("line-current");
		$('.up').removeClass("off");
		console.log('two VH');
	}


	if (distanceScrolled >= 2.65 * vh && distanceScrolled < 3.65 * vh) {
		$('.line1').removeClass("line-current");
		$('.line3').removeClass("line-current");
		$('.line5').removeClass("line-current");
		$('.up').removeClass("off");
		$('.down').removeClass("off");
		// $('footer img').removeClass('rotate180');
		$('.line4').addClass("line-current");
		console.log('three VH');

	}
	if (distanceScrolled >= 3.65 * vh && distanceScrolled < 4.65 * vh) {
		$('.line1').removeClass("line-current");
		$('.line4').removeClass("line-current");
		$('.line5').addClass("line-current");
		$('.down').addClass("off");
		// $('footer img').addClass('rotate180');
		console.log('four VH');
		
	}
	
});


// clicking DIGITAL MORE BUTTON ("more info" button)
// enter into DIGITAL
$('#more-digital').on('click', () => {
	let vw = window.innerWidth;
	let distanceScrolled = $(window).scrollLeft();

		$('#more-digital').addClass('off');
		$('footer img').addClass('off');
		$('.notch').addClass('off');
	
	// locks horizontal scroll
		$('.current-wrapper').addClass('horizontal-scroll');
		$('.current').addClass('scroll');
		// $('.digital').scrollLeft += 500;
		$('body').addClass('overflowy');



  	// if (distanceScrolled < .8*vh) {
  	// 	$("digital-wrapper").animate({ 
			// scrollLeft: 500 });
  	// 	console.log('what a hoooooy happened');
  	// 	} 

	setTimeout(function() {
		$('.arrow').removeClass('off');
		$('.left-counter').addClass('off');
		$('.right-counter').addClass('off');
		
	}, 500);

});

   

// EXIT from DIGITAL
// back arrow to main menu
$('.arrow').on('click', () => {
	$('#more-digital').removeClass('off');
	$('footer img').removeClass('off');
	$('.arrow').addClass('off');
	
	

	//back to main list;
	$('.current').removeClass('scroll');
	$('.current-wrapper').scrollLeft(0);
	document.getElementById('current-wrapper').scrollLeft += 40;
	//removes horizontal scroll
	$('.current-wrapper').removeClass('horizontal-scroll');
	$('body').removeClass('overflowy');
	//confirms function is working
	console.log("this worksed sooner");
	
	//delayed functions
	setTimeout(function() {
		$('.notch').removeClass('off');
		$('.left-counter').removeClass('off');
		$('.right-counter').removeClass('off');
		console.log('this worked later really?')
		
	}, 1000);
});



// PAGE BARS

$('.line1').on('click', () => {
	$("html, body").animate({ 
			scrollTop: 0 }, 1000);
  		console.log('click bar go to homepage1');

});

$('.line2').on('click', () => {
	$("html, body").animate({ 
			scrollTop: vh }, 1000);
  		console.log('click bar go to homepage2');

});

$('.line3').on('click', () => {
	$("html, body").animate({ 
			scrollTop: 2 * vh }, 1000);
  		console.log('click bar go to homepage3');

});

$('.line4').on('click', () => {
	$("html, body").animate({ 
			scrollTop: 3 * vh }, 1000);
  		console.log('click bar go to homepage4');

});

$('.line5').on('click', () => {
	$("html, body").animate({ 
			scrollTop: 4 * vh }, 1000);
  		console.log('click bar go to homepage5');

});


// AUTO SCROLL 
// window.addEventListener('wheel', function(e) {
// 	let distanceScrolled = $(window).scrollTop();
// 	let vh = window.innerHeight;

// 	if (e.deltaY > 0){
// 		$("html, body").animate({
// 			scrollTop: vh}, 20);
// 	}
// 	if (e.deltaY < 0){
// 		$("html, body").animate({
// 			scrollTop: 0}, 20);
// 		console.log('it worked');
// 	}

// 	console.log(e.deltaY);

// 	if (distanceScrolled < 1.8*vh && distanceScrolled > .8 * vh && e.deltaY > 0 ){
// 		$("html, body").animate({
// 			scrollTop: 2*vh });
// 	}
			
// 	if (distanceScrolled < 2.8*vh && distanceScrolled > 1.8 * vh && e.deltaY > 0 ){
// 		$("html, body").animate({
// 			scrollTop: 3*vh });
// 		}
// 	if (distanceScrolled < 3.8*vh && distanceScrolled > 2.8 * vh && e.deltaY > 0 ){
// 		$("html, body").animate({
// 			scrollTop: 4*vh });
// 		}

// });



	


//auto scroll to next section up and down
//---------------------------------------

//Cancel default scroll.
// document.addEventListener('scoll', function(e) {
//   e.preventDefault();
// });


// Use wheel event to simulate scroll.
// document.addEventListener('wheel', function(e) {
//    e.preventDefault();
  
//   let Vh = window.innerHeight;
  
//   console.log(vh);
  
// // Current scroll.
//   var currScroll = document.body.scrollTop;
  
// // Modify scroll 100 vh
//   if (e.wheelDelta < 0) { // scroll up
//     // var newScroll = currScroll - 100 * Vh;

//   		console.log('this just happened');
//   } else if (e.wheelDelta > 0) { // scroll down
//     var newScroll = currScroll + 100 * Vh;
    
//   } else { // no scroll
//     var newScroll = 0;
//   }
 
//  	console.log( e.wheelDelta, currScroll, newScroll);
 

//   document.body.scrollTop = newScroll;
// });
//-----------------

// var pageHeight = window.innerHeight;

// document.addEventListener('scroll', function(){
//   document.body.scrollTop = 0;
// });

// document.addEventListener('wheel', function(e) {
//   //console.log(e.deltaY);
//   if(e.deltaY > 0) {
//     scrollDown();
//   } else {
//     scrollUp();
//   }
//  }
// );

// function scrollDown() {
//   document.body.style.transform = 'translate3d(0px, -'+ pageHeight + 'px, 0px)';
// }

// function scrollUp() {
//   document.body.style.transform = 'translate3d(0px, 0px, 0px)';
// }

// document.addEventListener('scroll', function(){
//   document.body.scrollTop = 0;
// });

// document.addEventListener('wheel', () => {

//   	let documentHeight = document.body.scrollHeight;
// 	let vh = window.innerHeight;
// 	let distanceScrolled = $(window).scrollTop();


//   	if (distanceScrolled > .1*vh || distanceScrolled < .9*vh) {
//   		$("html, body").animate({ 
// 			scrollTop: vh });
//   		console.log('1st happened');
//   		} 

//   	if (distanceScrolled > .9*vh || distanceScrolled < 1.9 * vh) {
//   		$("html, body").animate({ 
// 			scrollTop: 2 * vh });
//   		console.log('2st happened');
//   		} 

//   	if (distanceScrolled < 2.8*vh && distanceScrolled > 1.8 * vh) {
//   		$("html, body").animate({ 
// 			scrollTop: 3 * vh });
//   		console.log('3st happened');
//   		} 

//   	if (distanceScrolled < 3.8*vh && distanceScrolled > 2.8 * vh) {
//   		$("html, body").animate({ 
// 			scrollTop: 4 * vh });
//   		console.log('4st happened');
//   		} 

//   	if (distanceScrolled < 4.8*vh && distanceScrolled > 3.8 * vh) {
//   		$("html, body").animate({ 
// 			scrollTop: 0 });
//   		console.log('4st happened');
//   		} 
// });


// function scrolling () {
// 	let distanceScrolled = $(window).scrollTop();
// 	console.log('The distance scrolled is: ' + distanceScrolled + " px");
// 	$("body").scrollIntoView(".digital");
	