
var blocked = require('blocked');
var debug = require('debug')('blocked-stats');

/**
 * Provide stats about when the event loop is blocked to the logger
 * and counters.
 *
 * @param {Logger} log
 * @param {Counters} counters
 * @return
 */

module.exports = function(log, counters){
  blocked(function(ms){
    counters.get('blocked').update(ms);
    if (ms > 10000) log.error('blocked', { ms: ms })
    else if (ms > 1000) log.warn('blocked', { ms: ms })
    else if (ms > 100) debug('blocked for %sms', ms | 0);
  });
};