# Advanced CSS

## Pseudo States
- If you hover on a link, it gains the state *hover*.
- If you click on a link, it gains the state *active*.

To style a link when you hover over it, use `a:hover {...}`.

- There are also other states for input fields, eg. for a field `<input placeholder="Search..." class="my-input" />`.
  - We can specify the state `.my-input:focus {...}` when the field is clicked on.

- We can style `article` as well, such as `article:active` when you hold down the mouse button on the article.

## Border Radius
- For slight rounded corners, specify `border-radius: 3px`;
  - This will be applied to all corners.
  - Using more arguments will apply it to each corner respectively.
  - Specific radius can be specified (eg. `border-top-left-radius`).
- Not that `transparent` is also a valid colour (eg. set `border` colour to `transparent`).
- To form a circle out of an image (square), set `border-radius: 100%`.
  - If they are not square, they will become an ellipse.

## Positions
- Possible positions to set:
  1. Relative (default)
  2. Fixed (stays in the same position even when scrolling)
  3. Absolute
- Once you are using a fixed/absolute position, you can use positioning attributes (eg. `top: 0px`).
- Once an element becomes fixed, it becomes a "layer" on the page - things can be hidden under it.

## Pseudo-elements
- A blank element, eg. `#main-header::before {...}` (`after` can also be used).
  - No default styles, no properties assigned by default.
  - Set `content: "";` (must be set) and `display: block;`.
  - It further defines styles for the element.
  - A "child" element inside the element itself. Positioning it as `bottom: 0px;` with `position: absolute;` will put it at the bottom of the element and not the bottom of the whole page.

## Z-index
- A way to manipulate/control the depth of a page.
- `position` of element has to be set to `absolute`, `fixed` or `relative`.
- A bigger z-value will mean the element is on top.

## Viewpoint width and height, overflowing content
- To put a large chunk of text in a container itself that is scrollable,
  1. Wrap it in a `div class`.
  2. Set `max-height: 200px;`.
   - Content might be overlfowing.
  3. Set `overflow: hidden;` to hide text that does not fit.
  4. To allow scroll, set `overflow: scroll;`.
  5. We might have a horizontal scroll that cannot be used. To remove it, set `overflow-x: hidden;`.
  6. `max-height` can be set to whatever value and the box and scroll will adapt.
- Normal percentages vs `VW` or `VH`.
  - Viewport width and height are according to the viewport size.

## Transition property
- Applies for transition between states (eg. between when item is not being hovered and item is being hovered).
    Set the property `transition: all 1s;`.
- To target only certain states, set `transition: box-shadow 500ms;` which will only apply to transitions involving the shadow.
  - Use a comma `,` for multiple transition states.
- `transition-delay` is used to delay when the transition is applied.