# Introduction to Cascading Style Sheets (CSS)

## Targeting color and background
- To use style sheets, we need to link it to our HTML file.
  - In the `head` tag, add the following line.
  - Replace the `href` property with the location of the CSS file.

    `<link rel="stylesheet" href="css/style.css" />`

- To target elements in CSS, just use the element's name followed by curly braces.
  - All properties for that element are within the braces.
  - Each line is ended by a semi-colon `;`.
- Colour choices:
  - Hex colours (range from 0 to F).

    `#000000`

  - RGB/RGBA (range from 0 to 255).

    `rgb(0, 0, 0)` or `rgba(0, 0, 0, 0)`

- Inheritance in properties - styles applied to `body` are applied to every other element inside of `body` as well (eg. `main`, `section`), unless specified otherwise.
- `h3` means any `h3` element while `body h3` means any `h3` element within `body`.

## Element specificity

- `body > header > h3` means a `h3` element in `header`, which is in `body`.
  - This looks for a *direct child*. `body > h3` is different.
  - The more specific rule is applied.
  - `body h3` is less specific than this.
- Stylesheet is read top down

# ID targeting, margin, and border

1. Browse fonts on Google.
2. Find the font you like and click the add button. 
3. Click in `@import` under Embed Font.
4. Copy the line `@import ...` into CSS.
5. In CSS under `body`, use `font-family` to set the font.

- To let a property not be overwritten by specificity, add `!important` at the end of it, so it will be applied regardless.

- To **target by ID**, we use `#id-name`.
  - You cannot have multiple elements with the same ID.
- `border` property takes 3 elements - width, style and colour (eg. `1px solid black`)
  - Can be specified in `border-width`, `border-color`, etc.
- To remove certain borders, you can use `border-top: none;` (can be used to applu certain borders as well).
- You may notice that borders may not extend the whole screen. To do so, in the `body` element, use `margin: 0px`.
  - If you supply 1 argument, it will affect *all sides*.
  - 2 elements - first will apply to top and bottom, second will apply to left and right.
  - 4 elements will apply to each side respectively (top, right, bottom, left).
- Use Inspect element on Chrome to do "live" CSS editing.
  - Adjust some parts of the stylesheet to see how the page changes.

## Padding, margin, and float
- *Block element* - full width, height can be defined.
- *Inline element* - not full width, height cannot be defined.W
- Notice that `h1` is a block element (hover over it in Inspect element view).
  1. Under `h1` styling in CSS, add the property `display: inline`.
  2. Refresh and hover again - notice that it is now inline.
  3. Change it to `inline-block` and refresh. It is still only as wide as it needs to be, but its height can be specified.
- To specify rules for multiple elements, use a comma `,`.
  - Eg. to specify for `h1` and `h3`, use `h1, h2 {...}` in CSS.
- Margins are good for spacing elements away from each other.
  - Margin space will be considered *outside space* and the text in the element will only take up *inside space*.
- Padding exists **within** the element.

## Max-width and background-image
- To centre a section ID, set `margin: auto`.
- To set max width, use `max-width: x%`.
  - Using `width` instead of `max-width` may stretch/compress the image.
  - Adding `display: inline-block` will create a horizontal grid for the elements.
- You may want different images to be the same size, but using `img src...` does not guarantee that the images will be of the same size.
  - Instead use a `div` with the background as the desired image.

    `<div style="background:url(file_path)" /></div>`

  - Image may be tiled.

    `background-size: cover;` so the image will be however big it has to be in order to cover the entire viewport of the `div` (ie. no tiling).

  - To apply to all `div`s of a certain type, set `class` property of `div` to something.

    eg. `<div class="article-image"...>`

    - To target a `class` in CSS, use a period `.`.
  
    eg. `.article-image {...}`

    - Also set height and width of images under properties to get them to show.

## Font weight, style, and family
- `font-family`, `font-weight` are some properties we can set.
  - Some font weights cannot be set.
- Set another font after your desired font in case it doesn't load.

    eg. `font-family: firstchoicefont, secondchoicefont;`

- Fonts in `body` are applied to the entire page. This will be overwritten by more specific properties (eg. font for `h1` elements).
- `font-style` can also be set (eg. `italic`).
- An element having 2 classes (eg. `class="class_1 class_2"`) will have the styles of `class_1` and `class_2`. They are considered different classes if they are separated by a space.
   - To style an element with the exact class `class="class_1 class_2"`, we can specify it in CSS as `.class_1.class_2 {...}`

## Text decorations
- By default, links are underlined. By setting `text-decoration: none` for the `a` element, links will no longer be underlined.
- To underline some other text instead, `text-decoration: underline`.
  - To set multiple decorations, separate them with a space (eg. `text-decoratrion: underline line-through;`).
  - `text-decoration-color`, `text-decoration-line`, `text-decoration-style` can be set as well.
  - If properties override each other, only the last property will be acknowledged.
- Indent of text can be set with `text-ident`.
- `text-align` can be set to center, right, etc (default left).

## Text Spacing
- Letter spacing of text can be specified.
  - Under properties, `letter-spacing: 2px;`.
- Word spacing can also be specified with `word-spacing: 2px;`.

## Text shadow 
- `text-shadow`'s arguments:
  1. Distance from text vertically.
  2. Distance from text horizontally.
  3. Colour (blur).

    eg. `text-shadow: 2px, 2px, 5px #000000`.

- `box-shadow` applies shadow to a box.