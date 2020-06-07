# Javascript for Beginners

## Intro to Javascript

- In your root directory, create a folder **js** and a file **main.js** inside it.
- To include it in the HTML file, include the line at the end of your file (right before the `body` tag ends).

`<script src="js/main.js"></script>`

- To write *inline Javascript* in the HTML file, use the `<script>` element and wrap it around eg. `document.write("Hello world");`
  - We are calling the `write` method on the `document` object.
  - `Hello world` will appear on the page.

## Alerts and Console Logging

- Create **comments** in your `.js` file by typing `/**...*/` for multi-line comments.
  - `//` for single-line comments.
- End lines with a semi-colon `;`.
- We can use the built-in `alert("blah blah)` function.
  - A pop-up will appear on the page with the specified message.
- Using `console.log("blah")` will appear in the console of the page (accessible through Inspect Element on Chrome).
  - You can also use the console on Chrome to run things.

## Integers, strings, and variables

- Create a varaible using `var variable_name = variable_value`.
  - Variable values can be reassigned.
  - You can declare variables without assigning a value to it as well. The value will be left as *undefined*.
- You can do mathematical operations on numbers.
  - To increment, use `variable++`. To decrement, use `variable--`.
  - `+=` and `-=` applies.
- Concatenate strings using `+` or `,`.
  - By using a comma, a space is added between automatically.

## Boolean operators

- `true` or `false`.

## Comparing values

- `a == b` checks if values are equal.
  - `a = b` to assign values.
- `a != b` checks if they are **not equal**.
- Other comparisons can be used as well, eg. `>`, `<`, `<=`, `>=`.

## If statements

Syntax: `if (predicate) { do something } else { do something else }`

An extra check: `else if (predicate)`.

## For loops

- Does something repeatedly unless a threshold is met.

Syntax: `for (var i = initial; i < limit; i++) { blah }`

## Defining functions

- Not run, but it can be referenced to run.
- It is only run when it is called!

Syntax: `function name(param) {...}`

## Event handling

- Create a button in HTML.

`<button id="go-button">GO</button>`

- Right now when you click it, nothing happens.
- Clicking on it now is an *event*.
- Create a function in Javascript that logs to the console. Still, nothing is happening because the function and the button are *not linked*.

2 Ways to Link
1. Add a `onclick` property to the HTML button.
   `onclick="javascript_function_call"`
2. In Javascript, type the following line.
   `var btn = document.getElementById("button_id_name")`
  - Then add an *event listener*: `btn.addEventListener("click", buttonClicked)`. Clicking on the button many times will log to the console many times.
    1. First arg is the event we are listening for.
    2. Second arg is the actual function that is called.
  - To make sure that the button can only be pressed once, add the line `btn.removeEventListener("click", buttonClicked)` inside the function. Now, clicking multiple times will only log to the console on the first time.

## Setting an element's innerHTML

1. Create a `div` text with an `id` assigned.
2. Under the same function as in the previous step, add the following line.
   `document.getElementById("id_name").innerHTML = "text to replace"`.
3. Now, clicking on the button will change the `div` text to the new text.

- `console.log()` to see what `document.getElementById("id")` and `document.getElementById("text").innerHTML` are.