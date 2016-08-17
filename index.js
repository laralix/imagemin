const _ = require('underscore');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const Elixir = require('laravel-elixir');
const Task = Elixir.Task;
const Config = Elixir.config;

Elixir.extend('imagemin', function(src, output, options) {
  'use strict';

  const paths = new Elixir.GulpPaths()
    .src(src || Config.get('assetsPath') + '/img/**/*')
    .output(output || Config.get('publicPath') + '/img');

  options = _.extend({
    multipass: true,
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    use: [pngquant()]
  }, options);

  new Task('imagemin', function() {
    this.recordStep('Minifying Images');

    if (paths) {
      this.paths = paths;
      this.src = this.paths.src;
      this.output = this.paths.output;
    }

    return gulp
      .src(paths.src.path)
      .pipe(imagemin(options))
      .pipe(gulp.dest(paths.output.path));
  });
});
