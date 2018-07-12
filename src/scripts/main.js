import $ from 'jquery';
window.$ = window.jQuery = $;
import 'bootstrap/dist/js/bootstrap';


$(document).ready(function(){
  var title = $("title").text();
  console.log(title + " is ready.");

  $(".form-control").on('focus blur', function(){
     $(this).prev().toggleClass('active');
  })
});
