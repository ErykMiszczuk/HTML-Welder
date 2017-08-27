#!/usr/bin/env node
'use strict';
/**
 * Required libraries
 */
const fs = require('fs');
const path = require('path');
const prepare = require('./src/prepare.js');
const weld = require('./src/weld.js');
const downloadNormalize = require('./src/download-normalize.js');
const createWebsiteMap = require('./src/createWebsiteMap.js');
const vorpal = require('vorpal')();

vorpal
  .delimiter("welder$")
  .show();

vorpal
  .command('prepare', "Prepare file and directory structure.")
  .action(function(args, callback) {
    prepare();
    callback();
  });

vorpal
  .command('weld', "Join files and create nav menu")
  .action(function(args, callback) {
    weld();
    callback();
  })

vorpal
  .command('download-normalize', "Download normalize.css")
  .action(function(args, callback) {
    downloadNormalize();
    callback();
  })

vorpal
  .command('create-map', "Create website map")
  .action(function(args, callback) {
    createWebsiteMap();
    callback();
  })
