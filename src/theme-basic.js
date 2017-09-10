"use strict";

var theme = {}
  theme.headtext = `"use strict";

  function createHead(lang, title, stylesheets = "") {
    return \`<!DOCTYPE html>
    <html lang="\${lang}">
    <head>
    <meta charset="utf-8">
    <title>\${title}</title>\${stylesheets}
    </head>
    <body>\`
  }

  module.exports = createHead;`,

  theme.footext = `"use strict";

  function createFoot(year, title) {
    return \`<footer>
    &copy; \${year} \${title}
    </footer>
    </body>
    </html>\`
  }

  module.exports = createFoot;`,

  theme.navtext = `"use strict";

  function createNav(links, logo = '') {
    return \`<header>\${logo}<nav>
    \${links}
    </nav></header>\`
  }

  module.exports = createNav;`

  theme.maintext = `<main>
  <h1>It's me! Mario!</h1>
  </main>`

  theme.weldtext = `#!/usr/bin/env node
  "use strict";

  const fs = require('fs');
  const path = require('path');
  var __dirpath = path.resolve();
  const beautify_html = require('js-beautify').html;
  const createHead = require(__dirpath+'/templates/template-head.js');
  const createFoot = require(__dirpath+'/templates/template-foot.js');
  const createNav = require(__dirpath+'/templates/template-nav.js');

  var fileName = "./build/";
  var fileInput = __dirpath+"/input/";

  var websiteMap = require(fileInput+'websiteMap.json');

  var links = '';
  websiteMap.map((anchor) => {
    if (anchor.visible) {
      let link = \`<li><a href="\${anchor.filepath}">\${anchor.name}</a></li>\`;
      links += link;
    }
    fs.readFile(fileInput+\`\${anchor.filepath}\`, 'utf8', (err, data) => {
      if (err) throw err;
      fs.writeFileSync(fileName+\`\${anchor.filepath}\`, buildHtml(data, anchor), (err) => {
        if (err) throw err;
      });
    });

  })

  function buildHtml(maintext, data = {}) {
    return beautify_html(\`\${createHead("pl", data.name)}\${createNav(links)}\${maintext}\${createFoot("2017", "Lucifer")}\`, beautify_html_options);
  }

  var beautify_html_options = {
      "indent_char": " ",
      "indent_size": 2,
      "extra_liners": [],
      "html": {
          "end_with_newline": true,
          "js": {
              "indent_size": 2
          },
          "css": {
              "indent_size": 2
          }
      },
  }`

module.exports = theme;
