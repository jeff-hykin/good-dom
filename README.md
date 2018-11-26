# good-dom
A lightweight DOM manipulation tool


# What do I use this for?
Writing significantly more maintainable, condensed, and readable code. For example:
Without good-dom:
```html
<!-- HTML and vanilla javascript -->
<body style="width: 100vw; display:flex; flex-direction: column; align-items: center">
    Hello There
    <div id="blahDiv"></div>
    <input id="blahInput" placeholder="type something"/>
</body>
<script type="text/javascript">
    // get the input box
    var blahInput = document.getElementById("blahInput")
    blahInput.oninput = function(eventObject) {
        // get the value
        var inputBoxContent = eventObject.target.value
        // put the value in a div
        var blahDiv = document.getElementById("blahDiv")
        blahDiv.innerText = inputBoxContent
    }
</script>
```


Equivalent output using good-dom (without JSX):
```html
<!-- good-dom without JSX -->
<!-- (copy and paste this into a .html file an open it and it will work) -->
<body>
<script src="https://unpkg.com/good-dom"></script>
<script type="text/javascript">
    document.body = new BODY({style: { width: "100vw", display: "flex", flexDirection: "column", alignItems: "center"} },
        "Hello there",
        blahDiv = new DIV({}, "Im an inner box"),
        blahInput = new INPUT({
            placeholder:"type something", 
            oninput: (eventObject) => blahDiv.innerText = eventObject.target.value
        })
    )
</script>
</body>
```

Equivlent output using good-dom with JSX:
```html
<!-- good-dom with jsx -->
<!-- (copy and pasting this code won't work directly) -->
<!-- (you'll need a jsx transpiler (e.g. babel) first) -->
<body>
<script type="text/javascript">
    require('good-dom').global()
    document.body = <body style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        Hello There
        {blahDiv= <div>Im an inner box</div>}
        {blahInput= <input placeholder="type something" oninput={eventObject=>blahDiv=eventObject.target.value} />}
    </body>
</script>
</body>
```

# I'm getting an error, how do I fix it?

If you're creating a custom html element and you're getting errors about "Type error ... must use |new|", this is a problem with babel/transpiling/polyfilling classes to ES5 classes. As Mozilla MDN points out, there is no way to perfectly transpile custom component classes back to ES5. To fix this, add a setting to your transpiler to avoid converting ES6 classes to ES5 classes. If you don't know how to do that, a quick fix is to add 
    "browserslist": "last 2 Chrome versions", 
to your package.json, however this means your transpiled code will now only officially support modern browsers.
