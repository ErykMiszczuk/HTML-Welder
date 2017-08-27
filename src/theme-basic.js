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

module.exports = theme;
