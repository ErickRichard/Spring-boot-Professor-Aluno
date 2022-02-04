O sistema foi implementado em spring e usei as dependencias do swagger para fazer o link dos mapeamentos.
Foi criado um CRUD que passa os parametros informados pelo usuario e uma validação de CPF por quantidade de caracteres.
As frameworks que usei foram o Spring 2.3.3, Spring data JPA, H2 database, Spring web, Dev tools e Lombok.

Para executar o projeto, basta linkar o Lombok para que as dependencias funcionem pelo jar encontrado em C:\Users\NomeUsuario\.m2\repository\org\projectlombok\lombok\1.18.12 e
rodar o lombok-1.18.12.jar e vincular o caminho do eclipse.
Feito isso basta dá um run java application no main do projeto, e no navegador seguir pelo link http://localhost:8080/swagger-ui.html
Ao finalizar, usar 

DELETE /person/deletarPessoa/{personId}Remover Pessoa designada
GET /person/procurarPessoa/{personId}Procurar Pessoa Cadastrada
GET /person/procurarPessoas/Procurar todas as Pessoas
POST /person/salvarSalvar Nova Pessoa

E passar a parametrização desejada.
