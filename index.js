
var blocked = require('blocked');
var debug = require('debug')('s-blocked-stats');

/**
 * Provide stats about when the event loop is blocked to the logger
 * and counters.
 *
 * @param {Logger} log
 * @param {Counters} counters
 * @return
 */

module.exports = function(log, counters){
  var msg = 'Event loop blocked';
  blocked(function(ms){
    counters.get(msg).update(ms);
    if (ms > 10000) log.error(msg, { ms: ms })
    else if (ms > 1000) log.warn(msg, { ms: ms })
    else if (ms > 100) debug('Event loop blocked for %sms', ms | 0);
  });
};