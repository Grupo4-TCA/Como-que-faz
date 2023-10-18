let count = 1;

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;

    // Defina o background apenas para o botão correspondente
    const currentBtn = document.querySelector(".manual-btn" + count);
    currentBtn.style.background = "#cb218c";

    // Remova o background dos outros botões manuais
    for (let i = 1; i <= 3; i++) {
        if (i !== count) {
            const otherBtn = document.querySelector(".manual-btn" + i);
            otherBtn.style.background = "white";
        }
    }
    console.log("Next slide: " + count);
}

// Inicie o carrossel automaticamente após o carregamento da página
window.addEventListener("load", function () {
  console.log("Página carregada!"); // Adicione esta linha
  setInterval(nextImage, 3000);
  document.getElementById("radio1").checked = true;
  document.querySelector(".manual-btn1").style.background = "#cb218c";
});

//------------------------------------------------------------------------------------

let countD = 1;

function nextImageD() {
    countD++;
    if (countD > 3) {
        countD = 1;
    }
    document.getElementById("radio" + countD +"D").checked = true;

    // Defina o background apenas para o botão correspondente
    const currentBtn = document.querySelector(".manual-btnD" + countD+"-D");
    currentBtn.style.background = "#cb218c";

    // Remova o background dos outros botões manuais
    for (let i = 1; i <= 3; i++) {
        if (i !== countD) {
            const otherBtn = document.querySelector(".manual-btnD" + i+"-D");
            otherBtn.style.background = "white";
        }
    }
    console.log("Next slide: " + countD);
}

// Inicie o carrossel automaticamente após o carregamento da página
window.addEventListener("load", function () {
  console.log("Página carregada!"); // Adicione esta linha
  setInterval(nextImage, 3000);
  document.getElementById("radio1D").checked = true;
  document.querySelector(".manual-btnD1-D").style.background = "#cb218c";
});

//------------------------------------------------------------------------------------

function VisiRecente() {
    var x = document.getElementById("Conteudo-Recente");
    var y = document.getElementById("Conteudo-EmAlta");
    var z = document.getElementById("Conteudo-Rapidas");
    var emAltaButton = document.querySelector(".EmAlta");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      emAltaButton.classList.remove("active");
    }
  }
  window.onload = function() {
    var emAltaButton = document.querySelector(".EmAlta");
    emAltaButton.classList.add("active");
};

function VisiEmAlta() {
    var x = document.getElementById("Conteudo-Recente");
    var y = document.getElementById("Conteudo-EmAlta");
    var z = document.getElementById("Conteudo-Rapidas");

    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}
  function VisiRapidas() {
    var x = document.getElementById("Conteudo-Recente");
    var y = document.getElementById("Conteudo-EmAlta");
    var z = document.getElementById("Conteudo-Rapidas");
    var emAltaButton = document.querySelector(".EmAlta");

    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      emAltaButton.classList.remove("active");
    }
  }

  //------------------------------------------------------------------------------------

  function VisiRecenteDkt() {
    var x = document.getElementById("Conteudo-Recente-Dkt");
    var y = document.getElementById("Conteudo-EmAlta-Dkt");
    var z = document.getElementById("Conteudo-Rapidas-Dkt");
    var emAltaButton = document.querySelector(".EmAlta-Dkt");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      emAltaButton.classList.remove("active");
    }
  }
  window.onload = function() {
    var emAltaButton = document.querySelector(".EmAlta-Dkt");
    emAltaButton.classList.add("checked");
};

function VisiEmAltaDkt() {
    var x = document.getElementById("Conteudo-Recente-Dkt");
    var y = document.getElementById("Conteudo-EmAlta-Dkt");
    var z = document.getElementById("Conteudo-Rapidas-Dkt");

    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}
  function VisiRapidasDkt() {
    var x = document.getElementById("Conteudo-Recente-Dkt");
    var y = document.getElementById("Conteudo-EmAlta-Dkt");
    var z = document.getElementById("Conteudo-Rapidas-Dkt");
    var emAltaButton = document.querySelector(".EmAlta-Dkt");

    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      emAltaButton.classList.remove("active");
    }
  }

  //--------------------------- POST 1

  function mostrarDivOculta() {
    var divOculta = document.getElementById("hover-post1");
    var ta = document.getElementById("icon-culinaria-branco");
    var t2 = document.getElementById("texto-atras");
    divOculta.style.display = "block";
    ta.style.display = "none";
    t2.style.display = "none";
}

function esconderDivOculta() {
    var divOculta = document.getElementById("hover-post1");
    var ta = document.getElementById("icon-culinaria-branco");
    var t2 = document.getElementById("texto-atras");
    divOculta.style.display = "none";
    ta.style.display = "block";
    t2.style.display = "block";
}

  //--------------------------- POST 2

function mostrarDivOculta2() {
  var divOculta = document.getElementById("hover-post2");
  var ta = document.getElementById("icon-culinaria-branco2");
  var t2 = document.getElementById("texto-atras2");
  divOculta.style.display = "block";
  ta.style.display = "none";
  t2.style.display = "none";
}

