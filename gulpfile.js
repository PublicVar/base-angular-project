var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

// Sass compiling
gulp.task('sass',function(){
    sass('sass/',{
        style:'compressed'
    })
    .on("error",console.error.bind(console))
    .pipe(gulp.dest('css/'))
    .pipe(livereload());
});

gulp.task('html-livereload',function(){
    gulp.src('**/*.html')
    .pipe(livereload())
});

// Watch files
gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch('**/*.html',['html-livereload']);

});

    


gulp.task('default',['sass','watch']);

