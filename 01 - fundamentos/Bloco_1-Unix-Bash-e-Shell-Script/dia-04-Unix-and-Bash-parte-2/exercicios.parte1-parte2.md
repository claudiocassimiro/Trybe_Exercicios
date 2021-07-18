# Exercícios parte I

1. Navegue até a pasta unix_tests

 `cd unix_tests/`

2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

 `cat > skills2.txt`

* `Internet`
* `Unix`
* `Bash`

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.

 `cat >> skills2.txt`

* `JavaScript`
* `Python`
* `CSS`
* `HTML`
* `Java`

`sort skills2.txt`

4. Conte quantas linhas tem o arquivo skills2.txt.

 `echo "A quantidade de linhas no arquivo skills2.txt é de:" $(wc -l skills2.txt)`

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.clear

 `sort < skills2.txt|head -3|cat >> top_skills.txt`

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

  `cat > phrases2.txt`

* `baby, compra um jornal e vem ver o sol.`
* `Eu sou apenas um rapaz, latino americano.`
* `Não tenho vocação para otario.`

7. Conte o número de linhas que contêm as letras br.

  `wc -l |grep -c 'br' phrases2.txt`

8. Conte o número de linhas que não contêm as letras br.

  `wc -l |grep -vc 'br' phrases2.txt`

9. Adicione dois nomes de países ao final do arquivo phrases2.txt.

  `cat >> phrases2.txt`

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.

  `cat phrases2.txt countries.txt > bunch_of_things.txt`

11. Ordene o arquivo bunch_of_things.txt.

  `sort < bunch_of_things.txt`

# Exercícios parte II

1. Navegue até a pasta unix_tests;

  `cd unix_tests`

2. Rode o comando ls -l e veja quais as permissões dos arquivos;

  `ls -l`
   
3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

  `chmod a=rw bunch_of_things.txt`

  `ls -l` 

  _Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt_

4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;

  `chmod a=r-- bunch_of_things.txt`

  `ls -l`

  _Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt_

5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.

  `chmod 644 chmod a=r-- bunch_of_things.txt`

  `ls -l`

  _Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt_
