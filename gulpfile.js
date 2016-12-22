var gulp = require('gulp');

gulp.task('build', ['compress-css', 'compile-elm'])

gulp.task('compile-css', function() {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    var rename = require("gulp-rename");

    return gulp.src('main.css')
        .pipe(postcss([autoprefixer({
            browsers: ['> 5%']
        })]))
        .pipe(rename('main-compiled.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('compile-elm', function() {
    var elm = require('gulp-elm');
    var uglify = require('gulp-uglify');

    return gulp.src('src/*.elm')
        .pipe(elm.bundle('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
})

gulp.task('compress-css', ['compile-css'], function() {
    var uglifycss = require('gulp-uglifycss');

    return gulp.src('main-compiled.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('./'));
})

gulp.task('backstop_reference', function() {
    var backstopjs = require('backstopjs');
    backstopjs('reference');
});

gulp.task('backstop_test', function() {
    var backstopjs = require('backstopjs');
    backstopjs('test');
});