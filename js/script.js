
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

  //botao de filtro
  function selecionarFiltro(botao) {
    // Obtém todos os botões de filtro
    let botoes = document.querySelectorAll(".botao-filtro");

    // Remove a classe "active" de todos os botões de filtro
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("active");
    }

    // Define o botão clicado como ativo
    botao.classList.add("active");
}

  //icon-heart-interações
  function mudarcor(e){
    if(e.className == "azul"){
    e.className = "vermelho";
    }else{
    e.className = "azul";
    }
    }