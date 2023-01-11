const {src, dest, series, watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');



function minifyhtml(){
    return src('dev/*.html')
    .pipe(htmlmin({
         collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(dest('dest/'))
}
function convertstyle(){
    return src('dev/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dest/'));
}
function mincss(){
    return src('dev/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(dest('dest'));
  };
function minjs(){
    return src('dev/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('dest'));
}
function watchfn(){
    browserSync.init({
        server: {
            baseDir: "dest"
        }
    });
watch('dev/index.html', minifyhtml);
watch('dev/style.scss', series(
    convertstyle,
    mincss
    ));
watch('dev/js.js', minjs);
}
exports.default = watchfn

