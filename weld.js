"use strict";

const fs = require('fs');
const beautify_html = require('js-beautify').html;
const createHead = require('./template-head.js');
const createFoot = require('./template-foot.js');
const createNav = require('./template-nav.js');

var fileName = "./build/";

delete require.cache[require.resolve('./websiteMap.json')];
var websiteMap = require('./websiteMap.json');

var links = '';
websiteMap.map((anchor) => {
  if (anchor.visible) {
    let link = `<li><a href="${anchor.filepath}">${anchor.name}</a></li>`;
    links += link;
  }
  fs.readFile(`./${anchor.filepath}`, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFileSync(fileName+`${anchor.filepath}`, buildHtml(data, anchor), (err) => {
      if (err) throw err;
      console.log(`File ${file} saved!`);
      delete require.cache[require.resolve('./websiteMap.json')];
    });
  });

})

function buildHtml(maintext, data = {}) {
  return beautify_html(`${createHead("pl", data.name)}
  ${createNav(links)}
  ${maintext}
  ${createFoot("2017", "Lucifer")}`, beautify_html_options);
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
