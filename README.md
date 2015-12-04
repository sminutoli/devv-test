# example-test
Example test

## HTML
I´m following some of this front-end best practices guideline
http://isobar-idev.github.io/code-standards/

* html5 doctype
* meta charset before anything on header
* scripts at bottom to improve loading

I´m using HTML5 tags (header, footer) and semanthic markup (i.e. the bottom nav bar, using a DL to emphatize the relation between elements)

## CSS
I´m using a little BEM (BlockElementModifier) syntax to identify elements in CSS, using the "no more than 2 inheritance levels" rule

I´m using indents to identify elements contained by ancestors.

## Javascript
I´ve used this references to build the search
http://stackoverflow.com/questions/8408152/regular-expression-negative-match
http://stackoverflow.com/questions/406230/regular-expression-to-match-text-that-doesnt-contain-a-word
http://stackoverflow.com/questions/2992133/extract-word-with-regular-expression
http://www.w3schools.com/jsref/jsref_replace.asp

* using VM reference (in my code, var me = this)
* using "bindings first" approach
* using "strict mode"

## AngularJS
I´ve chosen angularJS because of the high-dynamic searching based on pure JSON and all the magic stuff inside filters, orderby, etc.

I´ve decided not to split the html in partials/views, because of the "one and only view" excercise.

## GIT support
I´ve documented all the process in several commits on this public repo
https://github.com/sminutoli/devv-test.git

## Node Server included
For AJAX local testing I´ve used an Express runner (runner.js)
In order to use it you have to 
```bash
npm install && node runner.js
```
You´ll be able to reach ```localhost:9001/index.html```

## Features

* you can try positive and negative searches
* you can try including more fields
* the items are displayed using a `weight` added property
* I´ve added some checkbox just to play with features

## Enjoy!
I hope you enjoy the code as much as me doing it.

sergio.minutoli@gmail.com
