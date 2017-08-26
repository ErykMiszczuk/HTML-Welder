"use strict";

  function createHead(lang, title, stylesheets = "") {
    return `<!DOCTYPE html>
    <html lang="${lang}">
    <head>
    <meta charset="utf-8">
    <title>${title}</title>${stylesheets}
    </head>
    <body>`
  }

  module.exports = createHead;