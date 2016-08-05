var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var _ = require('underscore');
var elixir = require('laravel-elixir');
var config = elixir.config;

elixir.extend('imagemin', function(options) {
  config.img = _.extend({
    folder: 'img',
    outputFolder: 'img'
  }, config.img || {});

  options = _.extend({
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    use: [pngquant()]
  }, options);

  new elixir.Task('imagemin', function() {
    var paths = new elixir.GulpPaths()
      .src(config.get('assets.img.folder'))
      .output(config.get('public.img.outputFolder'));

    return gulp.src(paths.src.path)
      .pipe(changed(paths.output.path))
      .pipe(imagemin(options))
      .on('error', function(e) {
        new elixir.Notification().error(e, 'ImageMin Failed!');
        this.emit('end');
      })
      .pipe(gulp.dest(paths.output.path))
      .pipe(new elixir.Notification('ImageMin Complete!'));
  })
  .watch([
    config.get('assets.img.folder') + '/**/*.jpg',
    config.get('assets.img.folder') + '/**/*.jpeg',
    config.get('assets.img.folder') + '/**/*.svg',
    config.get('assets.img.folder') + '/**/*.gif',
    config.get('assets.img.folder') + '/**/*.png'
  ]);
});
