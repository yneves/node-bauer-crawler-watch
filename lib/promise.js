/*!
**  bauer-plugin-watch -- Plugin for bauer to watch for file changes..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-watch>
*/
// - -------------------------------------------------------------------- - //

"use strict";

// - -------------------------------------------------------------------- - //

module.exports = {
  
  watch: {
    
    // .watch() :Promise
    0: function() {
      return this.then(function(file) {
        return this.Promise.watch({ watch: file });
      })
    },
    
    // .watch(files Array) :Promise
    a: function(files) {
      return this.watch({ watch: files });
    },
    
    // .watch(file String) :Promise
    s: function(file) {
      return this.watch({ watch: file });
    },
    
    // .watch(files Array, options Object) :Promise
    ao: function(files,options) {
      return this.watch({ watch: files, options: options });
    },
    
    // .watch(file String, options Object) :Promise
    so: function(file,options) {
      return this.watch({ watch: file, options: options });
    },
    
    // .watch(options Object) :Promise
    o: function(options) {
      return this.then(function() {
        return this.requestWorker("watch",options);
      });
    }
    
  }
      
};

// - -------------------------------------------------------------------- - //
