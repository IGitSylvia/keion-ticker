![keion ticker](https://cloud.githubusercontent.com/assets/486818/26297001/c117bd90-3ed9-11e7-9222-1df7e0307e9f.png)

A marquee element *K-On!* style.
Yes, marquee is still alive… or a zombie at this point.

## Anyway, how to use

1. Include `keion-ticker.js` in *&lt;body&gt;*
2. Include `keion-ticker.css` in *&lt;head&gt;*
3. Use the API (below)

## API

This code should be below *.js* include.

```js

var kt = new KeionTicker({
  el: document.getElementById('kt'),
  separator: ' ― ',
  speed: '30s', // CSS time notation
  msgs: ['Message 1', 'Message 2'],
  keion: 'mio', // available: azusa, mio, mugi, yui, random or custom image URL
});

kt.start(); // .pause() or .stop();

// advanced:
KeionTicker.ImgRoot = 'https://cdn.com/keion-ticker/' // change root of image src
```

Done!

Note: Every property except *keion* is **required**.

Kami-sama bless all Keions around the world. :pray:

![hamburger](https://cloud.githubusercontent.com/assets/486818/26294525/1a570d78-3ecd-11e7-85cf-3071929b732b.gif)

## To-Do

* Remove optional rules from CSS

## Acknowledgements

* [Reset CSS animation](http://stackoverflow.com/a/36676399/2522142)
