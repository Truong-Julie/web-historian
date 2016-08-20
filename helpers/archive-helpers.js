var fs = require('fs');
var path = require('path');
var _ = require('underscore');

// html/text -> content type
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  var dataBody = '';
  fs.readFile(exports.paths.list, function(err, data) {
    dataBody += data;
    callback(dataBody.split('\n'));
  });
};

exports.isUrlInList = function(url, callback) {
  exports.readListOfUrls(function (data) {
    if (data.indexOf(url) > -1) {  
      callback(true);
    } else {
      callback(false);
    }
  });
};

exports.addUrlToList = function(url, callback) {
  if (url) {
    fs.appendFile(exports.paths.list, url, function (err) {
      if (err) {
        console.log('ERROR: ', err);
      } else {
        callback();
      }
    });
  }

};

exports.isUrlArchived = function(url, callback) {
  fs.exists(exports.paths.archivedSites + '/' + url, function (exists) {
    if (exists) {
      callback(true);
    } else {
      callback(false);
    }
  });
};

exports.downloadUrls = function() {
};
