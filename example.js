var stats = require('statsy')({ prefix: 'example' });
var blocked = require('./');

blocked(console, stats);
Array(40000000).join('a');

setTimeout(function(){
  process.exit();
}, 200);