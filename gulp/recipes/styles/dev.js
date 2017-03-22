var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var minify          = require('gulp-cssnano');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var browserSync     = require('browser-sync');
var fakePlumber     = require('../../utils/fakePlumber');

// config
var config = require('../../../config.json');

// options
var options = require('../../options/styles');

module.exports = function () {
  return gulp.src(config.source.styles + '/site.scss')
    .pipe(fakePlumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(autoprefixer(options.autoprefixer))
    .pipe(minify('all.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.destination.css))
    .pipe(browserSync.reload({stream: true}));
};
