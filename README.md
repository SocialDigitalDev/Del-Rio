# README PROJETO IO/REACT (Del Rio) #

Olá pessoal, venho aqui trazer uma breve explicação de qual passo a passo para rodar o projeto corretamente. Execute os seguintes comandos no terminal:

1- yarn install
2- vtex login (nomedaconta)
3- vtex use (nomedaworkspace)
4- yarn start

Dessa forma os SCSS serão minificados automaticamente e, também, irá rodar o "vtex link" na workspace selecionada, replicando tudo o que você fizer dentro do projeto.

Obs: é valido citar que periodicamente será necessário fazer o login novamente, caso execute o comando "yarn start" sem estar logado, o terminal não irá executar suas devidas funções corretamente, nesse caso basta fazer o mesmo processo a partir do 2º Passo(vtex login).

Se precisar mexer nos arquivos do checkout, basta rodar apenas "yarn checkout" no seu terminal. Os arquivos estão dentro da pasta /checkout/scss. Assim, os arquivos ficarão minificados. Para subir esses arquivos na VTEX, não é no mesmo lugar de antes, pois nesse projeto usamos o "Checkou UI Custom". Basta acessar o admin da loja e ir na sessão "Configuração da Loja". Aparecerá a aba "Javascript" e "CSS". Serão nessas caixas de texto que você irá inserir os arquivos do checkout.