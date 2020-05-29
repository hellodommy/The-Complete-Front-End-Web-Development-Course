# More Javascript Concepts

## Arrays

- Numerically-indexed list of items.
- Multidimensional array: array with arrays inside of it.

`var arrayname = [item1, item2, ...]`

- Array can be logged to the console, and it can be expanded to view each index elements.
- `pop()` will remove and return the last item in the array.
- `push()` will add onto the array from the back.
- Use `arrayname[index]` to access an element at a specific index of the array.
- `arrayname.length` to get the length (number of elements) of the array.
- Use `arrayname.forEach(function)` to perform the function on each element of the array.

`hobbies.forEach(function(item, index) {`
`    console.log("I like ", item, index);`
`})`

- To remove an item from the front of an array, use `shift`.
- To add to the beginning, use `unshift`.
- To find the index of a specific element, use `arrayname.indexOf(element name)`.
- To remove certain elements, use `splice`.
  1. Index to add/remove items.
  2. Number of items to remove (if set to 0, nothing is removed).
  3. New items to be added to the array.
- To find if an item is in the array, use predicate `arrayName.indexOf(element name) > -1` (basically if it is in the array, it will have an index number). 

## Textareas and getting the value of inputs

1. In HTML, put `<input class="my-input">`.
2. In Javascript, put `var customText = document.getElementsByClassName("my-input");`. Whatever we input into the box is stored in customText.
3. To access it, use `customText[0].value`.

- `<textarea>` is a large input field for text. It is multi-line and follows different rules.

  `<textarea placeholder="Your message here">whatever here will be prefilled into the text area</textarea>`

  - To disable resizing of the text area, set the property `resize: none;` in CSS.

- To prefill an input, set the `value` property to whatever you want to be inside.

  `<input class="my-input" value="whatever here will be prefilled">`

- `innerText` prints out only the text, `innerHTML` prints out the code behind it.

## Functions - parameters and return values

