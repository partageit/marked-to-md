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

if (mdToHtml !== mdToMdToHtml) {
	console.log('Test fails: Marked to HTML and Marked to Markdown to HTML are different');
	console.log('Check marked-renderer.html and marked-to-md-to-html for further details');
	fs.writeFileSync(path.join(__dirname, 'marked-renderer.html'), mdToHtml);
	fs.writeFileSync(path.join(__dirname, 'marked-to-md-to-html.html'), mdToMdToHtml);
} else {
	console.log('Test succeeds: Marked to HTML and Marked to Markdown to HTML are equal');
}
