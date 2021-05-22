var circle = document.querySelector(".cr");

body.addEventListener("mousemove", function(e) {
  
      let x = e.clientX;
      let y = e.clientY;
      var valX = x - 20;
      var valY = y - 20;
      var dotX = x + 7;
      var dotY = y + 7;
      circle.style.left = valX + 'px';
      circle.style.top = valY + 'px';
      dot.style.left = dotX + 'px';
      dot.style.top = dotY + 'px';
  
});

