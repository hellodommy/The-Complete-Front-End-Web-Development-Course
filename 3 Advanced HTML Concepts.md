# Advanced HTML Concepts

## Images
- Image tags are *block level* - they will appear full-width within the page.
- Format: `<img src = "image file path" />`.
- To resize image, use `width="x%"` or any other `px` value.

## Forms
- Set an id for the section. Opening tag becomes `<section id="contact-form">`.
  - This is also known as a *property* of the element.
  - This allows you to target the section to style it in the style sheet, or create user interactions with Javascript.
- `<form></form>` - creating the form.

  `<form method="GET" action="place-order.php">`

  - `method` is either `POST` or `GET`. `POST` methods do not reflect in the URL.
    - Better to use `POST` for things like passwords.
    - `GET` is able to linkj to very specific results within the URL.
  - `action` will be where the form is going to submit to.
    - Eg. a `.php` file in the directory.

## Input
- `input` - a self-closing tag.

  `<input name="name" placeholder="Your Name" class="lg-input">`

  - `name` - property to tell developer what the input should be referred to as. It does not change the appearence on the site.
  - `placeholder` - a property that appears in the text box before the user types anything.
  - `class` - a property used to reference in CSS.

## Checkboxes
- Used to limit responses to forms.
- In an `input` tag, specify the `type` as `checkbox`.
  `<input type="checkbox">`
  - It creates a box that can be checked and unchecked.

## Radio Buttons
