// Makes sure the DOM is ready to be manipulated with JQuery
// $( document ).ready(function() {
//     console.log( "Document loaded, ready for JQuery manipulation" );
// });


$(document).ready(function() {
  $("#text-box").on("input", function() {
    let txtCount = 140 - this.value.length;
    //console.log(txtCount);
    $(this).siblings(".counter").text(txtCount);
    if (txtCount < 0) {
      $(this).siblings(".counter").css('color', 'red');
    } else {
      $(this).siblings(".counter").css('color', 'black');
    }
  });
});