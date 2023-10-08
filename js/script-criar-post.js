document.addEventListener("DOMContentLoaded", function () {
    const itens = document.querySelectorAll(".tarefa");
    const progresso = document.getElementById("progresso");
    const btnAvancar = document.getElementById("btnAvancar");
    const btnVoltar = document.getElementById("btnVoltar");
    const conteudos = document.querySelectorAll(".conteudo");
    
    let currentIndex = 0;

    function handleItemClick(event) {
        currentIndex = Array.from(itens).indexOf(event.target);
        // Remova a classe 'ativo' de todos os botões de tarefa
        itens.forEach(function (item) {
            item.classList.remove("ativo");
        });
        // Adicione a classe 'ativo' ao botão de tarefa atual
        event.target.classList.add("ativo");

        // Define a largura da linha de progresso para corresponder ao botão atual
        const itemWidth = 100 / itens.length; 
        const progressoWidth = itemWidth * (currentIndex + 1);
        progresso.style.width = progressoWidth + "%";

        // Altera o nome do botão "Avançar" para "Criar Post" na Tarefa 3
        if (currentIndex === 2) {
            btnAvancar.innerText = "CRIAR DICA";
        } else {
            btnAvancar.innerText = "PRÓXIMA ETAPA...";
        }

        // Mostrar ou ocultar o botão de voltar com base na posição atual
        if (currentIndex === 0) {
            btnVoltar.style.display = "none";
        } else {
            btnVoltar.style.display = "block";
        }

        // Oculta todos os conteúdos de tarefas
        conteudos.forEach(function (conteudo, index) {
            if(index < currentIndex){
                conteudo.style.transform = "translateX(-100%)"; // Esconde à esquerda
            } else if (index === currentIndex) {
                conteudo.style.transform = "translateX(0%)"; // Mostra o conteúdo atual
            } else {
                conteudo.style.transform = "translateX(100%)"; // Esconde à direita
            }
        });

    }

    // Adiciona um ouvinte de evento de clique ao botão "Avançar"
    btnAvancar.addEventListener("click", function () {
        const nextIndex = currentIndex + 1;
        if (nextIndex < itens.length) {
            handleItemClick({ target: itens[nextIndex] });
        }
    });

    // Adiciona um ouvinte de evento de clique ao botão "Voltar"
    btnVoltar.addEventListener("click", function () {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            handleItemClick({ target: itens[prevIndex] });
        }
    });

    // Inicialmente, definir a largura da linha de progresso e mostrar o conteúdo da Tarefa 1
    handleItemClick({ target: itens[currentIndex] });
});
function category(categoryId) {
    // Obtenha uma referência ao elemento de entrada
    var inputElement = document.querySelector('.dialogoselect');
    var itemElement = document.getElementById('item-select-detalhes-' + categoryId);

    // Remova a classe existente (se houver)
    inputElement.classList.remove('categoria-culinaria', 'categoria-limpeza', 'categoria-bemestar');
  
    // Adicione a classe com base no categoryId
    switch (categoryId) {
      case 1:
        inputElement.classList.add('categoria-culinaria');
        break;
      case 2:
        inputElement.classList.add('categoria-limpeza');
        break;
      case 3:
        inputElement.classList.add('categoria-bemestar');
        break;
    }

    // Atualize o valor do input com base no item selecionado
    inputElement.value = itemElement.innerText;
}

function dropdown(action) {
    var dropdownElement = document.getElementsByClassName('dropDown')[0];
    var displayValues = ['block', 'none'];
    dropdownElement.style.display = displayValues[action];
}

function adicionarMensagem() {
    const inputText = document.getElementById('inputText');
    const messageList = document.getElementById('messageList');
  
    // Obter o valor do input
    const inputValue = inputText.value.trim();
  
    // Verificar se o valor não está vazio
    if (inputValue !== '') {
      // Criar um novo elemento de div para exibir a mensagem
      const messageDiv = document.createElement('div');
      messageDiv.id = 'div-etiqueta-subcategoria';
      messageDiv.textContent = inputValue;
      messageDiv.style.paddingLeft='1%';
      messageDiv.style.paddingRight='1%';
  
      // Adicionar a div à lista de mensagens
      messageList.appendChild(messageDiv);
  
      // Limpar o valor do input
      inputText.value = '';
    }
  }

  