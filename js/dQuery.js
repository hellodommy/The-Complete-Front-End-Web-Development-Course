class dquery {
    constructor(el) {
        if (el.indexOf('.') > -1) {
            el = el.replace(".", "");
            this.elements = document.getElementsByClassName(el);
        } else if (el.indexOf('#') > -1) {
            el = el.replace("#", "");
            this.elements = document.getElementById(el);
        } else {
            this.elements = document;
        }
    }

    addClass(cl) {
        var count = 0;
        while (count < this.elements.length) {
            this.elements[count].className += " " + cl;
            count++;
        }
    }
}

function dQuery(el) {
    var element = new dquery(el);
    return element;
}