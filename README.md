# good-dom
A lightweight DOM manipulation tool

If you get errors about "Type error ... must use |new|", this is a problem with babel/transpiling/polyfilling. When the code gets converted from ES6 to ES5 it breaks.

If you don't know how to prevent the transpiling of classes a quick fix is to add "browserslist": "last 2 Chrome versions", to your package.json, however that means the code will break on older browers.