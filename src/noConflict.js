"use strict";


// This one is interesting in the following ways:
// - allows define()
// - allows exports
// - noConflict seems to be jQuery-ish
//   - captures & returns the previous 'myVar' so that user can assign to something else
//   - then sets the global.myVal
(function (global) {

var myVar = {};

myVar.version = '0.0.1';

// Export to popular environments boilerplate.
  if (typeof define === 'function' && define.amd) {
    define(myVar);
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = myVar;
  }
  else {
    myVar._prevmyVar = global.myVar;

    myVar.noConflict = function () {
      global.myVar = myVar._prevmyVar;
      return myVar;
    };

    global.myVar = myVar;
    }
}(this));
