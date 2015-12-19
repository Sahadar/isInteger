'use strict';

var qunit = require("qunit");

qunit.run({
    code: {
    	path : "isinteger.js",
    	namespace : 'isInteger'
    },
    tests: "test/main.js"
});