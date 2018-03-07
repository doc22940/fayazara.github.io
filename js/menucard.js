setInterval(function() {
    $("#call_icon").addClass("animated tada");
    setTimeout(function() {
        $("#call_icon").removeClass("animated tada");
    }, 2000);
}, 3000);
$(document).ready(function() {
    $("#mapMark").click(function(event) {
    	$('html, body').animate({
        scrollTop: $("#mapQ").offset().top-75
    }, 700);
    });

});