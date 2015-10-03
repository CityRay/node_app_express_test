var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('jsx', function(){
    browserify('./public/javascripts/components/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('sass', function() {
    gulp.src('./public/stylesheets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets/css'));
})


gulp.task('watch', function() {
    gulp.watch("public/javascripts/components/**/*.jsx", ["jsx"])
})

gulp.task('default', ['jsx', 'sass']);

gulp.task('dev', ['jsx', 'sass', 'watch']);