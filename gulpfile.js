'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var please = require('gulp-pleeease');
var notify = require('gulp-notify');
var rimraf = require('rimraf');
var fs = require('fs');

var options = {
  plumber: {
    errorHandler: notify.onError({
      message: 'Error: <%= error.message %>',
      sound: false,
      wait: true
    })
  }
};

var src = 'src/';
var dest = 'dist/';
var release = 'prod/';

gulp.task('markups:develop', function() {
  return gulp.src([src + '**/*.jade'])
    .pipe(plumber(options.plumber))
    .pipe(jade({
      data: JSON.parse(fs.readFileSync(src + 'constants.json', 'utf8'))
    }))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('markups:build', function() {
  return gulp.src(src + '**/*.jade')
    .pipe(jade({
      data: JSON.parse(fs.readFileSync(src + 'constants.json', 'utf8'))
    }))
    .pipe(gulp.dest(release));
});

gulp.task('styles:develop', function() {
  return gulp.src(src + '**/app.scss')
    .pipe(plumber(options.plumber))
    .pipe(sass({
      errLogToConsole: true,
      sourceComments: 'normal'
    }))
    .pipe(please({
      'minifier': false,
      'autoprefixer': {'browsers': ['last 4 version', 'ie 8', 'iOS 4', 'Android 2.3']}
    }))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles:build', function() {
  return gulp.src(src + '**/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      sourceComments: 'normal'
    }))
    .pipe(please({
      'minifier': true,
      'autoprefixer': {'browsers': ['last 4 version', 'ie 8', 'iOS 4', 'Android 2.3']}
    }))
    .pipe(gulp.dest(release));
});

gulp.task('scripts:develop', function() {
  return gulp.src([src + '**/*.coffee'])
    .pipe(plumber(options.plumber))
    .pipe(coffee())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts:build', function() {
  return gulp.src([src + '**/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest(release));
});

gulp.task('server', function() {
  return browserSync.init(null, {
    server: {baseDir: dest},
    notify: false,
    open: 'external'
  });
});

gulp.task('watch', function() {
  gulp.watch([src + '**/*.jade', './constants.json'], ['markups:develop']);
  gulp.watch([src + '**/*.scss'], ['styles:develop']);
  gulp.watch([src + '**/*.coffee'], ['scripts:develop']);
});

gulp.task('clean', function(cb) {
  rimraf('./prod', cb);
});

gulp.task('develop', ['markups:develop', 'styles:develop', 'scripts:develop', 'watch', 'server']);
gulp.task('build', ['clean', 'markups:build', 'styles:build', 'scripts:build']);
