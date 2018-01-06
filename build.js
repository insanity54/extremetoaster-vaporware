#!/usr/bin/env node


// This is the build file. Simply run this script which will convert Extremetoaster templated pages into html pages, dumping them under the dist directory.

var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var jstransformer = require('metalsmith-jstransformer');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');


Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
  .metadata({                 // add any variable you want
                              // use them in layout-files
    sitename: "Extremetoaster Learning Centre",
    siteurl: "http://extremetoaster.com/",
    description: "Modern Learning Centres for the students of planet Earth.",
    generatorname: "Metalsmith",
    generatorurl: "http://metalsmith.io/"
  })
  .source('./src')            // source directory
  .destination('./dist')      // destination directory
  .clean(true)                // clean destination before
  .use(collections({          // group all blog posts by internally
    learningtools: 'learning-tools/*.md',       // adding key 'collections':'posts'
    articles: 'articles/*.md'
  }))                         // use `collections.posts` in layouts
  .use(markdown())            // transpile all md into html
  .use(permalinks({           // change URLs to permalink URLs
    relative: false           // put css only in /css
  }))
  .use(jstransformer({
    'pattern': '**',
    'layoutPattern': 'layouts/**',
    'defaultLayout': 'layouts/article.hbs'
  }))
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });
