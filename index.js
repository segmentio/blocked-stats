
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

module.exports = function(log, stats){
  var msg = 'Event loop blocked';
  // support both `log.warn()` and `log.warning()`, as our ecs-log-js uses `.warning()`
  // TODO: emit events rather than requiring "log" and "stats" interfaces
  var warn = (log.warn || log.warning).bind(log)
  blocked(function(ms){
    stats.histogram('event-loop-blocked', ms)
    if (ms > 10000) log.error(msg, { ms: ms })
    else if (ms > 1000) warn(msg, { ms: ms })
    else if (ms > 100) debug('Event loop blocked for %sms', ms | 0);
  });
};
