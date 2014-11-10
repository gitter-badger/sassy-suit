'use strict';

var gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	sassdoc			= require('gulp-sassdoc');

//
gulp.task('default', function() {
	return gulp.src('sassySuit.scss')
    	.pipe(sass({
    		style: 'expanded'
    	}))
    	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('dist/'))
});

/**
*
* Default sassDoc task
* Config options - http://sassdoc.com/gulp/
* API - http://sassdoc.com/annotations/
*
**/
gulp.task('sassdoc', function () {
  	return gulp.src('sassySuit.scss')
    	.pipe(sassdoc({
      		'dest': 'dist/sassdocs'
    	}));
});

gulp.task('watch', function() {
	gulp.watch('*.scss', ['sassdoc', 'default']);
});