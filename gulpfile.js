const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const path = require('path');

const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.js');

const paths = {
    src: path.resolve(__dirname, './src'),
    view: path.resolve(__dirname, './views'),
    dest: path.resolve(__dirname, './public/javascripts')
};

//gulp.task('default', function() {
//    return gulp.src(paths.src + '/*.js')
//        .pipe(webpack(webpackConfig))
//        .pipe(gulp.dest(paths.dest));
//});
//

//gulp.task('default', () => {
//  return gulp.src('src/**/*.js')
//  .pipe(babel({
//    presets: ['react','es2015']
//  }))
//  .pipe(gulp.dest('public'));
//});

//gulp.task('watch', ['default'], function() {
//  gulp.watch(paths.src + '/**/*.js', ['default']);
//
//});

