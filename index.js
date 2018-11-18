module.exports = () => {
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
    HTMLCollection.prototype[Symbol.iterator] = function* () {
        let index = 0
        let len = this.length
        while (index < len) {
            yield this[index++]
        }
    }
    // constructors for all of the Dom
    function SimpleElement(properties, ...children) {
        let elem = Object.assign(document.createElement(this.constructor.name.toLowerCase()), properties)
        for (let each of children) {
            elem.appendChild(each)
        }
        return elem
    }
    function A          (...args){return SimpleElement.apply(this,args)}
    function Abbr       (...args){return SimpleElement.apply(this,args)}
    function Acronym    (...args){return SimpleElement.apply(this,args)}
    function Address    (...args){return SimpleElement.apply(this,args)}
    function Applet     (...args){return SimpleElement.apply(this,args)}
    function Area       (...args){return SimpleElement.apply(this,args)}
    function Article    (...args){return SimpleElement.apply(this,args)}
    function Aside      (...args){return SimpleElement.apply(this,args)}
    function Audio      (...args){return SimpleElement.apply(this,args)}
    function B          (...args){return SimpleElement.apply(this,args)}
    function Base       (...args){return SimpleElement.apply(this,args)}
    function Basefont   (...args){return SimpleElement.apply(this,args)}
    function Bdo        (...args){return SimpleElement.apply(this,args)}
    function Big        (...args){return SimpleElement.apply(this,args)}
    function Blockquote (...args){return SimpleElement.apply(this,args)}
    function Body       (...args){return SimpleElement.apply(this,args)}
    function Br         (...args){return SimpleElement.apply(this,args)}
    function Button     (...args){return SimpleElement.apply(this,args)}
    function Canvas     (...args){return SimpleElement.apply(this,args)}
    function Caption    (...args){return SimpleElement.apply(this,args)}
    function Center     (...args){return SimpleElement.apply(this,args)}
    function Cite       (...args){return SimpleElement.apply(this,args)}
    function Code       (...args){return SimpleElement.apply(this,args)}
    function Col        (...args){return SimpleElement.apply(this,args)}
    function Colgroup   (...args){return SimpleElement.apply(this,args)}
    function Datalist   (...args){return SimpleElement.apply(this,args)}
    function Dd         (...args){return SimpleElement.apply(this,args)}
    function Del        (...args){return SimpleElement.apply(this,args)}
    function Dfn        (...args){return SimpleElement.apply(this,args)}
    function Div        (...args){return SimpleElement.apply(this,args)}
    function Dl         (...args){return SimpleElement.apply(this,args)}
    function Dt         (...args){return SimpleElement.apply(this,args)}
    function Em         (...args){return SimpleElement.apply(this,args)}
    function Embed      (...args){return SimpleElement.apply(this,args)}
    function Fieldset   (...args){return SimpleElement.apply(this,args)}
    function Figcaption (...args){return SimpleElement.apply(this,args)}
    function Figure     (...args){return SimpleElement.apply(this,args)}
    function Font       (...args){return SimpleElement.apply(this,args)}
    function Footer     (...args){return SimpleElement.apply(this,args)}
    function Form       (...args){return SimpleElement.apply(this,args)}
    function Frame      (...args){return SimpleElement.apply(this,args)}
    function Frameset   (...args){return SimpleElement.apply(this,args)}
    function Head       (...args){return SimpleElement.apply(this,args)}
    function Header     (...args){return SimpleElement.apply(this,args)}
    function H1         (...args){return SimpleElement.apply(this,args)}
    function H2         (...args){return SimpleElement.apply(this,args)}
    function H3         (...args){return SimpleElement.apply(this,args)}
    function H4         (...args){return SimpleElement.apply(this,args)}
    function H5         (...args){return SimpleElement.apply(this,args)}
    function H6         (...args){return SimpleElement.apply(this,args)}
    function Hr         (...args){return SimpleElement.apply(this,args)}
    function Html       (...args){return SimpleElement.apply(this,args)}
    function I          (...args){return SimpleElement.apply(this,args)}
    function Iframe     (...args){return SimpleElement.apply(this,args)}
    function Img        (...args){return SimpleElement.apply(this,args)}
    function Input      (...args){return SimpleElement.apply(this,args)}
    function Ins        (...args){return SimpleElement.apply(this,args)}
    function Kbd        (...args){return SimpleElement.apply(this,args)}
    function Label      (...args){return SimpleElement.apply(this,args)}
    function Legend     (...args){return SimpleElement.apply(this,args)}
    function Li         (...args){return SimpleElement.apply(this,args)}
    function Link       (...args){return SimpleElement.apply(this,args)}
    function Main       (...args){return SimpleElement.apply(this,args)}
    function Map        (...args){return SimpleElement.apply(this,args)}
    function Mark       (...args){return SimpleElement.apply(this,args)}
    function Meta       (...args){return SimpleElement.apply(this,args)}
    function Meter      (...args){return SimpleElement.apply(this,args)}
    function Nav        (...args){return SimpleElement.apply(this,args)}
    function Noscript   (...args){return SimpleElement.apply(this,args)}
    function Object     (...args){return SimpleElement.apply(this,args)}
    function Ol         (...args){return SimpleElement.apply(this,args)}
    function Optgroup   (...args){return SimpleElement.apply(this,args)}
    function Option     (...args){return SimpleElement.apply(this,args)}
    function P          (...args){return SimpleElement.apply(this,args)}
    function Param      (...args){return SimpleElement.apply(this,args)}
    function Pre        (...args){return SimpleElement.apply(this,args)}
    function Progress   (...args){return SimpleElement.apply(this,args)}
    function Q          (...args){return SimpleElement.apply(this,args)}
    function S          (...args){return SimpleElement.apply(this,args)}
    function Samp       (...args){return SimpleElement.apply(this,args)}
    function Script     (...args){return SimpleElement.apply(this,args)}
    function Section    (...args){return SimpleElement.apply(this,args)}
    function Select     (...args){return SimpleElement.apply(this,args)}
    function Small      (...args){return SimpleElement.apply(this,args)}
    function Source     (...args){return SimpleElement.apply(this,args)}
    function Span       (...args){return SimpleElement.apply(this,args)}
    function Strike     (...args){return SimpleElement.apply(this,args)}
    function Strong     (...args){return SimpleElement.apply(this,args)}
    function Style      (...args){return SimpleElement.apply(this,args)}
    function Sub        (...args){return SimpleElement.apply(this,args)}
    function Sup        (...args){return SimpleElement.apply(this,args)}
    function Table      (...args){return SimpleElement.apply(this,args)}
    function Tbody      (...args){return SimpleElement.apply(this,args)}
    function Td         (...args){return SimpleElement.apply(this,args)}
    function Textarea   (...args){return SimpleElement.apply(this,args)}
    function Tfoot      (...args){return SimpleElement.apply(this,args)}
    function Th         (...args){return SimpleElement.apply(this,args)}
    function Thead      (...args){return SimpleElement.apply(this,args)}
    function Time       (...args){return SimpleElement.apply(this,args)}
    function Title      (...args){return SimpleElement.apply(this,args)}
    function Tr         (...args){return SimpleElement.apply(this,args)}
    function U          (...args){return SimpleElement.apply(this,args)}
    function Ul         (...args){return SimpleElement.apply(this,args)}
    function Var        (...args){return SimpleElement.apply(this,args)}
    function Video      (...args){return SimpleElement.apply(this,args)}
    function Wbr        (...args){return SimpleElement.apply(this,args)}
    // shorthand for creating custom elements
    var makeCustom = (constructor)=>window.customElements.define(constructor.name.toLowerCase()+"-", constructor)
}