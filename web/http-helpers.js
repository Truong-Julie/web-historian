var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveClient = function(res) {
  var dataFile = '';
  fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, data) {
    if (err) {
      console.log('error: ', err);
    } else {   
      res.writeHead(200, exports.headers);
      res.end(data);
    }
  });
};

exports.sendResponse = function(res, data, statusCode) {
  statusCode = statusCode || 200;
  res.writeHead(statusCode, exports.headers);
  res.end(data);
};

exports.serveAssets = function(res, asset, callback) {
  var dataFile = '';
  var filePath = '';
  filePath = archive.paths.list;
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.log('error: ', err);
    } else {
      data = data.split('\n');

      if (data.indexOf(asset.slice(1, asset.length)) === -1) {

        fs.writeFileSync(filePath);
        fs.read(filePath, function(err, data) {

        });
      }
    }
  });
};



// As you progress, keep thinking about what helper functions you can put here!
