$(function() {

  var is_touch_device = function() {
    return !!('ontouchstart' in window);
  };

//Beschleunigt die Reaktionszeit auf Touch-Devices
  var click_event = (is_touch_device()) ? "touchstart" : "click";  

  var openModalHandler = function() {
    var animation = "";
    if (event.target) {animation=event.target.getAttribute("data-animation");};
    // Die folgende Zeiel ist für Firefox
    if (event.srcElement) {animation=event.srcElement.getAttribute("data-animation");};
    $(".th-modal."+animation).addClass("th-show");
  }

  var closeModalHandler = function() {
    $(".th-modal").removeClass("th-show");
  }

  $(".start-button").on(click_event, openModalHandler);
  $(".th-close").on(click_event, closeModalHandler);
  $("#th-overlay").on(click_event, closeModalHandler);

});
