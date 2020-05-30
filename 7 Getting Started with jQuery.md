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
- Look for jQuery API for more ideas.

## Multiple targets, events, and attr method.

- Say we have 3 buttons.

    `<button id="targetOne">Target 1</button>`

    `<button id="targetTwo">Target 2</button>`

    `<button id="targetThree">Target 3</button>`

- For multiple targets, separate them by a comma.

    $('#targetOne, #targetTwo, #targetThree').on('click', function(e) {
        console.log(e);
    });

- `e` stands for event. Look at the console after clicking each target to see what it is.
  S.Event {originalEvent: MouseEvent, type: "click", target: button#targetTwo, currentTarget: button#targetTwo, isDefaultPrevented: ƒ, …}

- We can get attributes of an element by using `attr` (it must first be converted to a jQuery object).

    $('#targetOne, #targetTwo, #targetThree').on('click', function(e) {
        var el = $(e.currentTarget);
        var action = el.attr('id');
        if (action == 'targetOne') {
            console.log("target 1 is pressed");
        } else if (action == 'targetTwo') {
            console.log("target 2 is pressed");
        } else if (action == 'targetThree') {
            console.log("target 3 is pressed");
        }
    });

- `action` will return the id of the button that is pressed.
- Now a specific message will log to the console, depending on the button that is pressed.

## Prepend, append and HTML

Now we have a `textarea`.

    <textarea class="text" placeholder="Type something here"></textarea><br>

- To retrieve the text inside, use

    var content = $('.text').val();

- Log to the console to check that it is getting the value.
- To **prepend**, `$('#main').prepend(content);`.
  - `$('#main').prepend('<a href="#"' + content + '</a>');` to create a link.
- To **append**, `$('#main').append(content);`.
- To **replace**, `$('#main').html(content);`.

## preventDefault

- To prevent the default behaviour.

Say we have a link `<a href="https://google.com" target="_blank">google</a><br>`

- To target in jQuery, use `$('[href="http://google.com"]');` (selecting an item by its attributes).
- On click, we pass in the function with event as a parameter.
  - Log to the console to make sure it is targetting the link correctly.
- To prevent the link from opening when we click the link, type `event.preventDefault()` in the function.
  - Using `return false` will also have the same effect.

## event.which and switch properties

    $(document).on('click', function(event) {
        console.log(event);
    })

- This will detect when you click anywhere on the document. We want to target the right-click event.

    $(document).on('mousedown', function(event) {
        event.preventDefault();
        console.log(event.which);
    })

- Now 1, 2, 3 will be logged to the console, depending if left, middle or right click was pressed.

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

- Now we can target cases where certain mouse type is clicked. We are using a switch statement.
- 