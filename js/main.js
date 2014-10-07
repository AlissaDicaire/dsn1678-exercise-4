var $win =$(window);
var $sun =$('.sun');
var $sunSection =$('.sun-section');
var $dipperSection =$('.dipper-section');
var $dipper =$('.dipper');
var $shipSection =$('.ship-1-section');
var $ship =$('.ship-1');
var $ship2 =$('.ship-2'); 
var $ship3Section =$('.ship-3-section');

$win.on('scroll',function (){
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' +scrollPos / 5 + 'deg)');
	$sunSection.css('background-postion', 'center ' + scrollPos / 3 + 'px');		
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' }); 

$shipSection.waypoint(function () {
	$ship.addClass('js-ship-fade');
}, { offset: '50%' });

$ship3Section.waypoint(function () {
	$ship2.addClass('js-ship2-fade');
}, { offset: '50%' });
