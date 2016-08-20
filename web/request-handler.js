var path = require('path');
var archive = require('../helpers/archive-helpers');
var url = require('url');
var fs = require('fs');
var util = require('./http-helpers.js');
// require more modules/folders here!


var actions = {
  'GET': function (req, res) {},
  'POST': function (req, res) {},
  'OPTIONS': function (req, res) {},
}

exports.handleRequest = function (req, res) {
  // // if (req.method === 'GET') {
  //   if (req.url === '/') {
  //     util.serveClient(res);
  //   } else {
  //     var filePath = archive.paths.archivedSites + req.url;
  //     fs.exists(filePath, function (exists) {
  //       if (exists) {
  //         fs.readFile(filePath, function (err, done) {
  //           if (err) {
  //             console.log('Not working!', err);
  //           } else {
  //             res.writeHead(200, util.headers);
  //             res.end(done);
  //           }
  //         }); 
  //       } else {
  //         res.writeHead(404, util.headers);
  //         res.end('');
  //       }
  //     });
  //   }
  // } else if (req.method === 'OPTIONS') {
  //   util.sendResponse(res, null);
  // } else if (req.method === 'POST') {
  //   // console.log('Yo Yo');
    
  //   var dataFile = '';
  //   req.on('data', function(err, data) {
  //     if (err) {
  //       console.log('error', err);
  //     }
  //     dataFile += data;
  //   console.log(dataFile, 'got ere');
  //   });
  //   // console.log('got ere');

  //   req.on('end', function (err, done) { 
  //     if (err) {
  //       console.log(err, "error request on end")
  //     }
  //     console.log(dataFile, 'mydata file!');
  //   });
  // } else {
  //   util.sendResponse(res, null, 404);
  // }

  //res.end(archive.paths.list);
};
