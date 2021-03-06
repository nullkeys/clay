var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', function() {
    gulp.src('app/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('default', function() {
    gulp.watch('app/sass/**/*.scss', ['styles']);
});
