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

## `header` and `footer`

- Bad practice to use `div` for everything.
- There are block elements available to arrange content in a better way.
- `header` - used for the name of the site. `div` can be used instead, but it is better practice to use more *appropriate* tags when possible.
- `footer` - used at the bottom at the site as it better describes the content compared to a simple `div`.
- These solve the problem of **`<div>` soup** where front-end web developers wrap every HTML element they possibly can in enough `<div>` elements to make your eyes bleed [source](https://www.chillybin.com.sg/would-you-like-another-bowl-of-div-soup/).
- By default, HTML will only recognise the first space character. Putting multiple spaces together will not result in a large space on the page. Instead, use `&nbsp` for large spaces.

## `section`, `main` and `article`
- `<br />` - self-closing tag for line break.
- `article` - similar to header and footer - no difference using a `div` but it tells the reader that the element contains an article (more readable).
  - Without reading any content inside the tag, we know that it contains an article.
- `main` - for main content area that wraps around some part inside the `body` for better readability.
- `section` - allow for multiple sections, usually within `main`. Logically divided into eg. About Me, Contact, FAQ.

The above tags can help to resolve *`div` soup*.

## h1-h6 and aside

- There are 6 different levels of the H element.
# H1
## H2
### H3
#### H4
##### H5
###### H6
- They are invoked using `<h1> Examples </h1>` and so on.
- `aside` - secondary to the main content.

# HTML Tables
- `<table></table>` - created on diffeerent lines (vs tags like `h1` that are on the same line).
> To create a table border, change the opening tag to `<table border = "1px">`.
> 
> To let each element grow to however big it needs to be, add `width = "100%"`.
>
> FYI: These are *inline style tags* which are bad practice. Use CSS instead.

  - `<thead></thead>` - table header. Prints out the titles of each column.
    - `<tr></tr>` - table row.
      - `<th></th>` - column in the header of a table.
> To specify the width, change the opening tag to `<th width = "20px">`. All cells within the column will be affected.

  - `<tbody></tbody>` - populating the table.
    - `<tr></tr>` - table row.
      - `<td></td>` - table data within each row. Each `td` corresponds to a column created in `th`.
