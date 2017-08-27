#!/usr/bin/env node
"use strict";

const fs = require('fs');
const theme = require('./theme-basic.js');

function preparation() {
  /**
  * Prepare weld script to work
  */
  fs.mkdir("./build", () => {
    fs.mkdir("./templates", () => {
      fs.writeFile("./templates/template-head.js", theme.headtext, {'flag': 'wx'}, () => {
        fs.writeFile("./templates/template-foot.js", theme.footext, {'flag': 'wx'}, () => {
          fs.writeFile("./templates/template-nav.js", theme.navtext, {'flag': 'wx'}, () => {
          })
        })
      })
    })
    fs.mkdir("./build/assets", () => {
      fs.mkdir("./build/assets/css", () => {});
      fs.mkdir("./build/assets/js", () => {});
      fs.mkdir("./build/assets/img", () => {});
    })
    fs.mkdir("./input", () => {
      fs.writeFile("./input/main.html", theme.maintext, {'flag': 'wx'}, () => {
      })
    })
  })
}

module.exports = preparation;
