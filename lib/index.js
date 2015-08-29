/*!
**  bauer-plugin-watch -- Plugin for bauer to watch for file changes..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-watch>
*/
// - -------------------------------------------------------------------- - //

"use strict";

module.exports = {
  
  name: "watch",
  
  config: {
    workers: 1,
    slots: 1,
    delay: 0,
    options: {
      // -- https://github.com/paulmillr/chokidar
      // persistent: true,
      // 
      // ignored: '*.txt',
      // ignoreInitial: false,
      // followSymlinks: true,
      // cwd: '.',
      // 
      // usePolling: true,
      // alwaysStat: false,
      // depth: undefined,
      // interval: 100,
      // 
      // ignorePermissionErrors: false,
      // atomic: true
    }
  },
  
  worker: __dirname + "/worker.js",
  promise: __dirname + "/promise.js"
  
};

// - -------------------------------------------------------------------- - //
