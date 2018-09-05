
$( ".navshow" ).click(function() {
    $( ".sidebar" ).toggle( "slide" );
});
$( ".closenav" ).click(function() {
    $( ".sidebar" ).toggle("slide");
});

$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() > 768) {
            // if larger or equal
            $('.sidebar').show();
        } else {
            // if smaller
            $('.sidebar').hide();
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});