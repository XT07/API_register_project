# API para registro de projetos ou relacionados

Está API foi desenvolvida com o objetivo de facilitar o gerenciamento dos projetos ou relacionados, a API utiliza o jsonwebtoken para fazer as autenticações de usuário

## Rotas

A API possue essas rotas para o seu funcionamento:

POST - /create //cria um novo projeto
POST - /gen //gera um novo token com duração de 1h
GET - /project/:id //filtra o projeto pelo id
GET - /projects //pega todos os projetos
PUT - /project //edita um projeto especifico com o id fornecido
DELETE - /project //deleta o projeto especifico com o id fornecido

## Estrutura de envio

As rotas receptoras de dados recebem os dados e formato JSON.
Estrtutura:

```
{
    "name": "", //nome do projeto
    "previewDate": "", //descrição do projeto
    "description": "", //dia que o projeto começou
    "startDate": "", //previsão para o termino do peojeto
    "finishedDate": "", //dia que finalizou
    "status": "" //status de andamento do projeto
}
```

Todos os campos tem que estar preenchdiso e tem que estar no tipo string, isso vlae para a rota de edição tambem. Mas se algum campo que possui valor for alterado para sem valor ele não será alterado e manterá o seu valor ou seja campos depois de definidos com ou sem valor não poderão ser alterados para campos sem valor pois a API foi configurada para não aceitar campos alterados para vazios depois de uma edição.

## Rota delete

Apenas precisa do id do projeto para executar e deleção.