/**
 * This code create array of main code blocks in this folder. Based on this array script will build a static files.
*/

const fs = require('fs');
const path = require('path');
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
  files.map((file) => {

    fs.readFile(`./${file}`+`.html`, 'utf8', (err, data3) => {
      if (err) throw err;
      console.log(data3);
      console.log(`File ${file} saved!`);
    });

  })
})
