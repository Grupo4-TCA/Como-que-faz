function AbrirMenuLateral() {
    var x = document.getElementById("user-menu");
    var y = document.getElementById("corpo");
    if (x.style.display === "none") {
      x.style.display = "block";  
      y.style.display = "none";  
    } else {
      x.style.display = "none"; 
      y.style.display = "block"; 
    }
  }
  function FecharMenuLateral() {
    var x = document.getElementById("user-menu");    
    var y = document.getElementById("corpo");
    if (x.style.display === "none") {
      x.style.display = "block"; 
      y.style.display = "none";  
    } else {
      x.style.display = "none";
      y.style.display = "block"; 
    }
  }