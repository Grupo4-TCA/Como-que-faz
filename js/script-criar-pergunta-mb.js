function categor(categorId) {
    // Obtenha uma referência ao elemento de entrada
    var inputElement = document.querySelector('.dialogoselect');
    var itemElement = document.getElementById('item-select-detalhes-' + categorId);

    // Remova a classe existente (se houver)
    inputElement.classList.remove('categoria-culinaria', 'categoria-limpeza', 'categoria-bemestar');

    // Adicione a classe com base no categorId
    switch (categorId) {
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
    var dropdownElement = document.getElementsByClassName('dropDown-categoria')[0];
    var displayValues = ['block', 'none'];
    dropdownElement.style.display = displayValues[action];
}

function adicionarMensagem() {
    const inputText = document.getElementById('input-text-subcategoria');
    const messageList = document.getElementById('messageList');

    // Obter o valor do input
    const inputValue = inputText.value.trim();

    // Verificar se o valor não está vazio
    if (inputValue !== '') {
        // Criar um novo elemento de div para exibir a mensagem
        const messageDiv = document.createElement('div');
        messageDiv.id = 'div-etiqueta-subcategoria';
        messageDiv.textContent = inputValue;
        messageDiv.style.paddingLeft = '1%';
        messageDiv.style.paddingRight = '1%';

        // Adicionar a div à lista de mensagens
        messageList.appendChild(messageDiv);

        // Limpar o valor do input
        inputText.value = '';
        
        messageDiv.addEventListener("click", function () {
        messageDiv.remove();
    })
    }
    
}