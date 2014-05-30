var gulp = require('gulp');
var tsc = require('gulp-tsc');
var react = require('gulp-react');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var options = {
    "sourceMap": true,
    "declaration": true,
    "emitError": false,
    "module": "commonjs",
    "target": "ES5",
    "outDir": "build/src"
};

gulp.task('jsx', function() {
    return gulp.src('src/**/*.jsx')
      .pipe(react())
      .pipe(gulp.dest('build/js'));
});

gulp.task('tsc', ['jsx'], function() {
    return gulp.src('src/**/*.ts')
      .pipe(tsc(options))
      .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['tsc'], function() {
    return browserify({entries: './build/js/app.js'})
        .bundle({ debug: true })
        .pipe(source('deps.min.js'))
        .pipe(gulp.dest('dist'));
});
