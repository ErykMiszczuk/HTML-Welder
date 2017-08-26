"use strict";

const fs = require('fs');
const path = require('path');
const beautify_html = require('js-beautify').html;
const createHead = require('./template-head.js');
const createFoot = require('./template-foot.js');
const createNav = require('./template-nav.js');
const createWebsiteMap = require('./createWebsiteMap.js');

var fileName = "./build/";
var header = "";
var body = "";
var footer = "";
var files = [];

/**
 * This code create array of main code blocks in this folder. Based on this array script will build a static files.
*/
// fs.readdir(".", 'utf-8', (err, files) => {
//   if (err) throw err;
//   files = files.filter((file) => {
//     return path.extname(file) == ".html";
//   })
//   files = files.filter((file) => {
//     let fileName = path.basename(file, path.extname(file));
//     return !(fileName == "head" || fileName == "foot");
//   })
//   files = files.map((file) => {
//     return path.basename(file, path.extname(file));
//   })
//   console.log(files);
  // fs.readFile("./head.html", 'utf8', (err, data1) => {
  //   if (err) throw err;
  //   header = data1;
  //   console.log(data1);
    // fs.readFile("./foot.html", 'utf8', (err, data2) => {
    //   if (err) throw err;
    //   footer = data2;
    //   console.log(data2);
      // for (var file of files) {
      // }
    // });
  // });
// })

// var readWebsiteMap = fs.createReadStream('./websiteMap.json')
// var websiteMap = readWebsiteMap.end(JSON.parse(data));
var websiteMap = require('./websiteMap.json')
// console.log(websiteMap);


var links = '';
websiteMap.map((anchor) => {
  let link = `<li><a href="${anchor.filepath}">${anchor.name}</a></li>`;
  links += link;
  fs.readFile(`./${anchor.filepath}`, 'utf8', (err, data) => {
    if (err) throw err;
    body = data;
    console.log(data);
    fs.writeFileSync(fileName+`${anchor.filepath}`, buildHtml(body, anchor), (err) => {
      if (err) throw err;
      console.log(`File ${file} saved!`);
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
