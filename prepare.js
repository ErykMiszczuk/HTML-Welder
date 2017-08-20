"use strict";

const fs = require('fs');

/**
 * Prepare weld script to work
 */
fs.mkdir("./build", () => {
  fs.writeFile("./head.html", headtext, {'flag': 'wx'}, () => {
    fs.writeFile("./foot.html", footext, {'flag': 'wx'}, () => {
      fs.writeFile("./main.html", maintext, {'flag': 'wx'}, () => {
        console.log("Create website starter pack");
      })
    })
  })
  fs.mkdir("./build/assets", () => {
    fs.mkdir("./build/assets/css", () => {});
    fs.mkdir("./build/assets/js", () => {});
    fs.mkdir("./build/assets/img", () => {});
  })
})

var headtext = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <header>`;

var footext = `    <footer>
      &copy; Year Title
    </footer>
  </body>
</html>`;

var maintext = `<main>
  <h1>It's me! Mario!</h1>
</main>`;
