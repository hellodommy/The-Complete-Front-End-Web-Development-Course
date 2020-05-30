$(document).ready(function() {

    $('#main').find('p').addClass('test')

    console.log($('.context-menu a').first().text());
    console.log($('.context-menu a').last().text());
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

    $('textarea').focusin(function() {
        console.log("Focused in on the textarea");
    })

    $('textarea').focusout(function () {
        console.log("Focused out on the textarea");
    })


    
    function checkEmail(el) {
        if ($(el).val().indexOf('@') > -1 && $(el).val().indexOf('.') > -1) {
            $('.status').html("Valid email");
        } else {
            $('.status').html("Invalid email");
        }
    }

    $('input[name=email]').focusout(checkEmail);

    $('p').each(function() {
        console.log($(this).text());
    })

})