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
  setTimeout(function() {
    fs.writeFileSync(__dirname + "/sample.txt",Math.random());
  },500);
  return this.Promise
    .watch(__dirname + "/sample.txt")
    .then(function(output) {
      assert.strictEqual(output.event,"change");
      assert.strictEqual(output.path,__dirname + "/sample.txt");
    });
});

// - -------------------------------------------------------------------- - //
