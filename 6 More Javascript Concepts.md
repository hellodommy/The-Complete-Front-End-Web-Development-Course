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