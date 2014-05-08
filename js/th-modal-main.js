$(function() {

  var is_touch_device = function() {
    return !!('ontouchstart' in window);
  };

//Beschleunigt die Reaktionszeit auf Touch-Devices
  var click_event = (is_touch_device()) ? "touchstart" : "click";  

  var openModalHandler = function() {
    $("#th-modal").addClass("th-show");
  }

  var closeModalHandler = function() {
    $("#th-modal").removeClass("th-show");
  }

  $("#th-start-modal-1").on(click_event, openModalHandler);
  $(".th-close").on(click_event, closeModalHandler);
  $("#th-overlay").on(click_event, closeModalHandler);

});
