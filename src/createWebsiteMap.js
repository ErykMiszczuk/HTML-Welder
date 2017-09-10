"use strict";

const fs = require('fs');
const path = require('path');
var __dirpath = path.resolve();
const beautify_json = require('js-beautify').js_beautify;

var nav = [];

function createWebsiteMap() {
  fs.readdir(__dirpath+"/input", 'utf-8', (err, files) => {
    if (err) throw err;
    files = files.filter((file) => {
      return path.extname(file) == ".html";
    });
    files.map((file) => {
      let name = path.basename(file, path.extname(file));
      let navitem = {
        filepath: file,
        name: name,
        visible: true,
        type: 'site'
      };
      nav.push(navitem);
    });
    let jsonWrite = fs.createWriteStream(__dirpath+"/input/websiteMap.js");
    let json = beautify_json(JSON.stringify(nav), { indent_size: 2 })
    let exportJson = `module.exports = ${json}`;
    jsonWrite.write(exportJson);
    jsonWrite.end();
  });
};

module.exports = createWebsiteMap;
