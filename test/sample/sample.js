// - -------------------------------------------------------------------- - //

"use strict";

var fs = require("fs");
var assert = require("assert");
var Crawler = require("bauer-crawler");

var crawler = new Crawler({
  config: {
    
  }
});

crawler.loadPlugin(__dirname + "/../../");

crawler.start(function() {
  var file = __dirname + "/sample.txt";
  setTimeout(function() {
    fs.writeFileSync(file,Math.random());
  },500);
  return this.Promise
    .watch(file)
    .then(function(output) {
      assert.strictEqual(output.event,"change");
      assert.strictEqual(output.path,file);
      fs.unlinkSync(file);
    });
});

// - -------------------------------------------------------------------- - //
