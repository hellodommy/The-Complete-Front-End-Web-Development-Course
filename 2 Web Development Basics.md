# HTML Document Structure

- **Tags** are contained within pointy brackets `<>`.
- Beginning of an HTML document needs to open on an HTML tag that wraps around the entire page.
  - `<html> page stuff </html>`
- Good practice to increment the indent as you open a new tag.
- Other top level tags: `<head>` and `<body>`.
  - Things in `<head>` will not be shown on the page. It simply tells the browser more about the page.
    - Include a `<title>` tag that will appear on the window of your browser.
  - Everything in `<body>` will appear on the screen.
- **Element** includes the opening tag, all the text within it, and the closing tag.

# HTML Elements

## `div` and `span`

- Empty lines in the `<body>` tag will not translate to the web page.
  - Try `Hello` followed by many blank lines, and `world`. Notice that they still appear on the same line on the page.
- To break lines, we can use a `div` element. 
  - Try `<div> Hello, this is a div</div>` and another div. Notice that they are in a different lines now.
  - This is because elements are *full width* by default.
  - It is also called a *block element*.
    - It is however tall it needs to be/however tall we specify it, and the full width.
    - The opposite is an *inline element* which is only as tall and wide as it has to be.
- This brings us to a `span` element.
  - Try `<span>Hello, how</span> followed by <span> are you?</span>` on the next line. Notice that they are able to appear on the same line.
- On your browser, open up *Developer Tools* (`Cmd + Option + I` on Google Chrome).
  - Hover over the different elements to see their full width highlighted in blue (margin is orange and padding is green).
  - Notice `div` cannot take up the entire width of the page - it can only take up the entire width of its parent, `body`.
  - Notice `span` elements are only wide as they need to be.

## `i`, `b`, `p` and `a`
- `i` - italicise words.
- `b` - **bold** words.
- `p` - a block element, like a replacement for `div`. It adds a line break above and below the element for the paragraph. Notice there is no space between `div` elements.
- `a` - creates a link.
  - `<a href = "website link">website name</a>` for hypertext reference.
  - Use `#` if you do not want the link to go anywhere.

## `ul`, `li` and `ol`
- Lists.
- `ul` - the actual list element (unordered list).
  - `li` - for each item in the list (list item).
- `ol` - list element which is *numbered* (ordered list).
- Adding a list element within a list item will create a sublist.
- Lists can be horizontal or dropdown, etc. with CSS or JavaScript.
