$(document).ready(function() {

  $("#navLink").click(function(e){
    $("#megaMenu").toggleClass("menu-expand");
    $("#openNav").show();
    $("#closedNav").hide();
    e.preventDefault();
  });

  $("#navClose").click(function(e){
    $("#megaMenu").toggleClass("menu-expand");
    $("#openNav").hide();
    $("#closedNav").show();
    e.preventDefault();
  });

  var s = $(".fa-bars");
  var pos = s.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top & windowpos >=800) {
      s.addClass("invert-nav");
    } else {
      s.removeClass("invert-nav");
    }
  });

  var s2 = $(".back-top");
  var pos2 = s2.position();
  $(window).scroll(function() {
    var windowpos2 = $(window).scrollTop();
    if (windowpos2 >= pos2.top & windowpos2 >=800) {
      s2.addClass("arrow-show");
    } else {
      s2.removeClass("arrow-show");
    }
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
