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