"use strict";

  function createNav(links, logo = '') {
    return `<header>${logo}<nav>
    ${links}
    </nav></header>`
  }

  module.exports = createNav;
