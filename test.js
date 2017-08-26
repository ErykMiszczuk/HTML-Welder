"use strict";

const fs = require('fs');
const path = require('path');
const beautify_html = require('js-beautify').html;
const createHead = require('./template-head.js');
const createFoot = require('./template-foot.js');
const createNav = require('./template-nav.js');
const createWebsiteMap = require('./createWebsiteMap.js');

var readWebsiteMap = fs.createReadStream('./websiteMap.json');
var websiteMap = "";

readWebsiteMap.setEncoding('utf8');

readWebsiteMap.on('data', function(chunk) {
    websiteMap += chunk;
    console.log(chunk);
});

readWebsiteMap.on('end', function() {
    let websiteMapObj = JSON.parse(websiteMap);
    console.log(websiteMapObj);
});
console.log('\n\n\n\n');

var map = require('./websiteMap.json');
console.log(map);
