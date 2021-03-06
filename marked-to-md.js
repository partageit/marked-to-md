'use strict';

module.exports = function (renderer) {
	var tableHeader = '';

	// block level renderers
	renderer.code = function(code, lang /*, escaped*/) { // escaped is a boolean
		return '```' + (lang ? lang : '') + '\n' + code + '\n```\n';
	};
	renderer.blockquote = function(quote) {
		return '> ' + quote.trim().replace(/\n/g, '\n> ') + '\n\n';
	};
	renderer.html = function(html) {
		return html;
	};
	renderer.heading = function(text, level, raw) {
		return new Array(level + 1).join('#') + ' ' + raw + '\n';
	};
	renderer.hr = function() {
		return '\n---\n';
	};
	renderer.list = function(body, ordered) {
		return body.replace(/doubidoubidou/g, (ordered ? '1.' : '-')) + '\n\n';
	};
	renderer.listitem = function(text) {
		var linesToAdd = [];
		text.split('\n').forEach(function(line) {
			if (line.trim() !== '') {
				if ((line.trim()[0] === '-') || (!isNaN(line.trim()[0]))) {
					linesToAdd.push(' ' + line);
				} else {
					linesToAdd.push(line);
				}
			}
		});
		return '\ndoubidoubidou ' + linesToAdd.join('\n');
	};
	renderer.paragraph = function(text) {
		return text + '\n\n';
	};
	renderer.table = function(header, body) {
		var result = header /*+ '\n'*/ + '|' + tableHeader + '\n' + body + '\n';
		tableHeader = '';
		return result;
	};
	renderer.tablerow = function(content) {
		return '| ' + content + '\n';
	};
	renderer.tablecell = function(content, flags) {
		if (flags.header) {
			tableHeader += (flags.align === 'center' ? ':' : '') + '--' + (['center', 'right'].indexOf(flags.align) !== -1 ? ':' : '') + '|';
		}
		return ' ' + content + ' | ';
	};

	// span level renderers
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
		return '![' + text + '](' + href + (title ? ' "' + title + '"' : '') + ')';
	};

	return renderer;
};
