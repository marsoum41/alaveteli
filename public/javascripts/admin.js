// Generated by CoffeeScript 1.3.1
(function() {

  (function($) {
    $(document).ready(function() {
      return $('.locales a:first').tab('show');
    });
    return $('.toggle-hidden').live('click', function() {
      $(this).parents('td').find('div:hidden').show();
      return false;
    });
  })(jQuery);

}).call(this);
