# Getting Started with jQuery

## jQuery Setup

- jQuery is a series of functions - we can write quick code in jQuery.
 
1. Go to [jQuery.com](https://jquery.com/).
2. Copy the link address of the compressed jQuery.
3. In the HTML file, above the main script, paste the following:
   `<script src="copied link"></script>`
4. In **main.js**, type `$(document).ready(function(){...});`.
   - Javascript document is converted to a jQuery object - we can do jQuery stuff to the document.
   - Whatever is in the `ready()` call will run once the document is ready.
   - All our code will be written inside that function.
5. Type in an alert to see if it is working (eg. `alert("Loaded")`).


## Targeting elements

- In Javascript, we use `document.getElementById('id name').innerHTML = "this is my text";`.
- In jQuery, we use `$('#id name').html("this is my text");`.
  - To target a class, we use `.class name` instead.
  - To set the value, use `.val("new input val")`.
    - This is equivalent to Javascript `.value = "new input val"`.
- Note that `getElementsByClassName` returns an array, we need to index `[0]` to get the value. 

## Event handling

- `console.log` the same object in *vanilla Javascript* and *jQuery*.

    `var el = document.getElementById('text');`

    `console.log("EL in Vanilla JS: ", el);`

    `console.log("El in jQuery: ", $(el));`

- Notice they are very different in the console.

- In Javascript, we would add an event listener to call a function once a button is clicked.

    `document.getElementById('go-button').addEventListener('click', alertMe);`

    `function alertMe() {...}`

- In jQuery, we can do the following:

    `$('#go-button').on('click', function() {`
    
    `    everything here will be executed once the button is clicked`
    
    `});`

    - To listen for a hover, `on` can be changed to `hover`, and it will only take in one parameter.

        `$('#go-button').hover(function() {`

        `    everything here will be executed once the button is clicked`

        `});`

    - To listen for when the mouse is over the button,

        `$('#go-button').on('mouseenter', function() {`

        `    everything here will be executed once the button is clicked`

        `});`

        - To listen for the mouse leaving, change to `mouseleave`. There is also `mouseup` and `mousedown`.

## Dropdown menus

    <ul class="profile-menu">
        <li><a class="profile-menu-trigger" data-trigger="dropdown" href="#">Logged in as myself</a></li>
        <ul class="profile-submenu submenu">
            <li><a href="#">My account</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </ul>

-  Currently the whole list is displayed. We want the submenu to appear only when we hover over the "logged in as ...".

    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        var submenu = $(this).parent().find('.submenu')
        submenu.addClass('active');
    })

- Now, this will make the submenu appear when you mouse over the "logged in as...". However the submenu does not close when you move away. We need to create another event handler.
- Add the following to inside the function above (below add `active` class).

    $(this).on('mouseleave', function() {
        submenu.removeClass('active');
    })

- Now, when your mouse moves away from "logged in as...", the menu will disappear. However it dispapears when we are still trying to access the submenu elements.
- Not sure what the instructor is doing :( very confused

    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        console.log("hi");
        var submenu = $(this).parent().find('.submenu')
        submenu.addClass('active');
        $('.profile-menu').on('mouseleave', function() {
            submenu.removeClass('active');
        })
    })

- Make sure there is a path from menu item to submenu by adjusting padding, etc.