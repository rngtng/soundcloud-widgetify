# SoundCloud Widgetify

jQuery Lib to widgetify any soundcloud urls within a DOM

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

## Contributing

We'll check out your contribution if you:

- Provide a comprehensive suite of tests for your fork.
- Have a clear and documented rationale for your changes.
- Package these up in a pull request.

We'll do our best to help you out with any contribution issues you may have.


## License

The license is included as LICENSE in this directory.
