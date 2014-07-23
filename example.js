var Counters = require('s-counters');
var blocked = require('./');

var counters = Counters({ log: console });
blocked(console, counters);
Array(400000000).join('a');

setTimeout(function(){
  process.exit();
}, 200);