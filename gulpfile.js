var gulp            = require('gulp');
var gutil           = require('gulp-util');
var sequence        = require('run-sequence');
//var gulphandlebars  = require('gulp-handlebars');
var concat          = require('gulp-concat');
var browserSync     = require('browser-sync');
var fakeNotify      = require('./gulp/utils/fakeNotify');
//var jshint          = require('gulp-jshint');


// Utils
var lazyQuire = require('./gulp/utils/lazyQuire');

// Config
var config = require('./config.json');

// gulpfile booting message
gutil.log(gutil.colors.green('Starting to Gulp! Please wait...'));


/**
 * BrowserSync
 */
gulp.task('browserSync:dev',      [], lazyQuire(require, './gulp/recipes/browserSync/dev'));

gulp.task('browserSync', function(done) {
  sequence('browserSync:dev', function(){
    done();
  });
});


/**
 * JS distribution
 */
//gulp.task('scripts:hint',       [], lazyQuire(require, './gulp/recipes/scripts/hint'));

gulp.task('scripts:clean',       [], lazyQuire(require, './gulp/recipes/scripts/clean'));

gulp.task('scripts:dev',        [], lazyQuire(require, './gulp/recipes/scripts/dev'));

gulp.task('dist-js', function(done){
    //sequence('scripts:clean', 'scripts:hint', 'scripts:dev', function(){
    sequence('scripts:clean', 'scripts:dev', function () {
    done();
  });
});


/**
 * CSS distribution
 */
gulp.task('styles:clean',       [], lazyQuire(require, './gulp/recipes/styles/clean'));

gulp.task('styles:site',        [], lazyQuire(require, './gulp/recipes/styles/dev'));

gulp.task('dist-css', function(done){
  sequence('styles:clean', 'styles:site', function(){
    done();
  });
});


/**
 * Images distribution
 */
gulp.task('images:clean',       [], lazyQuire(require, './gulp/recipes/images/clean'));

gulp.task('images:minify',       [], lazyQuire(require, './gulp/recipes/images/minify'));

gulp.task('images:sprite',        [], lazyQuire(require, './gulp/recipes/images/sprite'));

gulp.task('dist-images', function(done){
  sequence('images:clean', 'images:sprite', 'images:minify', function(){
    done();
  });
});


/**
 * Default
 */
gulp.task('watch', function () {
    gulp.watch(config.source.styles + '/**/*', ['dist-css']).on('success', function(file) {
      console.log(file);
        fakeNotify();
    });

    gulp.watch(config.source.js + '/**/*', ['dist-js']);
});


/**
 * Full distribution
 */
gulp.task('dist', function(done){
  sequence('dist-images', 'dist-css', 'dist-js', function(){
    done();

    fakeNotify();
  });
});


/**
 * Clean
 */
gulp.task('clean-dist', ['images:clean', 'scripts:clean', 'styles:clean']);


/**
 * Default
 */
gulp.task('default', ['dist']);



