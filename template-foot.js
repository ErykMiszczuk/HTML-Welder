"use strict";

function createFoot(year, title) {
  return `<footer>
        &copy; ${year} ${title}
      </footer>
    </body>
  </html>`
}

module.exports = createFoot;
