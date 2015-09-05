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
var del= require('del');
var fs = require('fs');

var src = 'src/';
var dest = 'dist/';
var release = './';
var options = {
  plumber: {
    errorHandler: notify.onError({
      message: 'Error: <%= error.message %>',
      sound: false,
      wait: true
    })
  },
  markups: {
    src: [src + '**/*.jade', '!**/_*.jade']
  },
  styles: {
    src: [src + '**/app.scss']
  },
  scripts: {
    src: [src + '**/*.coffee']
  }
};

gulp.task('markups:develop', function() {
  return gulp.src(options.markups.src)
    .pipe(plumber(options.plumber))
    .pipe(jade({
      data: JSON.parse(fs.readFileSync(src + 'constants.json', 'utf8'))
    }))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('markups:publish', function() {
  return gulp.src(options.markups.src)
    .pipe(jade({
      data: JSON.parse(fs.readFileSync(src + 'constants.json', 'utf8'))
    }))
    .pipe(gulp.dest(release));
});

gulp.task('styles:develop', function() {
  return gulp.src(options.styles.src)
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

gulp.task('styles:publish', function() {
  return gulp.src(options.styles.src)
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
  return gulp.src(options.scripts.src)
    .pipe(plumber(options.plumber))
    .pipe(coffee())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts:publish', function() {
  return gulp.src(options.scripts.src)
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
gulp.task('publish', ['clean', 'markups:publish', 'styles:publish', 'scripts:publish'], function(cb) {
  del(['README.md', './gulpfile.js', './circle.yml', './src', './dist', './node_modules', './handson-front-end'], cb);
});
