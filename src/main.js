

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "bar-black") {
      x.className += " responsive";
    } else {
      x.className = "bar-black";
    }
  }



  // Automatic Slideshow - change image every 3 seconds
  var myIndex = 0;
  carousel();
  
  function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);}
