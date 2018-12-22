require("good-jsx")

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
