$(document).ready(function() {

  $('body').mouseover(function() {
    event.preventDefault();
    if ($('.bg1').is(':visible')) {
      $(this).toggleClass('bg2');
      console.log('hey1');
    } else {
      $('.bg2').fadeTo('bg1');
      console.log('hey2')
    };
  });
});
