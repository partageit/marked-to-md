'use strict';

var marked = require('marked');
var fs = require('fs');
var path = require('path');
var mdRenderer = require('../marked-to-md');

var md = fs.readFileSync(path.join(__dirname, 'test.md'), 'utf-8');
var tokens1 = marked.lexer(md);
var mdToHtml = marked.parser(tokens1);

var renderer = mdRenderer(new marked.Renderer());
var parser = new marked.Parser({renderer: renderer});

var tokens2 = marked.lexer(md);
var mdToMd = parser.parse(tokens2);

var mdToMdTokens = marked.lexer(mdToMd);
var mdToMdToHtml = marked.parser(mdToMdTokens);

console.log('Result:', (mdToHtml === mdToMdToHtml));

if (mdToHtml !== mdToMdToHtml) {
	fs.writeFileSync(path.join(__dirname, 'marked-renderer.html'), mdToHtml);
	fs.writeFileSync(path.join(__dirname, 'marked-to-md-to-html.html'), mdToMdToHtml);
}
