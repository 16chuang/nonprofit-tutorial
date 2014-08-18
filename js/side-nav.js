$(document).ready(function () {
//  $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) { // all links whose href that start with #
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () { // unhighlight all other links
            $(this).removeClass('selected');
        })
        $(this).addClass('selected'); // highlight clicked on link

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-50
        }, 500, 'swing', function () {
            window.location.hash = target;
//          $(document).on("scroll", onScroll);
        });
    });
});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#side-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-50 <= scrollPos && refElement.position().top + refElement.height() + 50 >= scrollPos) {
            $('#side-nav ul li a').removeClass("selected");
            currLink.addClass("selected");
        }
        else{
            currLink.removeClass("selected");
        }
    });
}