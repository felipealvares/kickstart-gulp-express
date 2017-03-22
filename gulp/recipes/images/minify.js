var gulp             = require('gulp');
var fakePlumber     = require('../../utils/fakePlumber');
var imagemin         = require('gulp-imagemin');

// config
var config = require('../../../config.json');

module.exports = function () {
  return gulp.src(['!' + config.source.sprites, '!' + config.source.sprites + '**/*', config.source.images + '/**/*'])
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest(config.destination.images));
};
