"use strict";

const fs = require('fs');
const theme = require('./theme-basic.js');

/**
 * Prepare weld script to work
 */
fs.mkdir("./build", () => {
  fs.writeFile("./template-head.js", theme.headtext, {'flag': 'wx'}, () => {
    fs.writeFile("./template-foot.js", theme.footext, {'flag': 'wx'}, () => {
      fs.writeFile("./template-nav.js", theme.navtext, {'flag': 'wx'}, () => {
        fs.writeFile("./main.html", theme.maintext, {'flag': 'wx'}, () => {
          console.log("Create website file and directory structure.");
        })
      })
    })
  })
  fs.mkdir("./build/assets", () => {
    fs.mkdir("./build/assets/css", () => {});
    fs.mkdir("./build/assets/js", () => {});
    fs.mkdir("./build/assets/img", () => {});
  })
})
