#!/usr/bin/env node
'use strict';
/**
 * Required libraries
 */
const vorpal = require('vorpal')();

vorpal
  .delimiter("welder$")
  .show();

vorpal
  .command('prepare', "Prepare file and directory structure.")
  .action(function(args, callback) {
    let prepare = require('./src/prepare.js');
    prepare();
    this.log("Creating directory structure");
    callback();
  });

vorpal
  .command('weld', "Join files and create nav menu")
  .action(function(args, callback) {
    let weld = require('./weld.js');
    weld();
    this.log("Website created")
    callback();
  })

vorpal
  .command('download-normalize', "Download normalize.css")
  .action(function(args, callback) {
    let downloadNormalize = require('./src/downloadNormalize.js');
    downloadNormalize();
    this.log("Download Complete");
    callback();
  })

vorpal
  .command('create-map', "Create website map")
  .action(function(args, callback) {
    let createWebsiteMap = require('./src/createWebsiteMap.js');
    createWebsiteMap();
    this.log("Map created");
    callback();
  })
