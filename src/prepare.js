#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');
var __dirpath = path.resolve();
const theme = require('./theme-basic.js');

function preparation() {
  /**
  * Prepare weld script to work
  */
  fs.mkdir(__dirpath+"/build", () => {
    fs.mkdir(__dirpath+"/templates", () => {
      fs.writeFile(__dirpath+"/templates/template-head.js", theme.headtext, {'flag': 'wx'}, () => {
        fs.writeFile(__dirpath+"/templates/template-foot.js", theme.footext, {'flag': 'wx'}, () => {
          fs.writeFile(__dirpath+"/templates/template-nav.js", theme.navtext, {'flag': 'wx'}, () => {
          })
        })
      })
    })
    fs.mkdir(__dirpath+"/build/assets", () => {
      fs.mkdir(__dirpath+"/build/assets/css", () => {});
      fs.mkdir(__dirpath+"/build/assets/js", () => {});
      fs.mkdir(__dirpath+"/build/assets/img", () => {});
    })
    fs.mkdir(__dirpath+"/input", () => {
      fs.writeFile(__dirpath+"/input/main.html", theme.maintext, {'flag': 'wx'}, () => {
      })
    })
    fs.writeFile(__dirpath+"/weld.js", theme.weldtext, {'flag': 'wx'}, () => {
    })
  })
}

module.exports = preparation;
