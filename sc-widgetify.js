/*
 * jQuery SoundCloud Widgetify Plugin
 * [https://github.com/rngtng/soundcloud-widgetify](https://github.com/rngtng/soundcloud-widgetify)
 *
 * Copyright 2012, SoundCloud Ltd., Tobias Bielohlawek
 *
 */
(function($){
  var methods = {
    /**
     * Main function, iterate over given urls and load & append a widget
     */
    init : function( matches, options ) {
      options = $.extend(true, {
        https: false,
        dataType: 'jsonp'
      }, options);

      /**
       * Iterates over each collection element
       */
      return this.each(function() {
        var $this = $(this);

        //add ul element if not present
        $root = $this.is('ul') ? $this : $('<ul />').appendTo($this);

        $.each(matches, function(index, url) {
          url = (url.url || url).replace(/https?:/, options.https ? "https:" : "http:");

          // see http://developers.soundcloud.com/docs/oembed for more magic
          $.ajax({
            url: (options.https ? "https:" : "http:") + "//soundcloud.com/oembed",
            dataType: options.dataType,
            method: 'POST',
            iframe: true,
            data: {
              url: url,
              format: (options.dataType == 'jsonp') ? 'js' : 'json',
            },
            success: function(result, status, xhr) {
              if( $root.find('li[data-sc-url="' + url + '"]').length == 0 ) { // don't add duplicate URLs
                var iframe = result.html.replace(/https?/, options.https ? "https" : "http");
                $node = $('<li data-sc-url="' + url + '" data-sc-height="' + result.height + '">' + iframe + '</li>').appendTo($root);
                if( $.isFunction(options.callback) ) {
                  options.callback($node, result);
                }
              }
            },
            error: function(result) {
              // NOOP
            }
          });
        });
      });
    }

  };

  /**
   * Plugin scope, check if function exits, fallback to main function
   * this is mainly done to be able to test internal functions
   */
  $.fn.scWidgetify = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.scWidgetfiy' );
      return false;
    }
  };

})(jQuery);
