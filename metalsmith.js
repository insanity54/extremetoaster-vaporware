// This is the build file. Simply run this script which will convert Extremetoaster templated pages into html pages, dumping them under the dist directory.


var path = require('path');

Metalsmith(path.join(__dirname, 'articles', 'learning-tools'))
  .use(markdown())
  .use(layouts('handlebars'))
  .build(function(err) {
    if (err) throw err;
    console.log('Build finished!');
  });
