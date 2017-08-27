#!/usr/bin/env node
'use strict';
/**
 * Required libraries
 */
const fs = require('fs');
const path = require('path');
const prepare = require('./prepare.js');
const weld = require('./weld.js');
const downloadNormalize = require('./download-normalize.js');
const createWebsiteMap = require('./createWebsiteMap.js');
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
