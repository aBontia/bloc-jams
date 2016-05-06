/* var animatePoints = function() {
    var revealPoint = function() {
                     // #7
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
            
        };   
         
$(window).load(function() {
     // #1
     if ($(window).height() > 950) {
         animatePoints();
     }
     // #2
     var scrollDistance = $('.selling-points').offset().top - $(window).height() + 400;
     // #3
     $(window).scroll(function(event) {
         // #4
         if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
         }
     });
 });
 }
 */
 
 
 
 $(document).ready(function() {
	$('.hero-content h3').click(function(){
		var subText = $(this).text();
		$(this).text(subText + "!");
	});

	var onHoverAction = function(event){
		$(this).animate({'margin-top': '10px'});
	};

	var onHoverOffAction = function(event){
		$(this).animate({'margin-top': '0px'});
	};

	$('.selling-points .point').hover(onHoverAction, onHoverOffAction);
});