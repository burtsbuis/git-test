// carousel functionality
$(function() {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

// Reserve Campsite modal pop-up on-click event
$(function() {
    $('#reserveButton').click(function(){
        $("#reserveModal").modal();
    });
});

// Login modal pop-up on-click event
$(function() {
    $('#loginButton').click(function(){
        $("#loginModal").modal();
    });
});