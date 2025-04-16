# API para registro de projetos ou relacionados

Está API foi desenvolvida com o objetivo de facilitar o gerenciamento dos projetos ou relacionados, a API utiliza o jsonwebtoken para fazer as autenticações de usuário

## Rotas

A API possue essas rotas para o seu funcionamento:

- POST - /create //cria um novo projeto
- GET - /project/:id //filtra o projeto pelo id
- GET - /projects //pega todos os projetos

## Estrutura de envio

As rotas receptoras de dados recebem os dados e formato JSON.
Estrtutura:

```
{
    "name": "", //nome do projeto
    "previewDate": "", //descrição do projeto
    "description": "", //dia que o projeto começou
    "startDate": "", //previsão de finalizar
    "finishedDate": "", //dia que finalizou
    "status": "" //status de andamento do projeto
}
```

Todos os campos tem que estar preenchdiso e tem que estar no tipo string
