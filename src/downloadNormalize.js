'use strict';

const fs = require('fs');
const http = require('http');

function downloadNormalize() {
  var file = fs.createWriteStream("./build/assets/css/normalize.css");
  var request = http.get("http://necolas.github.io/normalize.css/7.0.0/normalize.css", (response) => {
    response.pipe(file);
  })
}

module.exports = downloadNormalize;
