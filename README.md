# SoundCloud Widgetify

Turn any given url into

## Usage
Call `scWidgetify(<array of urls>)` on the element to which the widgets should get appended to. An optional callback allows addition function, e.g. updating height.


```javascript
$(document.body).scWidgetify(["http://soundcloud.com/forss/flickermod"], {
    callback: function(element, result) {
      console.log(result)
    }
  }
);
```

## Example
For a real life example see `exmaple.html`. Open file in Browser of your choice and pass list or urls like:

```
example.html?urls=http://snd.sc/1wPy1G,http://snd.sc/1wPy1G,http://soundcloud.com/forss/flickermod,http://soundcloud.com/max-quintenzirkus/max-quintenzirkus-bounce-1
```

## SoundCloud oEmbed
For further info check: http://developers.soundcloud.com/docs/oembed
