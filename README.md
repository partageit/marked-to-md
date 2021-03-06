# Marked to md

> A marked renderer to render Markdown as... Markdown

## Wait... what?

As [Marked](https://github.com/chjj/marked) is a good and fast Markdown parser, it may be useful to parse and update Markdown documents.

An example of use: [Markdown-to-slides](https://github.com/partageit/markdown-to-slides): open a standard Markdown document and adds the required separators for remark.js.

## How to use it?

```javascript
var marked = require('marked');
var mdRenderer = require('marked-to-md');

var source = '# Markdown to md renderer\nHello world!';

var tokens = marked.lexer(source);
var mdToMd = parser.parse(tokens);

console.log(mdToMd);
// displays: # Markdown to md renderer\nHello world!
```

## [License](LICENSE)