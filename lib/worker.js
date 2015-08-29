/*!
**  bauer-plugin-watch -- Plugin for bauer to watch for file changes..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-watch>
*/
// - -------------------------------------------------------------------- - //

"use strict";

var chokidar = require("chokidar");
var factory = require("bauer-factory");

// - -------------------------------------------------------------------- - //

module.exports = function(worker, config) {
  
  worker.on("request",function(request, response) {
    
    var options = factory.merge(config.options, request.options);
    
    var watcher = chokidar.watch(request.watch, options);
    
    watcher.on("error", function(error) {
      watcher.close();
      response.sendError(error);
    });
    
    watcher.on("all", function(event, path) {
      if (event === "change" || event === "unlink") {
        watcher.close();
        response.sendOk({
          event: event,
          path: path
        });
      }
    });
  });
  
  worker.sendReady();
  
};

// - -------------------------------------------------------------------- - //
