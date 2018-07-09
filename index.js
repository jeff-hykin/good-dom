var {copyFunc} = require("good-js")
module.exports = ()=>
    {
        // New('div') >>> document.createElement('div')
            window.New = _=>document.createElement(_)
        // add >>> appendChild 
            window.HTMLElement.prototype.add = function(...inputs) 
                { 
                    for (let each of inputs)
                        {
                            this.appendChild(each)
                        }
                }
        // thing.style = {}
            Object.defineProperties(window.HTMLElement.prototype, {
                'style': 
                    { 
                        set: function(styles) 
                            { 
                                for (var each of Object.keys(styles))
                                    {
                                        this.style[each] = styles[each]
                                    }
                            }
                    },
            })
        // elem.addClass     >>> elem.classList.add
            window.HTMLElement.prototype.addClass = function(...inputs)
                {
                    return this.classList.add(...inputs)
                }
        // elem.valueOf      >>> elem.childNodes
            window.HTMLElement.prototype.valueOf = function()
                {
                    return this.childNodes
                }
        // elem
        // inputElem.valueOf >>> elem.value
            window.HTMLInputElement.prototype.valueOf = function()
                {
                    return this.value
                }
        // for (let eachChild of elem)
            HTMLCollection.prototype[Symbol.iterator] = function* () 
                {
                    let index = 0
                    let len = this.length
                    while(index < len)
                        {
                            yield this[index++]
                        }
                }

        // centerChildren (adds styles to center vertically and horizontally)
            window.centerChildren = function(aNode)
                {
                    aNode.style = {
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                        flexDirection: "column"
                    }
                }
            window.centerChildrenHorizontally = function(aNode)
                {
                    aNode.style = {
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }
                }
            window.centerChildrenVertically = function(aNode)
                {
                    aNode.style = {
                        display: "flex",
                        justifyContent: "center",
                        justifyItems: "center",
                        flexDirection: "column",
                    }
                }
    }