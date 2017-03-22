var notify    = require('gulp-notify');
var plumber   = require('gulp-plumber');
notify.logLevel(0);

var title = 'Erro no <%= error.plugin %>';
var message = '+ info no terminal';

var onError = function(err, e) {
	notify.onError({
		message: message,
		title: title
	})(err);
}

module.exports = function(err, e) {
	return plumber({
		errorHandler: onError
	});
}