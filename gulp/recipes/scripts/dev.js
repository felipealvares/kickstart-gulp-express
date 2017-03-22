var gulp            = require('gulp');
var sourcemaps      = require("gulp-sourcemaps");
var concat          = require("gulp-concat");
var header          = require('gulp-header');
var uglify          = require('gulp-uglify');
var fakePlumber     = require('../../utils/fakePlumber');
var browserSync     = require('browser-sync');

// config
var config = require('../../../config.json');

// options
var options = require('../../options/scripts');

module.exports = function () {
  return gulp.src(config.source.jsArrayPath)
    .pipe(fakePlumber())
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(header(options.banner))
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest(config.destination.js))
    .pipe(browserSync.reload({stream: true}));
};
