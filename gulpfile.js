import { dest, series, src, watch } from 'gulp';
// import babel from 'gulp-babel';

import gulpSass from 'gulp-sass';
import * as sass from 'sass';
const scss = gulpSass(sass);

// import autoprefixer from 'gulp-autoprefixer';
import cssMinfy from 'gulp-clean-css';

import concat from 'gulp-concat';
import rename from 'gulp-rename';

// CSS Gulp

function styles() {
  return (
    src('./public/Jormungandr/styles/**/*.scss')
      .pipe(scss())
      // .pipe(autoprefixer('last 2 versions'))
      .pipe(dest('./public/css/'))
      .pipe(cssMinfy())
      .pipe(
        rename({
          suffix: '.min',
        })
      )
      .pipe(dest('./public/css/'))
  );
}

// JS Gulp
import jsMinfy from 'gulp-terser';

function scripts() {
  return (
    src('./public/Jormungandr/scripts/**/*.js')
      // .pipe(babel())
      .pipe(concat('scripts.js'))
      .pipe(dest('./public/js'))
      .pipe(jsMinfy())
      .pipe(
        rename({
          suffix: '.min',
        })
      )
      .pipe(dest('./public/js'))
  );
}

// Watch Gulp
function watchGulp() {
  watch(
    [
      './public/Jormungandr/styles/**/*.scss',
      './public/Jormungandr/scripts/**/*.js',
    ],
    series(styles, scripts)
  );
}

export default series(styles, scripts, watchGulp);