function esconderDivOculta2() {
  var divOculta = document.getElementById("hover-post2");
  var ta = document.getElementById("icon-culinaria-branco2");
  var t2 = document.getElementById("texto-atras2");
  divOculta.style.display = "none";
  ta.style.display = "block";
  t2.style.display = "block";
}

  //--------------------------- POST 3

  function mostrarDivOculta3() {
    var divOculta3 = document.getElementById("hover-post3");
    var ta3 = document.getElementById("icon-limpeza-branco3");
    var t23 = document.getElementById("texto-atras3");
    divOculta3.style.display = "block";
    ta3.style.display = "none";
    t23.style.display = "none";
  }
  
  function esconderDivOculta3() {
    var divOculta3 = document.getElementById("hover-post3");
    var ta3 = document.getElementById("icon-limpeza-branco3");
    var t23 = document.getElementById("texto-atras3");
    divOculta3.style.display = "none";
    ta3.style.display = "block";
    t23.style.display = "block";
  }
  
  //--------------------------- POST 4

  function mostrarDivOculta4() {
    var divOculta3 = document.getElementById("hover-post4");
    var ta3 = document.getElementById("icon-limpeza-branco4");
    var t23 = document.getElementById("texto-atras4");
    divOculta3.style.display = "block";
    ta3.style.display = "none";
    t23.style.display = "none";
  }
  
  function esconderDivOculta4() {
    var divOculta3 = document.getElementById("hover-post4");
    var ta3 = document.getElementById("icon-limpeza-branco4");
    var t23 = document.getElementById("texto-atras4");
    divOculta3.style.display = "none";
    ta3.style.display = "block";
    t23.style.display = "block";
  }

  //--------------------------- POST 5

  function mostrarDivOculta5() {
    var divOculta3 = document.getElementById("hover-post5");
    var ta3 = document.getElementById("icon-limpeza-branco5");
    var t23 = document.getElementById("texto-atras5");
    divOculta3.style.display = "block";
    ta3.style.display = "none";
    t23.style.display = "none";
  }
  
  function esconderDivOculta5() {
    var divOculta3 = document.getElementById("hover-post5");
    var ta3 = document.getElementById("icon-limpeza-branco5");
    var t23 = document.getElementById("texto-atras5");
    divOculta3.style.display = "none";
    ta3.style.display = "block";
    t23.style.display = "block";
  }

    //--------------------------- POST 6

    function mostrarDivOculta6() {
      var divOculta3 = document.getElementById("hover-post6");
      var ta3 = document.getElementById("icon-limpeza-branco6");
      var t23 = document.getElementById("texto-atras6");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta6() {
      var divOculta3 = document.getElementById("hover-post6");
      var ta3 = document.getElementById("icon-limpeza-branco6");
      var t23 = document.getElementById("texto-atras6");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- POST 7

    function mostrarDivOculta7() {
      var divOculta3 = document.getElementById("hover-post7");
      var ta3 = document.getElementById("icon-culinaria-branco7");
      var t23 = document.getElementById("texto-atras7");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta7() {
      var divOculta3 = document.getElementById("hover-post7");
      var ta3 = document.getElementById("icon-culinaria-branco7");
      var t23 = document.getElementById("texto-atras7");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- POST 8

    function mostrarDivOculta8() {
      var divOculta3 = document.getElementById("hover-post8");
      var ta3 = document.getElementById("icon-limpeza-branco8");
      var t23 = document.getElementById("texto-atras8");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta8() {
      var divOculta3 = document.getElementById("hover-post8");
      var ta3 = document.getElementById("icon-limpeza-branco8");
      var t23 = document.getElementById("texto-atras8");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- POST 9

    function mostrarDivOculta9() {
      var divOculta3 = document.getElementById("hover-post9");
      var ta3 = document.getElementById("icon-limpeza-branco9");
      var t23 = document.getElementById("texto-atras9");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta9() {
      var divOculta3 = document.getElementById("hover-post9");
      var ta3 = document.getElementById("icon-limpeza-branco9");
      var t23 = document.getElementById("texto-atras9");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- POST 10

    function mostrarDivOculta10() {
      var divOculta3 = document.getElementById("hover-post10");
      var ta3 = document.getElementById("icon-bemestar-branco10");
      var t23 = document.getElementById("texto-atras10");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta10() {
      var divOculta3 = document.getElementById("hover-post10");
      var ta3 = document.getElementById("icon-bemestar-branco10");
      var t23 = document.getElementById("texto-atras10");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- POST 10

    function mostrarDivOculta11() {
      var divOculta3 = document.getElementById("hover-post11");
      var ta3 = document.getElementById("icon-culinaria-branco11");
      var t23 = document.getElementById("texto-atras11");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta11() {
      var divOculta3 = document.getElementById("hover-post11");
      var ta3 = document.getElementById("icon-culinaria-branco11");
      var t23 = document.getElementById("texto-atras11");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- POST 12

    function mostrarDivOculta12() {
      var divOculta3 = document.getElementById("hover-post12");
      var ta3 = document.getElementById("icon-bemestar-branco12");
      var t23 = document.getElementById("texto-atras12");
      divOculta3.style.display = "block";
      ta3.style.display = "none";
      t23.style.display = "none";
    }
    
    function esconderDivOculta12() {
      var divOculta3 = document.getElementById("hover-post12");
      var ta3 = document.getElementById("icon-bemestar-branco12");
      var t23 = document.getElementById("texto-atras12");
      divOculta3.style.display = "none";
      ta3.style.display = "block";
      t23.style.display = "block";
    }

    //--------------------------- 
    var div = document.getElementById("salvar-post");
    var favoritoPre = document.getElementById("favorito-pre");
    
    div.addEventListener("click", function() {
        if (favoritoPre.style.display === "none" || favoritoPre.style.display === "") {
            favoritoPre.style.display = "block";
        } else {
            favoritoPre.style.display = "none";
        }
    });