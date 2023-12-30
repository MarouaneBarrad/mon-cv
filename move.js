$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        var tagTop = $(tag).offset().top;
  
        if (tagTop < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

  