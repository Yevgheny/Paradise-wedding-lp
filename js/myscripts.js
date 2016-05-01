window.onload = function() {
	H5F.setup(document.getElementsByTagName('form'));
}

$(function(){
   $('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   }); 
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});