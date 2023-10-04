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
        const itemWidth = 480 / itens.length; // Divide a largura igualmente
        const progressoWidth = itemWidth * (currentIndex + 1);
        progresso.style.width = progressoWidth + "px";

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

function category(c){
    var item= document.getElementById('item-select-detalhes-'+c).innerHTML;
    document.getElementById('dialogoselect').value=item;
}

function dropdown(p){
    var e=document.getElementsByClassName('dropDown')[0];
    var d=['block','none'];
    e.style.display=d[p];
}
