'use strict';

module.exports = function (renderer) {
	renderer.code = function(code, lang /*, escaped*/) { // what is escaped?
		return '```' + (lang ? lang : '') + '\n' + code + '\n```\n';
	};
	renderer.blockquote = function(quote) {  // each line should begin with > + what about nested blockquotes?
		return '> ' + quote + '\n';
	};
	renderer.html = function(html) {
		return html;
	};
	renderer.heading = function(text, level /*, raw */) {  // what is raw?
		return  new Array(level + 1).join('#') + ' ' + text + '\n';
	};
	renderer.hr = function() {
		return '\n---\n';
	};
	renderer.list = function(body /*, ordered*/) {
		// if orderer, replace first level items prefix (-) with numbers
		return '\n' + body + '\n';
	};
	renderer.listitem = function(text) {
		text = text.replace('\n-', '\n -');  // warning: only the first occurrence is replaced
		// if text contains sublevels items, remove the trailing \n
		return '- ' + text + '\n';
	};
	renderer.paragraph = function(text) {
		return text + '\n\n';
	};
	renderer.table = function(header, body) {
		// To be tested...
		return header + '\n' + '------------------\n' + body + '\n';
	};
	renderer.tablerow = function(content) {
		return '| ' + content + '\n';
	};
	renderer.tablecell = function(content /*, flags */) {
		return ' ' + content + ' | ';
	};
	// span level renderer
	renderer.strong = function(text) {
		return '**' + text + '**';
	};
	renderer.em = function(text) {
		return '*' + text + '*';
	};
	renderer.codespan = function(text) {
		return '`' + text + '`';
	};
	renderer.br = function() {
		return '  \n';
	};
	renderer.del = function(text) {
		return '~~' + text + '~~';
	};
	renderer.link = function(href, title, text) {
		return '[' + text + '](' + href + (title ? ' "' + title + '"' : '') + ')';
	};
	renderer.image = function(href, title, text) {
		return '[' + text + '](' + href + (title ? ' "' + title + '"' : '') + ')';
	};

	return renderer;
};
