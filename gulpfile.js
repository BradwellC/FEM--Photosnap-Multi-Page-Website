const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('public/MyLibrary/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['pages/*.html'] }))
    .pipe(dest('public/css'));
}

function watchSass() {
  watch(['public/MyLibrary/**/*.scss', 'pages/*.html'], buildStyles);
}

exports.default = series(buildStyles, watchSass);
