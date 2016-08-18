var path = require('path');
var archive = require('../helpers/archive-helpers');
var url = require('url');
var fs = require('fs');
var util = require('./http-helpers.js');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log(req.url, 'url');
  if (req.method === 'GET') {
    if (req.url === '/') {
      util.serveClient(res);
    } else {
      var filePath = archive.paths.archivedSites + req.url;
      console.log(filePath);
      fs.exists(filePath, function (exists) {
        if (exists) {
          fs.readFile(filePath, function (err, done) {
            if (err) {
              console.log('Not working!', err);
              res.writeHead(404, util.headers);
            } else {
              res.writeHead(200, util.headers);
              res.end(done);
            }
          }); 
        } else {
          console.log('got here!')
          res.writeHead(404, util.headers);
          res.end('')
        }
      });
    }

    //   var dataFile = '';


    // }




    // if (req.url === '/www.google.com') {
      
  // if the req url !== / 
      // util.serveAssets(res, req.url, function(err, data) {
      //   if (err) {
      //     console.log('error: ', err);
      //   } else {
      //     res.writeHead(200, exports.headers);
      //     res.end(data);
      //   }
      // });
  } else if (req.method === 'OPTIONS') {
    util.sendResponse(res, null);
  } else if (req.method === 'POST') {

  } else {
    util.sendResponse(res, null, 404);
  }

  //res.end(archive.paths.list);
};
