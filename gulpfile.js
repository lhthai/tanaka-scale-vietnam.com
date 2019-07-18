const gulp = require('gulp');
const minify = require('gulp-minify');
const minifyCss = require('gulp-minify-css');
const imagein = require('gulp-imagemin')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')

function scripts() {
  return gulp.src([
    'public/js/jquery.min.js',
    'public/js/!(jquery.min)*.js'
  ])
    .pipe(minify({
      exclude: ['tasks'],
      // ignoreFiles: ['-min.js']
    }))
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest('dist/js'));
}

function css() {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({ debug: true }))
    .pipe(concat("style.min.css"))
    .pipe(minifyCss({ compatibility: 'ie8', ignoreFiles: ['-.woff*'] }))
    .pipe(gulp.dest("dist/css"))
}


function images() {
  return gulp.src('public/images/*')
    .pipe(imagein())
    .pipe(gulp.dest("dist/images"));
}

function copy() {
  return gulp.src('public/css/*.woff*')
    .pipe(gulp.dest("dist/css"))
}

gulp.task('compress', gulp.series(scripts, css, images, copy));
