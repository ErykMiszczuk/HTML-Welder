#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');
var __dirpath = path.resolve();
const createHead = require(__dirpath+'/templates/template-head.js');
const createFoot = require(__dirpath+'/templates/template-foot.js');
const createNav = require(__dirpath+'/templates/template-nav.js');

var fileName = __dirpath+"/build/";
var fileInput = __dirpath+"/input/";

var websiteMap = require('./input/websiteMap.js');

var links = '';

function weld() {
  websiteMap.map((anchor) => {
    if (anchor.visible) {
      let link = `<li><a href="${anchor.filepath}">${anchor.name}</a></li>`;
      links += link;
    }
    fs.readFile(fileInput+`${anchor.filepath}`, 'utf8', (err, data) => {
      if (err) throw err;
      fs.writeFileSync(fileName+`${anchor.filepath}`, buildHtml(data, anchor), (err) => {
        if (err) throw err;
      });
    });

  })

}

function buildHtml(maintext, data = {}) {
  const beautify_html = require('js-beautify').html;
  return beautify_html(`${createHead("pl", data.name)}${createNav(links)}${maintext}${createFoot("2017", "Eximia Games")}`, beautify_html_options);
}

var beautify_html_options = {
    "indent_char": " ",
    "indent_size": 2,
    "extra_liners": [],
    "html": {
        "end_with_newline": true,
        "js": {
            "indent_size": 2
        },
        "css": {
            "indent_size": 2
        }
    },
}

module.exports = weld;
