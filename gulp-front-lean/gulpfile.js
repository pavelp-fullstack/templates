const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function style() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
}

function html() {
  return gulp.src('./src/**/*.html').pipe(gulp.dest('./dist'))
}

function watch() {
  browserSync.init({ server: { baseDir: './dist' } })
  gulp.watch('./src/**/*.scss', style)
  gulp.watch('./src/**/*.html', html).on('change', browserSync.reload)
}

exports.style = style
exports.html = html
exports.watch = watch
