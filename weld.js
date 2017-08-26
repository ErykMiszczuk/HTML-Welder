"use strict";

const fs = require('fs');
const path = require('path');
const beautify_html = require('js-beautify').html;
const createHead = require('./template-head.js');
const createFoot = require('./template-foot.js');

var fileName = "./build/";
var header = "";
var body = "";
var footer = "";
var files = [];

/**
 * This code create array of main code blocks in this folder. Based on this array script will build a static files.
*/
fs.readdir(".", 'utf-8', (err, files) => {
  if (err) throw err;
  files = files.filter((file) => {
    return path.extname(file) == ".html";
  })
  files = files.filter((file) => {
    let fileName = path.basename(file, path.extname(file));
    return !(fileName == "head" || fileName == "foot");
  })
  files = files.map((file) => {
    return path.basename(file, path.extname(file));
  })
  console.log(files);
  // fs.readFile("./head.html", 'utf8', (err, data1) => {
  //   if (err) throw err;
  //   header = data1;
  //   console.log(data1);
    // fs.readFile("./foot.html", 'utf8', (err, data2) => {
    //   if (err) throw err;
    //   footer = data2;
    //   console.log(data2);
      // for (var file of files) {
      var links = `\n`;
      files.map((file) => {
        let link = `<li><a href="${file}.html">${file.toUpperCase()}</a></li>\n`;
        links += link;
        fs.readFile(`./${file}`+`.html`, 'utf8', (err, data3) => {
          if (err) throw err;
          body = data3;
          console.log(data3);
          fs.writeFileSync(fileName+`${file}`+".html", buildHtml(header, links, body, footer), (err) => {
            console.log(`File ${file} saved!`);
          });
        });

      })
      // }
    // });
  // });
})

function buildHtml(headertext, linkstext, maintext, footertext) {
  return beautify_html(`${createHead("pl","Test")}<nav><ul>${linkstext}</ul></nav></header>${maintext}${createFoot("2017", "Lucifer")}`, options);
}

var options = {
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
