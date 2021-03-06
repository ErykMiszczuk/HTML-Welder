HTML-Welder
===========

Node.js script to build static websites from 3 html files: header, footer and content of page. This script also create navigation menu, based on file structure.

The other two scripts generate file and directory structure, and download normalize.css.

## Getting started

This is Node.js script so you must install it first.

### Installation
1. Clone or download this repository, and place it in empty directory.
2. Open HTML-Welder directory with command line.
3. Install dependencies using `npm install`.
4. Create file and directory structure typing in command line `node prepare.js`.

### Prepare workflow
`node prepare.js` create 3 html files and directory structure:
- head.html contain `head` and opening `body` tag.
- foot.html contain `footer` tag, and closing `body`.
- other \*.html files are treated as content files. Their names will be names of created sites (so if you now enter `node weld.js` script will generate one HTML file called main.html in **build** directory).
- build directory contains:
  - assets directory where you put your style sheets, scripts, images.
  - HTML files generated by script (now should be empty).

### Building websites
Type `node weld.js` in the main directory (one up from **build**). Script will find all html files in directory, next based on their names (except for foot.html and head.html) will create html files with same names but in build directory (if you rename main to tag.html, in build folder will appear tag.html file with head.html and foot.html content). These html files contains html from head.html, navigation to other created files, content provided by you, and footer.

## Important notes
`node prepare.js` do not overwrite existing files and directories, so if you want to start again in the same folder you must delete build folder and all html files.

`node weld.js` overwrite files in build directory. If you change anything in html files in build directory, you have to copy those files elsewhere.

HTML-Welder is released in early state so it can contain bugs, bad programming practices, etc. You use it at your own risk.

## Any troubles?
If you find any issue, bug you can report it by github, send fix, patch, create pull request. But if you have problems with script, that's mostly your problem.

## Any ideas?
If you have any ideas create new issue. If you implemented it create pull request. I will try to update code as fast as possible.

## License

The MIT License (MIT)

Copyright (c) 2017 Eryk Miszczuk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
