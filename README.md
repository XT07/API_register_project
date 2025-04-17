# 📦 API de Registro de Projetos

Esta API foi desenvolvida com o objetivo de facilitar o gerenciamento de projetos (ou itens relacionados). A autenticação é feita utilizando **JWT (jsonwebtoken)**.

> ⚠️ **Atenção:** Esta API ainda **não está hospedada**. Para testá-la, clone o repositório e rode localmente.

---

## 🔗 Rotas disponíveis

| Método | Rota             | Descrição                              |
|--------|------------------|----------------------------------------|
| POST   | `/create`        | Cria um novo projeto                   |
| POST   | `/gen`           | Gera um token JWT válido por 1 hora   |
| GET    | `/project/:id`   | Retorna um projeto específico por ID   |
| GET    | `/projects`      | Retorna todos os projetos cadastrados |
| PUT    | `/project`       | Edita um projeto com base no ID enviado no corpo da requisição       |
| DELETE | `/project/:id`   | Deleta um projeto específico por ID    |

---

## 📤 Estrutura de envio (JSON)

As rotas que recebem dados esperam o seguinte formato:

```json
{
  "name": "Nome do projeto",
  "previewDate": "Previsão de término",
  "description": "Descrição do projeto",
  "startDate": "Data de início",
  "finishedDate": "Data de finalização",
  "status": "Status atual do projeto",
  "id": "apenas precio para a rota de edição"
}
```
✅ Todos os campos são obrigatórios e devem ser do tipo string.
## 🛠️ Regras de edição

  -  Campos com valores já definidos não podem ser alterados para vazios.

  -  Ao editar um projeto, se um campo for enviado vazio, ele não será alterado.

  -  A API foi configurada para preservar dados válidos já cadastrados.

## ✅ Exemplo de resposta da rota POST /create
```
{
  "name": "Projeto Exemplo",
  "previewDate": "2025-12-01",
  "description": "Descrição do projeto",
  "startDate": "2025-10-01",
  "finishedDate": "2025-12-20",
  "status": "Em andamento",
  "id": "abc123"
}
```
## 🗑️ Rota DELETE
Para deletar um projeto, basta enviar o ID do projeto na URL:
```
DELETE /project/abc123
```
## 🚀 Como rodar localmente
1. Clone o repositório:
```
git clone https://github.com/XT07/API_register_project.git
```
2. Instale as dependências:
```
npm install
```
3. Inicie o servidor:
```
node server.js
```
