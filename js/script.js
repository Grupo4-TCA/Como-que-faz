function opcao(evt, nomeopcao) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(nomeopcao).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function opiniao(evt, opiniaoperfil) {
    var i, tabcontentperfil, tablinksperfil;
  
    tabcontentperfil = document.getElementsByClassName("tabcontent-perfil");
    for (i = 0; i < tabcontentperfil.length; i++) {
      tabcontentperfil[i].style.display = "none";
    }
  
    tablinksperfil = document.getElementsByClassName("tablinks-perfil");
    for (i = 0; i < tablinksperfil.length; i++) {
      tablinksperfil[i].className = tablinksperfil[i].className.replace(" active", "");
    }
  
    document.getElementById(opiniaoperfil).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function piniquicao(evt, postagensopcao) {
    var i, tabcontentfiltro, tablinksfiltro;
  
    tabcontentfiltro = document.getElementsByClassName("tabcontent-filtro");
    for (i = 0; i < tabcontentfiltro.length; i++) {
      tabcontentfiltro[i].style.display = "none";
    }
  
    tablinksfiltro = document.getElementsByClassName("tablinks-filtro");
    for (i = 0; i < tablinksfiltro.length; i++) {
      tablinksfiltro[i].className = tablinksfiltro[i].className.replace(" active", "");
    }
  
    document.getElementById(postagensopcao).style.display = "block";
    evt.currentTarget.className += " active";
  }