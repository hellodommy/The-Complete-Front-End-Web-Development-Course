$(document).ready(function() {

    dQuery(".whatsup").addClass("my friend");

    $(document).on('contextmenu', function() {
        return false;
    });

    $(document).on('mousedown', function(event) {
        event.stopPropagation();

        if (event.which == 3) {

            $('.hidden').hide();

            if ($(event.target).is('img')) {
                $('.hidden').show();
            }

            console.log(event.pageY, event.pageX);
            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });
            $('#context').fadeIn();
            return false;
        }
        $('#context').fadeOut();

    })

    $('[href="https://google.com"]').on('click', function (event) {
        return false;
    })

    $('#targetOne, #targetTwo, #targetThree').on('click', function(e) {
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();
        if (action == 'targetOne') {
            console.log("target 1 is pressed");
            $('#main').prepend(content);
        } else if (action == 'targetTwo') {
            console.log("target 2 is pressed");
            $('#main').append(content);
        } else if (action == 'targetThree') {
            console.log("target 3 is pressed");
            $('#main').html(content);
        }
    });
})