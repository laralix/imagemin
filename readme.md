# laralix-imagemin

This is a simple ImageMin wrapper around Laravel Elixir 6.x. Add it to your Elixir-enhanced Gulpfile, like so:

## Install

```
npm install laralix-imagemin --save-dev
```

## Usage

```javascript
imagemin(src, output, options);
```

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laralix-imagemin');

elixir(function(mix) {
   mix.imagemin('resources/assets/img/*', 'public/img');
});
```

This will scan your `resources/assets/img` directory for all image files and place them in your `public/img` folder.

### Custom ImageMin Options

You can override the default imagemin options by passing in an options object like so:

```javascript
mix.imagemin('resources/assets/img/*', 'public/img', {
    interlaced: true,
    optimizationLevel: 3,
    progressive: true
});
```

Available ImageMin options are listed [here in the gulp-imagemin readme](https://github.com/sindresorhus/gulp-imagemin#imageminoptions).