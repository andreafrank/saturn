$(document).ready(function() {

  $('body').mousemove(function() {
    event.preventDefault();
      $(this).toggleClass('bg1 bg2');
  });

  // $('body').mousemove(function() {
  //   event.preventDefault();
  //   if ($('.bg1').is(':visible')) {
  //   $('.bg1').fadeTo('fast', 0, function() {
  
  //    // shows in console as opacity 0, but the colors are still there. working on fix. for now, toggleClass.

  // });
  //     console.log('hey1');
  //   } else {
  //     $(this).fadeTo();
  //     console.log('hey2');
  //   }
  // });

});


