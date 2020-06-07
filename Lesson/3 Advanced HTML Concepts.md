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
- A round checkbox
- In an `input` tag, specify the `type` as `radio`.


  `<input type="radio">`
  - Also specify the `value` property as the option.


    eg. `value="pickup"`.
- By setting the same input `name` property as the same, only one of them can be picked.
  - Unlike `value`, which must be unique (even in checkboxes).

## Select, option and buttons
- `select` - a multiple choice dropdown where users can select one option.


  `<select name ="size"> blah blah </select>`
  - Each select needs some options to populate it.


    `<option value="12">12 inches</option>`
- `button` - allow users to click on something.
  
  `<button type="submit">Place Order</button>`
  - If you click submit and the form method was `GET`, notice that the form options are included in the URL.
  - If the form method was `POST`, you will be sent to the specified script without a customised URL - ideal for sensitive data.

## HTML5 Video
- Previously, you needed to use Flash.
- HTML5 introduced a native video element.

`<video width="540" height="320" controls>`

`<source src="filepath" type="video/format">`

`Your browser does not support HTML5.`

`</video>`

- Can add multiple sources for different file formats (eg. mp4, ogg).
- If the video cannot load, display a notice by typing after the source
- This is because the code is loaded in a sequential manner (if first line doesn't load, it goes to the next line).

## HTML5 Audio

`<audio width="600" controls>`

`<source src="filepath" type="audio/format">`

`</audio>`

- Without the `controls` property, the audio player will not be displayed, and the audio will play in the background.
  - You can also use other properties (without values) like `autoplay` or `loop`.
- By giving the audio an `id` element, you can access it using Javascript later on.

  eg. `<audio id="mysound">`

## Doctypes
- For the browser to properly parse our HTML file and display it, we need a doctype.
- In this case, it is HTML5.

`<!DOCTYPE html>`

- If you are using Bootstrap, it needs to be set to `HTML5` instead.

## Meta tags
- Provide more information to browsers about our web page.
- Meta tags do not close (do not use forward slashes etc.).

`<meta charset="UTF-8">`

- Description meta tag used for search results.

`<meta name="description" content="This page is a webpage to learn HTML">`

- Meta keywords for SEO.

`<meta name="keywords" content="HTML5, udemy, learn, code">`

- Meta author.

`<meta name="author" content="Dominique">`

- Viewport meta tag - important for responsive design.
  - This is needed for Bootstrap.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

