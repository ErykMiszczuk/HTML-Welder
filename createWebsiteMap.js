"use strict";

const fs = require('fs');
const path = require('path');
const beautify_json = require('js-beautify').js_beautify;

var nav = [];

function createWebsiteMap() {
  fs.readdir(".", 'utf-8', (err, files) => {
    if (err) throw err;
    files = files.filter((file) => {
      return path.extname(file) == ".html";
    });
    files.map((file) => {
      let name = path.basename(file, path.extname(file));
      let navitem = {
        filepath: file,
        name: name
      };
      nav.push(navitem);
    });
    console.log(JSON.stringify(nav));
    let jsonWrite = fs.createWriteStream("./websiteMap.json");
    jsonWrite.write(beautify_json(JSON.stringify(nav), { indent_size: 2 }));
    jsonWrite.end();
  });
};
createWebsiteMap();

module.exports = createWebsiteMap;
