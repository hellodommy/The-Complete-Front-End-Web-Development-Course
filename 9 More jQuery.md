# More jQuery

## Writing our own version of jQuery

- `$(document)` is actually equivalent to `jQuery(document)` - although it looks like a language of its own, jQuery is simply a Javascript language.
- Let's create our own jQuery - **dQuery**.

1. In the **js** directory, create the file **dQuery.js**.
2. Include it in the HTML file with `<script src="js/dQuery.js"></script>`
3. Create a class in **dQuery.js**:
   
    class dquery {
        constructor(el) {
            this.elements = document.getElementsByClassName(el);
        }
    }

    - To instantiate it, we would normally need to use `new dQuery(blah)`.
4. Create a function in **dQuery.js**:

    function dQuery(el) {
        var element = new dQuery(el);
        return element;
    }
5. In the console, we can run `dQuery(classname)` to test if it works.
6. Create a method in the **dQuery.js** class:

    addClass(cl) {
        var count = 0;
        while (count < this.elements.length) {
            this.elements[count].className += " " + cl;
            count++;
        }
    }

7. In **main.js**, test the method above by running `dQuery("classname").addClass("addedclassname")` on an element with class `classname` to see if `addedclassname` has been added to it (use Inspect element on Chrome).
8. To tailor our **dQuery.js** to support class and ID names, we replace our constructor with the following:

    if (el.indexOf('.') > -1) {
        el = el.replace(".", "");
        this.elements = document.getElementsByClassName(el);
    } else if (el.indexOf('#') > -1) {
        el = el.replace("#", "");
        this.elements = document.getElementById(el);
    } else {
        this.elements = document;
    }

## Find method

- `.ready` in jQuery checks if the document is fully loaded before executing your code.
- It is not actually necessary if your load Javascript at the bottom of your HTML document (which is good practice!).
  - It it is in the header, it could block the loading of the page.

    $('#main').find('p').addClass('test')

- This will **find** `p` inside `#main` and add the class `test` to `p`.
  - This is useful for navigating large documents.

## First and Last

    console.log($('.context-menu a').first().text());

- This will print out the first `a` element in `context-menu` class.

    console.log($('.context-menu a').last().text());

- This will print out the last `a` element in `context-menu` class.

## Focusin and focusout

    $('textarea').focusin(function() {
        console.log("Focused in on the textarea");
    })

- This will log to the console every time we *focus in* on the `textarea` element. This is considered clicking within the text area. Clicking on it multiple times does not count. You have to click out, then click in again.

    $('textarea').focusin(function() {
        console.log("Focused in on the textarea");
    })

- This will log to the console every time we *focus out* of the `textarea` element. This is considered clicking outside the `textarea` after clicking in the `textarea`.

Say we want to validate an email in an `input` element. We give the element a property `name=email` that we can target.

    window.hasAt = 0;
    window.hasDot = 0;

    $('input[name=email]').on('keyup', function() {

        if ($(this).val().indexOf('@') > -1) {
            hasAt++;
        }
        if ($(this).val().indexOf('.') > -1) {
            hasDot++;
        }

        if (window.hasAt > 1 && window.hasDot > 1) {
            $('.status').html("VALID");
        } else {
            $('.status').html("INVALID");

        }
        
    })

We have an element with the class `status`, which will validate our email address on the go.

    $('input').focusout(function() {
        if ($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1) {
            $('.status').html("Valid email");
        } else {
            $('.status').html("Invalid email");

        }
    })

This will validate the email address after they click out of the input area.

## Contains, is, and hasClass

    $('p:contains("example")').html("This has been replaced!");

This selects a `p` element containing the word `example`, and replaces it with the specified text.

    $('classname').is('element type')

This returns a boolean depending if the specified classname is of the element type.

    $(':contains("example")').is("div")

This checks if anything that contains `example` is of a `div` element.

`.hasClass(class name)` can also be used to check if an element has a specific class name.

## Each method

    $('p').each(function() {
        console.log($(this).text());
    })

This will log the contents for every `p` element.

    console.log($('p').text())

This will achieve the same effect but the contents will be in a single log output instead.