Biel lindo

# Como-que-faz

Aqui vou adicionar algumas notas e dicas, quem quiser utilizar como um manual ou diário de trabalho é uma boa!
(todos podem editar! Fiquem avontade para adicionar conteúdo relevante).

SUMÁRIO
1. Dicas
2. Git Bash
   2.1. Códigos

1. Dicas
-Aconselho a utilizar apenas o VSCode ao invés do GitBash;

-Vídeos para auxilio no GitHub: SOBRE GITBASH - https://www.youtube.com/watch?v=UBAX-13g8OM ;
                               SOBRE VS CODE - https://youtu.be/o_ECnZ8zk_Q?si=81EAwlH0T2B8m-ok ;

-Para copiar e colar no GitBash pode ser '(insert)' ou '(ctrl), (shift), (V)';

-Git bash é instalado assim que se instala o Git na máquina, nele contém uma área de códigos (como um terminal). Após add qualquer código é necessário dar um 'Enter' e não é necessário o famoso ';' ;

-Branch é como um conteiner de códigos, como se fosse a pasta mestre. Ex: a pasta 'atividade1' contem as pastas
'a' e 'b', sendo assim, a pasta mestre é a 'atividade1'. No GitHub se utiliza desse sistema para organização do que aparece no VSCode e no que eu estou mexendo no GitHub;

-Commit é o envio de um arquivo para o GitHub; existem 2 tipos de Commit, sendo: Commit & push, que empurra as alterações para o GitHub e Commit & sync, que sincroniza todas as mudanças de uma branch na sua máquina, ou seja, automatiza seu GitHub em seu VSCode;


2. GitBash
2.1. Códigos
ENTRAR NO VISUAL CODE:
.code(espaço)

PARA LIMPAR O GITBASH ("TERMINAL"):
clear

VISUALIZAR STATUS:
git status

DAR UM COMMIT:
git commit 'nome do arquivo'

DESCOBRIR A VERSÃO ATUAL (na máquina):
git --version

CRIAR UM NOVO REPOSITÓRIO:
git init

DEIXAR UM ARQUIVO EM PREPARO PARA COMMIT (é necessário antes do commit):
git add 'nome do arquivo'
PS:Se quiser enviar mais de um arquivo, só é neessario colocar um '.' no final,
Ou seja: git add .

DAR COMMIT EM UM ARQUIVO:
git commit -m "'descrição/título do commit'"
