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

  function showDiv2() {
    document.getElementById("hide-hover-search").style.display = "block";
}

function hideDiv2() {
    document.getElementById("hide-hover-search").style.display = "none";
}

function showDiv3() {
  document.getElementById("hide-menu-lateral").style.display = "block";
}

function hideDiv3() {
  document.getElementById("hide-menu-lateral").style.display = "none";
}

function showMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "block";
}

function hideMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "none";
}

function navigateToPage(page) {
  window.location.href = page;
}

