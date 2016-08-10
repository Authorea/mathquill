var MQ1 = getInterface(1);
for (var key in MQ1) (function(key, val) {
  if (typeof val === 'function') {
    MathQuill[key] = function() {
      insistOnInterVer();
      return val.apply(this, arguments);
    };
    MathQuill[key].prototype = val.prototype;
  }
  else MathQuill[key] = val;

}(key, MQ1[key]));

if ( typeof exports === 'object' ) {
  // add the css data to the head tag
  require('./mathquill.css');

  // export the module
  module.exports = MathQuill;
}

}());
