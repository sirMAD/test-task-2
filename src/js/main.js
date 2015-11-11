/* ==========================================================================

    Project: test-task-2
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      this.colorboxInit();
    },

    /**
     * Initialize colorbox plugin
     * 
     * @method colorboxInit
     */
    colorboxInit: function() {
      var $images = $('.news-colorbox').attr('rel', 'gall'),
          intImagesCount = $images.length,
          counter = 1,
          timer,
          intDelay = 1500;
          
          $images.colorbox({
            rel: 'gall',
            open: true,
            width: '70%',
            height: '70%'
          });
          
      $(document).bind('cbox_complete', function(){
        if(counter && counter >= intImagesCount){
          setTimeout($.colorbox.close, intDelay);
        } else if (counter) {
          timer = setTimeout(function(){
            $.colorbox.next();
            counter++;
          }, intDelay);
        }
        
      }).bind('cbox_cleanup', function(){
        clearTimeout(timer);
        counter = null;
      });
      
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
