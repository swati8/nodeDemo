var gulp = require('gulp');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
//var deleteFile = require('gulp-delete-file');
var rimraf = require('gulp-rimraf');
var path = require('path');
//var insert = require('gulp-insert');
//var environments = require('gulp-environments');
//var uglify = require('gulp-uglify');
//var qa = environments.make("qa");

/* Gulp task at the time of build. */
gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'controllers',
        callback);
});

/* Gulp task at the time of build. */
gulp.task('controllers', function(callback) {
    runSequence(
//        'sass',
        "scriptsController",
        callback);
});


/* Storage. */
gulp.task('scriptsController', function() {
    return gulp.src('client/src/*/*.js')
        .pipe(concat('appControllers.js'))
        .pipe(gulp.dest('./client'));
});

/* Cleaning Task is started now.*/
gulp.task('clean', function (cb) {
    return gulp.src('./client/appControllers.js', { read: false })
        .pipe(rimraf());
});

