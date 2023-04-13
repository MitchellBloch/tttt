window.addEventListener("load", function() {
    var figCaptions = document.querySelectorAll("figcaption");
    var figCaption = figCaptions[1].textContent;
    alert(figCaption);
  });



  
var display = document.getElementById("display");

document.querySelectorAll("img.thumbnail").forEach(function(img) {
  img.addEventListener("mouseover", function(event) {
    var src = event.target.getAttribute("src");
    var alt = event.target.getAttribute("alt");
    display.style.backgroundImage = "url('" + src + "')";
    display.textContent = alt;
    event.target.style.visibility = "hidden";
  });
  
  img.addEventListener("mouseout", function(event) {
    event.target.style.visibility = "visible";
  });

  img.tabIndex = 0;


  img.addEventListener("focus", function(event) {
    var src = event.target.getAttribute("src");
    var alt = event.target.getAttribute("alt");
    display.style.backgroundImage = "url('" + src + "')";
    display.textContent = alt;
    event.target.style.outline = "2px solid blue";
  });

  img.addEventListener("blur", function(event) {
    display.style.backgroundImage = "";
    display.textContent = "Hover over an image below to display the image and the alt text.";
    event.target.style.outline = "";
  });



});




document.addEventListener("mouseout", function(event) {
    if (!event.target.closest("img.thumbnail")) {
      // Revert back to the original state
      display.style.backgroundImage = "";
      display.textContent = "Hover over an image below to display the image and the alt text.";
      document.querySelectorAll("img.thumbnail").forEach(function(img) {
        img.style.visibility = "visible";
      });
    }
  });