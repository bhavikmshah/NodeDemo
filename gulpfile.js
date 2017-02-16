'use strict';

const gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
const del = require('del');
var fs = require('fs');
var source = require("vinyl-source-stream");


/*gulp.task('browserify-client', function() {
  return gulp.src('./bin/www')
    .pipe(browserify({
      insertGlobals: true
    }))
	.pipe(rename('server.js'))    
    .pipe(gulp.dest('./build'))
    //.pipe(gulp.dest('public/javascripts'));
});*/

gulp.task('browserify-client', function() {
browserify(['./bin/www'],{
    //entries: './bin/www',
    debug: true,
	node:true,
	browserField:false,
  })
  .bundle()
   .pipe(source('utils.js'))
  .pipe(rename('server.js'))    
    .pipe(gulp.dest('./build'));
});
  
  
gulp.task('cleanBuild',function() {
   del(['./build'], { force: true });
});

gulp.task('default', ['cleanBuild','browserify-client']);