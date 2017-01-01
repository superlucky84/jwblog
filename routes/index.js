import express from 'express';
var router = express.Router();
//var Blog = require('../public/components/Blog.js');
import Blog from '../src/components/Blog';

import React from 'react';
import ReactDOMServer from 'react-dom/server';


var aa = ReactDOMServer.renderToStaticMarkup(
  <Blog />
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', reactdom: aa});
});

module.exports = router;
