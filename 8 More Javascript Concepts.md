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

- Whatever parameter you pass into the function will be available inside the function.
- Variables created inside a function will only be available inside the function.
- Return values from the function will not show on the console unless it is logged with `console.log()`.

## Multiple parameters in functions

- Multiple parameters can be specified with a comma `,`.

## Flexible function parameters

- You can have nested functions.
  - It can only be called within the parent function (usual scoping rules apply).
- You can pass in an object as an argument.

  Say we have the function `function eg(params) {...}`.

  In our function call, we have eg({first: p1, second: p2})`.

  Then in the function `eg`, we can access the invididual parameters by using `params.first` and `params.second` to get `p1` and `p2` respectively.

## Exercise - find the missing number

Having a unordered array of numbers, when we do `array.sort()` on it, the numbers are not sorted (it works on strings though).

To sort it in ascending order, we pass in the following function into the `sort()` call: `function(a, b) { return a - b; }`.

Task: Create an array with a range of numbers (eg. 1 to 20) with 1 number missing. Let the array be unordered. Use an algorithm to find the missing number.

## Classes explained

- Classes are a blueprint where you can create objects from.
  - Functions can be defined in classes, where each object of that class can use that function.

1. Create the class with `class className {...}`
2. Instantiate the class with `var newObject = new className();`.

## Class constructor, instance variables, and static variables

- Constructor is run every time an instance of the class is created.
- Whatever properties in the instantiation of the class is passed to the constructor.

`new className(p1, p2, p3)` will be passed to the constructor `constructor(p1, p2, p3)`.

- To let other functions in the class use the parameters, use the `this` keyword in the constructor.

  eg. in the constructor, assign `this.p1 = p1` then other functions can start using using `p1`.

- Outside the class, if you assign the entire class a variable, it will be available to all isntances of the class (eg. outside the class declaration, type `className.variableName = something`).
  - It can be called using `instanceName.constructor.variableName`.

## Extending classes

- To allow a class to inherit from another class, use `class childClass extends parentClass {...}`.
- The constructor of the child class can have more parameters.
- To access parameters in the parent class as well, use the `super` keyword (eg. `super(these parameters are in the parent class)`).
  - Extra parameters (unique to child class) can be assigned normally with `this`.

