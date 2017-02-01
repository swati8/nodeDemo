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
gulp.task('buildTizen', function(callback) {
    runSequence(
        'clean',
        'TizenOrsayCommonCode',
        callback);
});

/* Gulp task at the time of build. */
gulp.task('TizenOrsayCommonCode', function(callback) {
    runSequence(
//        'sass',
        "scriptsStorage",
        callback);
});


/* Storage. */
gulp.task('scriptsStorage', function() {
    return gulp.src([
            path.join('*.js'),
            path.join('server/*.js'),
            path.join('server/*/*.js')
    ])
        .pipe(concat('appStorage.js'))
        .pipe(gulp.dest('./'));
});

/* Cleaning Task is started now.*/
gulp.task('clean', function (cb) {
    return gulp.src("/", 'appStorage.js', { read: false })
        .pipe(rimraf());
});

/* Converting sass to css. */
/*gulp.task('sass', function() {
    return gulp.src('lightbox/setup/scss/app.scss')
        //.pipe(concat('app.scss'))
        //.pipe(gulp.dest('./app'))
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('lightbox/css'))
});*/

/* Combining all controllers. */
/*gulp.task('scriptsController', function() {
    return gulp.src('lightbox/setup/scripts/controllers/!*.js')
        .pipe(concat('appControllers.js'))
        .pipe(insert.append(';'))
        .pipe(insert.prepend("'use strict';angular.module('lightbox')"))
        .pipe(gulp.dest('lightbox/scripts/'));
});*/

/* Task to be taken care at the time of development. */
/*
gulp.task('set-devTizen', function () {
    if(environments.development()){
        console.log("in dev");
        return gulp.src(['lightbox/setup/flavors/development/devConstants.js',
                'lightbox/setup/scripts/constants/constants.js',
                'lightbox/setup/tizen/scripts/constants/constants.js'])
            .pipe(concat('appConstants.js'))
            .pipe(gulp.dest('lightbox/scripts/'));
    }
});
*/
