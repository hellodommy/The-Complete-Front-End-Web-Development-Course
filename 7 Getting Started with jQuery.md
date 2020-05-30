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
