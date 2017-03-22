var notify    = require('gulp-notify');
notify.logLevel(0);


/**
 * Fake the gulp-notfy functionality
 * to provide a consistent interface
 * for non-stream notifications
 *
 * @param message
 */
module.exports = function () {
  return notify().write({title: 'Succeso!', message: 'Arquivos compilados.', onLast:true});
};
