var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync');

gulp.task('deleteDistFolder', function() {
  return del("./dist");
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./assets/images/**/*', '!./assets/images/icons', '!./assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./index/html")
  .pipe(usemin({
    css:[function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
  .pipe(gulp.dest("./dist"));
});
gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
