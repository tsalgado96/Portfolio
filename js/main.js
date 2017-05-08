$(function() {

  /*SMOOTH SCROLL*/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /*ANIMATE PROGRESS BAR*/
  var waypoint = new Waypoint({
  element: document.getElementsByClassName('progress-bar'),
  handler: function(direction) {
    $('.progress .progress-bar').css("width", function() {
      return $(this).attr("aria-valuenow") + "%";
    });
  },
    offset: '90%'
  });

  /*FULLSCREEN CONTACT MODAL*/
  $(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
  });
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });

  /*SCROLLSPY*/
  /*
  $(function() {
    //caches a jQuery object containing the header element
    var header = $("#main-navigation");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            header.addClass("navbar-bg");
        } else {
            header.removeClass("navbar-bg");
        }
    });
  });
  */

});
