# Exercicio 1

#### Abrindo diretorio unix_tests

`cd unix_tests`

#### Baixando arquivo countries.txt

`curl -s -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`

# Exercicio 2

#### Mostrando o conteudo do arquivo countries.txt

`cat countries.txt`

# Exercicio 3

#### Mostrando o conteudo do arquivo countries.txt, use /Zambia para fazer a pesquisa, aperte n para a proxima ocorrencia e p para a anterior"

`less countries.txt`

# Exercicio 4

### Utilizar teclas n para proximo(next) e p para anterior(previous) para navegar

# Exercicio 5

#### Buscando Brazil no arquivo countries.txt

`grep "Brazil" countries.txt || echo "Não encontrado"`

# Exercicio 6

#### Buscando brazil (lowercase) no arquivo countries.txt

`grep -i "brazil" countries.txt`

# Criando arquivo que sera usado para os proximos exercicios

#### Criando arquivo phrases.txt com frases de musicas brasileiras

`cat > phrases.txt`

# Exercicio 7

#### Buscando frases que nao contenham a palavra fox

`grep -v "fox" phrases.txt`

# Exercício 8

#### Contando o numero de palavras do arquivo phrases

`echo -e "Total de palavras: $(cat phrases.txt | wc -w)`

# Exercício 9

#### Contando o numero de linhas do arquivo phrases

`echo -e "Total de linhas: $(cat phrases.txt | wc -l)`

# Exercício 10

#### Criando os arquivos empty.tbt e empty.pdf

`touch empty.tbt empty.pdf`

# Exercício 11

#### Listando todos os arquivos do diretorio unix_tests

`ls -a`

# Exercício 12

#### Listando todos os arquivos do diretorio unix_tests que terminem com txt

`ls -a *.txt`


# Exercício 13

#### Listando todos os arquivos do diretorio unix_tests que terminem com tbt ou txt

`ls -a *.{tbt,txt}`

# Exercício 14

#### Acessando manual do comando ls

`man ls`
