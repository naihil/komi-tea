$(document).ready(function() {
    var wnd = $(window);
    var hdr = $('#header');
    
    if (wnd.height() < 800) {
        hdr.height(wnd.height());
    }

    wnd.on('resize', function() {
      hdr.height(wnd.height());
    });
  });
