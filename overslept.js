/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//function that lets you know there is no way to actually pay
function confirmCart(){
    var confirmation = alert("Just proof of concept site, no actually payment possible.");
}

// scroll to top of page

//Check to see if the window is top if not then display button
$(function(){
  if ($(this).scrollTop() > 100) {
      $("#top").fadeIn();
  } else {
      $("#top").fadeOut();
  }
});

$(function() {
  $("#top").on('click', function() {
      $("HTML, BODY").animate({
          scrollTop: 0
      }, 1000);
  });
});




