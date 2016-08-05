# laralix-imagemin

This is a simple ImageMin wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

## Install

```
npm install --save-dev laralix-imagemin
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laralix-imagemin');

elixir(function(mix) {
   mix.imagemin();
});
```

This will scan your `resources/assets/img` directory for all image files.

### Changing the default image directories

If you want to process a different image directory, you can update your Elixir config by either:

#### Defining `elixir.config.img` in your *Gulpfile*

You can define `elixir.config.img` in your `gulpfile.js` like so:

```javascript
var elixir = require('laravel-elixir');

require('laralix-imagemin');

elixir.config.img = {
    folder: 'images',
    outputFolder: 'images'
};

elixir(function(mix) {
   mix.imagemin();
});
```

#### Setting `config.img` in an `elixir.json` file

You can create an [`elixir.json`](https://github.com/laravel/elixir/blob/dfd6655537eb3294a4c71e826cd0e8a6f6b2108b/index.js#L50-L67)
file in your project root to modify Elixir's default settings.

```json
{
    "img": {
        "folder": "images",
        "outputFolder": "images"
    }
}
```

### Custom ImageMin Options

You can override the default imagemin options by passing in an options object like so:

```javascript
mix.imagemin({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
});
```

Available imagemin options are listed [here in the gulp-imagemin readme](https://github.com/sindresorhus/gulp-imagemin#imageminoptions).