'use strict';
/**
 * Required libraries
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const beautify_html = require('js-beautify').html;
const vorpal = require('vorpal')();

vorpal
  .delimiter("welder$")
  .show();

vorpal
  .command('prepare', "Prepare file and directory structure.")
  .action(function(args, callback) {
    /**
     * Prepare weld script to work
     */
    fs.mkdir("./build", () => {
      fs.writeFile("./head.html", headtext, {'flag': 'wx'}, () => {
        fs.writeFile("./foot.html", footext, {'flag': 'wx'}, () => {
          fs.writeFile("./main.html", maintext, {'flag': 'wx'}, () => {
            this.log("Create website starter pack");
          })
        })
      })
      fs.mkdir("./build/assets", () => {
        fs.mkdir("./build/assets/css", () => {});
        fs.mkdir("./build/assets/js", () => {});
        fs.mkdir("./build/assets/img", () => {});
      })
    })

    callback();
  });

var headtext = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Title</title>
</head>
<body>
<header>`;

var footext = `<footer>
&copy; Year Title
</footer>
</body>
</html>`;

var maintext = `<main>
<h1>It's me! Mario!</h1>
</main>`;

var fileName = "./build/";
var header = "";
var body = "";
var footer = "";
var files = [];

vorpal
  .command('weld', "Join files and create nav menu")
  .action(function(args, callback) {
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
      fs.readFile("./head.html", 'utf8', (err, data1) => {
        if (err) throw err;
        header = data1;
        this.log(data1);
        fs.readFile("./foot.html", 'utf8', (err, data2) => {
          if (err) throw err;
          footer = data2;
          this.log(data2);
          // for (var file of files) {
          var links = `\n`;
          files.map((file) => {
            let link = `<li><a href="${file}.html">${file.toUpperCase()}</a></li>\n`;
            links += link;
            fs.readFile(`./${file}`+`.html`, 'utf8', (err, data3) => {
              if (err) throw err;
              body = data3;
              this.log(data3);
              fs.writeFileSync(fileName+`${file}`+".html", buildHtml(header, links, body, footer), (err) => {
                this.log(`File ${file} saved!`);
              });
            });

          })
          // }
        });
      });
    })

  callback();
  })

function buildHtml(headertext, linkstext, maintext, footertext) {
  return beautify_html(`${headertext}<nav><ul>${linkstext}</ul></nav></header>${maintext}${footertext}`, options);
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

vorpal
  .command('download', "Download normalize.css")
  .action(function(args, callback) {
    /**
     * This code download normalize.css an place it in proper directory
     */
    var file = fs.createWriteStream("build/assets/css/normalize.css");
    var request = http.get("http://necolas.github.io/normalize.css/7.0.0/normalize.css", (response) => {
      response.pipe(file);
      this.log("CSS saved!");
    })
    callback();
  })
