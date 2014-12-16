// add colored output for SASS LOGGER
// https://github.com/SassySuit/colors.js

'use strict';

var 	gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	autoprefixer 		= require('gulp-autoprefixer'),
	sassdoc			= require('gulp-sassdoc');

gulp.task('default', function() {
	return gulp.src('application.scss')
    	.pipe(sass({
    		style: 'expanded',
    		precision: 100
    	}))
    	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('build/'))
});

/**
*
* Default sassDoc task
* Config options - http://sassdoc.com/gulp/
* API - http://sassdoc.com/annotations/
*
**/
// Example with external view configuration file.
gulp.task('sassdoc', function () {
  return gulp
    .src('tools/type')
    .pipe(sassdoc({
      'dest': 'sassdoc'
    }));
});


gulp.task('watch', function() {
	gulp.watch('**/*.scss', ['default']);
});
