$(document).ready(function() {

    $('#text').html("this is my text");

    var el = document.getElementById('text');
    console.log("EL in Vanilla JS: ", el);
    console.log("El in jQuery: ", $(el));

    $('#go-button').on('click', function () {
        alert("Good job!");
    });
})