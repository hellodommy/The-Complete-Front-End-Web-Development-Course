$(document).ready(function() {
    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        console.log("hi");
        var submenu = $(this).parent().find('.submenu')
        submenu.addClass('active');
        $('.profile-menu').on('mouseleave', function() {
            submenu.removeClass('active');
        })
    })
})