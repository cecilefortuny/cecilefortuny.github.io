$(document).ready(function(){


// When you hover on "contact me"
$("#contact").hover(function() {
  $("#contact").css("background-color","#464e7d");
  $("#contact").css("color","white");
  }, function(){
  $("#contact").css("background-color","#ededed");
  $("#contact").css("color","black");
});


	// When you click on "contact"
	$("#contact").click(function() {
		$("#contact-container").show();
    $("#contact-box").addClass("remove-z");
});

	// "hide contact" when I click on cancel"//
	$("#cancel").click(function() {
		$("#contact-container").hide();
	});

  // "show submitted email page" when I click on submit-> add class z-index:200"//
  $("#submit").click(function() {
    $("#contact-box").removeClass("remove-z");
  });

  // "click to back to hide all contact boxes//
  $("#back").click(function() {
    $("#contact-container").hide();
  });


	//"HIDE box" when "click on contact overlay" here
	$("#contact-overlay").click(function() {
		$("#contact-container").hide();
	});

  // Scrolldown when click on menu"

  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  // end



});
