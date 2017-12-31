$(document).ready(function() {

  $('body').mousemove(function() {
    event.preventDefault();
    if ($('.bg1').is(':visible')) {
      $(this).toggleClass('bg2');
      console.log('hey1');
    } else {
      $(this).fadeTo('bg1');
      console.log('hey2')
    };
  });
});
