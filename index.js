
// expand the HTML element ability
Object.defineProperties(window.HTMLElement.prototype, {
    // allow setting of all styles directly
    style: {
        set: function (styles) {
            Object.assign(this.style, styles);
        }
    },
    // allow setting of children directly
    children: {
        set: function(newChilden) {
            // remove all children
            while (this.firstChild) {
                this.removeChild(myNode.firstChild);
            }
            // add new child nodes
            for (let each of newChilden) {
                this.appendChild(each)
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
        this.appendChild(each)
    }
}
// addClass()
window.HTMLElement.prototype.addClass = function (...inputs) {
    return this.classList.add(...inputs)
}
// for (let eachChild of elem)
window.HTMLCollection.prototype[Symbol.iterator] = function* () {
    let index = 0
    let len = this.length
    while (index < len) {
        yield this[index++]
    }
}
function SimpleElement(properties, ...children) {
    let elem = Object.assign(document.createElement(this.constructor.name.toLowerCase()), properties)
    for (let each of children) {
        elem.appendChild(each)
    }
    return elem
}
let domElements = {
    // constructors for all of the Dom
    A          : function (...args) {return SimpleElement.apply(this, args)},
    ABBR       : function (...args) {return SimpleElement.apply(this, args)},
    ACRONYM    : function (...args) {return SimpleElement.apply(this, args)},
    ADDRESS    : function (...args) {return SimpleElement.apply(this, args)},
    APPLET     : function (...args) {return SimpleElement.apply(this, args)},
    AREA       : function (...args) {return SimpleElement.apply(this, args)},
    ARTICLE    : function (...args) {return SimpleElement.apply(this, args)},
    ASIDE      : function (...args) {return SimpleElement.apply(this, args)},
    AUDIO      : function (...args) {return SimpleElement.apply(this, args)},
    B          : function (...args) {return SimpleElement.apply(this, args)},
    BASE       : function (...args) {return SimpleElement.apply(this, args)},
    BASEFONT   : function (...args) {return SimpleElement.apply(this, args)},
    BDI        : function (...args) {return SimpleElement.apply(this, args)},
    BDO        : function (...args) {return SimpleElement.apply(this, args)},
    BIG        : function (...args) {return SimpleElement.apply(this, args)},
    BLOCKQUOTE : function (...args) {return SimpleElement.apply(this, args)},
    BODY       : function (...args) {return SimpleElement.apply(this, args)},
    BR         : function (...args) {return SimpleElement.apply(this, args)},
    BUTTON     : function (...args) {return SimpleElement.apply(this, args)},
    CANVAS     : function (...args) {return SimpleElement.apply(this, args)},
    CAPTION    : function (...args) {return SimpleElement.apply(this, args)},
    CENTER     : function (...args) {return SimpleElement.apply(this, args)},
    CITE       : function (...args) {return SimpleElement.apply(this, args)},
    CODE       : function (...args) {return SimpleElement.apply(this, args)},
    COL        : function (...args) {return SimpleElement.apply(this, args)},
    COLGROUP   : function (...args) {return SimpleElement.apply(this, args)},
    DATA       : function (...args) {return SimpleElement.apply(this, args)},
    DATALIST   : function (...args) {return SimpleElement.apply(this, args)},
    DD         : function (...args) {return SimpleElement.apply(this, args)},
    DEL        : function (...args) {return SimpleElement.apply(this, args)},
    DETAILS    : function (...args) {return SimpleElement.apply(this, args)},
    DFN        : function (...args) {return SimpleElement.apply(this, args)},
    DIALOG     : function (...args) {return SimpleElement.apply(this, args)},
    DIR        : function (...args) {return SimpleElement.apply(this, args)},
    DIV        : function (...args) {return SimpleElement.apply(this, args)},
    DL         : function (...args) {return SimpleElement.apply(this, args)},
    DT         : function (...args) {return SimpleElement.apply(this, args)},
    EM         : function (...args) {return SimpleElement.apply(this, args)},
    EMBED      : function (...args) {return SimpleElement.apply(this, args)},
    FIELDSET   : function (...args) {return SimpleElement.apply(this, args)},
    FIGCAPTION : function (...args) {return SimpleElement.apply(this, args)},
    FIGURE     : function (...args) {return SimpleElement.apply(this, args)},
    FONT       : function (...args) {return SimpleElement.apply(this, args)},
    FOOTER     : function (...args) {return SimpleElement.apply(this, args)},
    FORM       : function (...args) {return SimpleElement.apply(this, args)},
    FRAME      : function (...args) {return SimpleElement.apply(this, args)},
    FRAMESET   : function (...args) {return SimpleElement.apply(this, args)},
    H1         : function (...args) {return SimpleElement.apply(this, args)},
    H2         : function (...args) {return SimpleElement.apply(this, args)},
    H3         : function (...args) {return SimpleElement.apply(this, args)},
    H4         : function (...args) {return SimpleElement.apply(this, args)},
    H5         : function (...args) {return SimpleElement.apply(this, args)},
    H6         : function (...args) {return SimpleElement.apply(this, args)},
    HEAD       : function (...args) {return SimpleElement.apply(this, args)},
    HEADER     : function (...args) {return SimpleElement.apply(this, args)},
    HR         : function (...args) {return SimpleElement.apply(this, args)},
    HTML       : function (...args) {return SimpleElement.apply(this, args)},
    I          : function (...args) {return SimpleElement.apply(this, args)},
    IFRAME     : function (...args) {return SimpleElement.apply(this, args)},
    IMG        : function (...args) {return SimpleElement.apply(this, args)},
    INPUT      : function (...args) {return SimpleElement.apply(this, args)},
    INS        : function (...args) {return SimpleElement.apply(this, args)},
    KBD        : function (...args) {return SimpleElement.apply(this, args)},
    LABEL      : function (...args) {return SimpleElement.apply(this, args)},
    LEGEND     : function (...args) {return SimpleElement.apply(this, args)},
    LI         : function (...args) {return SimpleElement.apply(this, args)},
    LINK       : function (...args) {return SimpleElement.apply(this, args)},
    MAIN       : function (...args) {return SimpleElement.apply(this, args)},
    MAP        : function (...args) {return SimpleElement.apply(this, args)},
    MARK       : function (...args) {return SimpleElement.apply(this, args)},
    META       : function (...args) {return SimpleElement.apply(this, args)},
    METER      : function (...args) {return SimpleElement.apply(this, args)},
    NAV        : function (...args) {return SimpleElement.apply(this, args)},
    NOFRAMES   : function (...args) {return SimpleElement.apply(this, args)},
    NOSCRIPT   : function (...args) {return SimpleElement.apply(this, args)},
    OBJECT     : function (...args) {return SimpleElement.apply(this, args)},
    OL         : function (...args) {return SimpleElement.apply(this, args)},
    OPTGROUP   : function (...args) {return SimpleElement.apply(this, args)},
    OPTION     : function (...args) {return SimpleElement.apply(this, args)},
    OUTPUT     : function (...args) {return SimpleElement.apply(this, args)},
    P          : function (...args) {return SimpleElement.apply(this, args)},
    PARAM      : function (...args) {return SimpleElement.apply(this, args)},
    PICTURE    : function (...args) {return SimpleElement.apply(this, args)},
    PRE        : function (...args) {return SimpleElement.apply(this, args)},
    PROGRESS   : function (...args) {return SimpleElement.apply(this, args)},
    Q          : function (...args) {return SimpleElement.apply(this, args)},
    RP         : function (...args) {return SimpleElement.apply(this, args)},
    RT         : function (...args) {return SimpleElement.apply(this, args)},
    RUBY       : function (...args) {return SimpleElement.apply(this, args)},
    S          : function (...args) {return SimpleElement.apply(this, args)},
    SAMP       : function (...args) {return SimpleElement.apply(this, args)},
    SCRIPT     : function (...args) {return SimpleElement.apply(this, args)},
    SECTION    : function (...args) {return SimpleElement.apply(this, args)},
    SELECT     : function (...args) {return SimpleElement.apply(this, args)},
    SMALL      : function (...args) {return SimpleElement.apply(this, args)},
    SOURCE     : function (...args) {return SimpleElement.apply(this, args)},
    SPAN       : function (...args) {return SimpleElement.apply(this, args)},
    STRIKE     : function (...args) {return SimpleElement.apply(this, args)},
    STRONG     : function (...args) {return SimpleElement.apply(this, args)},
    STYLE      : function (...args) {return SimpleElement.apply(this, args)},
    SUB        : function (...args) {return SimpleElement.apply(this, args)},
    SUMMARY    : function (...args) {return SimpleElement.apply(this, args)},
    SUP        : function (...args) {return SimpleElement.apply(this, args)},
    SVG        : function (...args) {return SimpleElement.apply(this, args)},
    TABLE      : function (...args) {return SimpleElement.apply(this, args)},
    TBODY      : function (...args) {return SimpleElement.apply(this, args)},
    TD         : function (...args) {return SimpleElement.apply(this, args)},
    TEMPLATE   : function (...args) {return SimpleElement.apply(this, args)},
    TEXTAREA   : function (...args) {return SimpleElement.apply(this, args)},
    TFOOT      : function (...args) {return SimpleElement.apply(this, args)},
    TH         : function (...args) {return SimpleElement.apply(this, args)},
    THEAD      : function (...args) {return SimpleElement.apply(this, args)},
    TIME       : function (...args) {return SimpleElement.apply(this, args)},
    TITLE      : function (...args) {return SimpleElement.apply(this, args)},
    TR         : function (...args) {return SimpleElement.apply(this, args)},
    TRACK      : function (...args) {return SimpleElement.apply(this, args)},
    TT         : function (...args) {return SimpleElement.apply(this, args)},
    U          : function (...args) {return SimpleElement.apply(this, args)},
    UL         : function (...args) {return SimpleElement.apply(this, args)},
    VAR        : function (...args) {return SimpleElement.apply(this, args)},
    VIDEO      : function (...args) {return SimpleElement.apply(this, args)},
    WBR        : function (...args) {return SimpleElement.apply(this, args)},
    makeCustom : (constructor)=>window.customElements.define(constructor.name.toLowerCase()+"-", constructor),
}
module.exports = domElements
module.exports.global = ()=>Object.assign(window,domElements)