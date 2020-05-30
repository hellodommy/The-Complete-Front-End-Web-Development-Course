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
