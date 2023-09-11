
    // funcao da conta
function opcao(evt, tab) {
  var i;
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.classList.add("active");
}
document.getElementById("Perfil").style.display = "block";
document.getElementsByClassName("tablinks")[0].classList.add("active");


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
  function openTab(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent-filtro");
    var tablinks = document.getElementsByClassName("tablinks-filtro");
  
    // Esconda todos os conteúdos das abas
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remova a classe "active" de todos os botões das abas
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // Exiba o conteúdo da aba selecionada
    document.getElementById(tabName).style.display = "block";
  
    // Adicione a classe "active" ao botão da aba selecionada
    event.currentTarget.classList.add("active");
  }
  
  // Exiba a primeira aba como ativa por padrão
  document.getElementById("Recentes").style.display = "block";
  document.getElementsByClassName("tablinks-filtro")[0].classList.add("active");
  