// customMarkdownLoader.js
const MarkdownIt = require('markdown-it');
const highlightjs = require('markdown-it-highlightjs');

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(highlightjs);

module.exports = function(source) {
  return md.render(source);
};