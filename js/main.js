$(document).ready(function() {

    $(document).on('mousedown', function(event) {
        event.preventDefault();
        switch(event.which) {
            case 1:
                console.log("left mouse clicked");
                break;
            case 2:
                console.log("middle mouse clicked");
                break;
            case 3:
                console.log("right mouse clicked");
                break;
        }
        console.log(event.which);
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