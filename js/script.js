
    // funcao da conta
function opcao(evt, nomeopcao) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(nomeopcao).style.display = "block";
    evt.currentTarget.className += " active";
  }

    // funcao da tabela dentro de conta
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

  //funcao da tabela entro de perfil
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