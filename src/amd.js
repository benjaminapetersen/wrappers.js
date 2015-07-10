'use strict';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    // this is where you finall register a global, if no other option.
    root.__my__object__name__ = factory();
  }
}(this, function() {

  // whatever is returned here will be passed into the above.
  return {

  }
}));
