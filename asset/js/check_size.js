$(document).ready(function(){
  function checkWindowSize() {
    if (window.innerWidth < 768) {
      // Mode Handphone
      $('#firstDropdown').hide();
      $('#secondDropdown').show();
      $('#navbarSecond').show();
    } else {
      // Mode Desktop
      $('#firstDropdown').show();
      $('#secondDropdown').hide();
      $('#navbarSecond').hide();
    }
  }

  checkWindowSize();
  $(window).resize(checkWindowSize);
});

window.addEventListener('load', function() {
  ubahMarginLeft();
});