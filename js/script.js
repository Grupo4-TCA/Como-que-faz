
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
    let botoes = document.querySelectorAll(".botao-filtro");

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("active");
    }
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


    
  function mostrarDiv1(div1) {
    // Ocultar todas as divs
    var divs = document.querySelectorAll('.hidden');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Mostrar a div selecionada
    var div = document.getElementById(div1);
    if (div) {
        div.style.display = 'block';
    }
}

function mostrarDiv2(div2) {
  // Ocultar todas as divs
  var divs = document.querySelectorAll('.hidden');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }
  // Ocultar todas as divs com classe "hidden-inicial"
  var divsIn = document.querySelectorAll('.hidden-inicial');
  for (var i = 0; i < divsIn.length; i++) {
    divsIn[i].style.display = 'none';
  }

  // Mostrar a div selecionada
  var div = document.getElementById(div2);
  if (div) {
      div.style.display = 'block';
  }
}
function mostrarDiv3(div3) {
  // Ocultar todas as divs
  var divs = document.querySelectorAll('.hidden');
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
  }
  // Ocultar todas as divs com classe "hidden-inicial"
  var divsIn = document.querySelectorAll('.hidden-inicial');
  for (var i = 0; i < divsIn.length; i++) {
    divsIn[i].style.display = 'none';
  }


  // Mostrar a div selecionada
  var div = document.getElementById(div3);
  if (div) {
      div.style.display = 'block';
  }
}

function mostrarDiv4(div4) {
  // Ocultar todas as divs
  var divs = document.querySelectorAll('.hidden');
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
  }
  
  // Ocultar todas as divs com classe "hidden-inicial"
  var divsIn = document.querySelectorAll('.hidden-inicial');
  for (var i = 0; i < divsIn.length; i++) {
    divsIn[i].style.display = 'none';
  }


  // Mostrar a div selecionada
  var div = document.getElementById(div4);
  if (div) {
      div.style.display = 'block';
  }
}

function mostrarDiv5(div5) {
  // Ocultar todas as divs
  var divs = document.querySelectorAll('.hidden');
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
  }

  // Ocultar todas as divs com classe "hidden-inicial"
  var divsIn = document.querySelectorAll('.hidden-inicial');
  for (var i = 0; i < divsIn.length; i++) {
    divsIn[i].style.display = 'none';
  }

  // Mostrar a div selecionada
  var div = document.getElementById(div5);
  if (div) {
      div.style.display = 'block';
  }
}