var gulp           = require('gulp');
var jshint         = require('gulp-jshint');

// config
var config = require('../../../config.json');


module.exports = function () {
	return gulp.src(['!' + config.source.js + '/plugins/**/*', config.source.js + '/**/*'])
  	.pipe(jshint(config.jsHint))
  	.pipe(jshint.reporter('jshint-stylish'));
};
