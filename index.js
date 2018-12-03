// expand the HTML element ability
Object.defineProperties(window.HTMLElement.prototype, {
    // setting styles through a string
    css : { set: Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style').set },
    // allow setting of styles through string or object
    style: {
        set: function (styles) {
            if (typeof styles == "string") {
                this.css = styles
            } else {
                Object.assign(this.style, styles)
            }
        }
    },
    // allow setting of children directly
    children: {
        set: function(newChilden) {
            // remove all children
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            // add new child nodes
            for (let each of newChilden) {
                this.add(each)
            }
        }
    },
    class: {
        set : function(newClass) {
            this.className = newClass
        },
        get : function() {
            return this.className
        }
    }
});
// add()
window.HTMLElement.prototype.add = function (...inputs) {
    for (let each of inputs) {
        if (typeof each == 'string') {
            this.appendChild(new Text(each))
        } else {
            this.appendChild(each)
        }
    }
    return this
}
// addClass()
window.HTMLElement.prototype.addClass = function (...inputs) {
    return this.classList.add(...inputs)
}
// for (let eachChild of elemCollection)
window.HTMLCollection.prototype[Symbol.iterator] = function* () {
    let index = 0
    let len = this.length
    while (index < len) {
        yield this[index++]
    }
}
// for (let eachChild of elem)
window.HTMLElement.prototype[Symbol.iterator] = function* () {
    let index = 0
    let len = this.childNodes.length
    while (index < len) {
        yield this.childNodes[index++]
    }
}

// make it work with jsx
let React = {
    createElement: (name, properties, ...children) => Object.assign(document.createElement(name), properties).add(...children)
}

// add all the dom elements
let domElements = {}
tagNames = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]
for (let each of tagNames) {
    eval(`domElements.${each.toUpperCase()} = function(properties,...children) {return Object.assign(document.createElement("${each}"), properties).add(...children)}`)
}

function makeGlobal() {
    Object.assign(window, domElements)
    window.React = React
}

// if there is no exporting system
if(typeof exports == "undefined"){
    // put everything in the window scope
    makeGlobal()
// if there is an export system
} else {
    // give the user the choice of local or window
    module.exports = domElements
    module.exports.global = makeGlobal
}
