const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

gulp.task('scss', () => {
  return gulp
    .src('dev/scss/**/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ["scss"], () => {
  gulp.watch('dev/scss/**/*.scss', ['scss']);
});
