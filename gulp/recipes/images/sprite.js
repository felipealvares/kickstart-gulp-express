var gulp            = require('gulp');
var plumber         = require("gulp-plumber");
var spritesmith     = require("gulp.spritesmith");
var buffer          = require('vinyl-buffer');
var imagemin        = require('gulp-imagemin');

// config
var config = require('../../../config.json');

// options
var options = require('../../options/images');

module.exports = function () {
  var images = gulp.src(config.source.sprites + '/*.png')
	.pipe(plumber())
	.pipe(spritesmith(options.spritesmith));
    images.img.pipe(buffer()).pipe(imagemin()).pipe(gulp.dest(config.destination.images));
    images.css.pipe(gulp.dest(config.source.styles));
    return images;
};