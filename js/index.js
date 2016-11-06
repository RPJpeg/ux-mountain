$(document).ready(function() {

  $("#navLink").click(function(e){
    $("#megaMenu").toggleClass("menu-expand");
    e.preventDefault();
  });

  $("header, main, section, .carousel-box, .footer-hero footer, .sub-footer, .wrapper").click(function(e){
    $("#megaMenu").removeClass("menu-expand");
    e.preventDefault();
  });

  $("#carLeftButtonA").click(function(e){
      $("#carBox3").show();
      $("#carBox2").hide();
      $("#carBox1").hide();
      e.preventDefault();
  });

  $("#carLeftButtonB").click(function(e){
      $("#carBox3").hide();
      $("#carBox2").hide();
      $("#carBox1").show();
      e.preventDefault();
  });

  $("#carLeftButtonC").click(function(e){
      $("#carBox3").hide();
      $("#carBox2").show();
      $("#carBox1").hide();
      e.preventDefault();
  });

  $("#carRightButtonA").click(function(e){
      $("#carBox3").hide();
      $("#carBox2").show();
      $("#carBox1").hide();
      e.preventDefault();
  });

  $("#carRightButtonB").click(function(e){
      $("#carBox3").show();
      $("#carBox2").hide();
      $("#carBox1").hide();
      e.preventDefault();
  });

  $("#carRightButtonC").click(function(e){
      $("#carBox3").hide();
      $("#carBox2").hide();
      $("#carBox1").show();
      e.preventDefault();
  });

});
